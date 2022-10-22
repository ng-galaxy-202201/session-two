import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HasPermissionGuard } from './guards/has-permission.guard';
import { IsAuthenticatedGuard } from './guards/is-authenticated.guard';
import { IsStudentGuard } from './guards/is-student.guard';
import { IsTeacherGuard } from './guards/is-teacher.guard';
import { ShouldLeaveGuard } from './guards/should-leave.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { ConfigComponent } from './pages/admin/config/config.component';
import { DashboardStudentsComponent } from './pages/admin/dashboard-students/dashboard-students.component';
import { DashboardTeachersComponent } from './pages/admin/dashboard-teachers/dashboard-teachers.component';
import { UserDetailComponent } from './pages/admin/user-detail/user-detail.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UserInfoResolver } from './resolvers/user-info.resolver';

// www.domain.com
// www.domain.com/dashboard

// www.domain.com/admin
// www.domain.com/admin/users
// www.domain.com/admin/config

const routes: Routes = [
  /**
   * Siempre que se haga una redirección en el path principal
   * se debe agregar el pathMach: 'full'
   */
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'iniciar-sesion', redirectTo: 'login' },
      { path: 'login', component: LoginComponent },
      { path: 'not-found', component: NotFoundComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    resolve: {
      userInfo: UserInfoResolver,
    },
    canActivate: [IsAuthenticatedGuard],
    canActivateChild: [IsAuthenticatedGuard],
    children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      {
        path: 'dashboard',
        canMatch: [IsStudentGuard],
        component: DashboardStudentsComponent,
      },
      {
        path: 'dashboard',
        canMatch: [IsTeacherGuard],
        component: DashboardTeachersComponent,
      },
      {
        path: 'users',
        canActivate: [HasPermissionGuard],
        data: {
          roles: ['ADMIN'],
        },
        component: UsersComponent,
      },
      /**
       * Si se desea configurar un parametro opcional
       * se debe crear ese ruta dos veces
       * una con el parametro y otra sin. ambas deben apuntar al mismo componente
       */
      {
        path: 'users/:studentId',
        component: UserDetailComponent,
        canDeactivate: [ShouldLeaveGuard],
        resolve: {
          userInfo: UserInfoResolver,
        },
      },
      {
        path: 'users/:studentId/:optionalParam',
        component: UserDetailComponent,
      },
      { path: 'config', component: ConfigComponent },
    ],
  },

  /**
   * Configuración Lazy loading - Carga diferida
   */
  {
    path: 'auth',
    canActivate: [IsAuthenticatedGuard],
    canLoad: [IsAuthenticatedGuard], // siempre hay que usar el canLoad de la mano con canActivate
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },

  /**
   * configuración de la ruta no encontrada tiene que ir al final
   */
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

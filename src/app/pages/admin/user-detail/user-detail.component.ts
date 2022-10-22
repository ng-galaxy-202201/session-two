import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShouldLeave } from 'src/app/interfaces/should-leave.interface';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, ShouldLeave {
  studentId!: number;

  constructor(private route: ActivatedRoute) {
    /**
     * Nota: Cuando ingresamos a la misma ruta con diferentes parametros
     * no se destruye ni vuelve a construir el componente, solo se reutiliza la instancia
     */

    /**
     * snapshot me permite capturar los parametros solo cuando el componente se construye
     */
    this.studentId = +this.route.snapshot.paramMap.get('studentId')!;

    /**
     * paramMap.subscribe me permite escuchar cuando los parametros se actualizan
     * sin salir de la pagina
     */
    this.route.paramMap.subscribe((paramMap) => {
      this.studentId = +paramMap.get('studentId')!;
    })
  }

  ngOnInit(): void {
  }

  shouldLeave() {
    return !!confirm('Desea salir?')
  }

}

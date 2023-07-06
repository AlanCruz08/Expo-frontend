import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router
  ) { }

  onSave() {
    // Realiza la redirección a la página de personas
    this.router.navigateByUrl('personas');

    // Devuelve los datos ingresados en el formulario
    this.dialogRef.close({
      nombre: this.data.nombre,
      apellido_p: this.data.apellido_p,
      apellido_m: this.data.apellido_m,
    });
  }
}

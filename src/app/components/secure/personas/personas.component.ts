import { Component,OnInit } from '@angular/core';
//importamos httpClient
import { HttpClient } from '@angular/common/http';
//importamos el matdiaglog
import { MatDialog } from '@angular/material/dialog';
//importamos el modal
import { ModalComponent } from '../modal/modal.component';
//importamos el router
import { Router } from '@angular/router';
//importamos la interface
import { Persona } from '../../../interface/persona';
//importamos los servicios  
import { PersonaService } from '../../../services/persona/persona.service';
@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
// Propiedad para almacenar los datos de las personas
personas: Persona [] = [];

//creamos un constructor
//private dialog: MatDialog
 constructor(private http: HttpClient,  private dialog: MatDialog, private router:Router,private service: PersonaService) {
  
 }

//con el OnInit hacemos el get de la api
  ngOnInit() {
    this.service.getPersonas()
      .subscribe((data: any) => {
        this.personas = data.data;
        console.log(this.personas, 'personas');
      }
      );
  }

  //funcion para crear
  openCreateModal() {
 
    const dialogRef = this.dialog.open(ModalComponent, {
      data: { action: 'create' },
      
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Se ha guardado una nueva persona, realiza las acciones necesarias, como enviar una solicitud HTTP para guardarla en el servidor
        const nuevaPersona: Persona = {
          //nombres de la base de datos
          nombre: result.nombre,
          apellido_p: result.apellido_p,
          apellido_m: result.apellido_m,
        };
  
        // Envía la solicitud HTTP para guardar la nueva persona con el service
          this.service.createPersona(nuevaPersona).subscribe((response: any) => {
            // Actualiza la lista de personas con la respuesta del servidor
            this.personas.push(response.data);
            });
      }
    });
  }

  //creamos la funcion para abrir el modal y editar
  openEditModal(persona: Persona) {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        action: 'edit',
        nombre: persona.nombre,
        apellido_p: persona.apellido_p,
        apellido_m: persona.apellido_m,
      },
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const personaEditada: Persona = {
          nombre: result.nombre,
          apellido_p: result.apellido_p,
          apellido_m: result.apellido_m,
        };
  
        if (persona.id) { // Validar que persona.id tenga un valor
          this.service.updatePersona(persona.id, personaEditada).subscribe((response: any) => {
            const personaActualizada = response.data;
            const index = this.personas.findIndex(p => p.id === personaActualizada.id);
            if (index !== -1) {
              this.personas[index] = personaActualizada;
            }
          });
        }
      }
    });
  }
  
  
  

//creamos la funcion para eliminar la persona

//creamos la funcion para eliminar la persona
deletePersona(persona: Persona) {
  //se parsea
  this.service.deletePersona(Number(persona.id)).subscribe(() => {
    // Elimina la persona de la lista local
    this.personas = this.personas.filter(p => p.id !== persona.id);
  });
}
  
  
}

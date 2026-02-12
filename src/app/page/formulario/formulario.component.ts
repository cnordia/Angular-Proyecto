import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Para el ngClass

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
})
export class FormularioComponent {

  private fb = inject(FormBuilder); // Inyectamos el constructor de formularios

  formularioContacto = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    mensaje: ['', [Validators.required, Validators.minLength(10)]]
  });

  enviarFormulario() {
    if (this.formularioContacto.invalid) {
      // Si el formulario no es válido, marcamos todos los campos como "tocados" para que salgan los errores
      this.formularioContacto.markAllAsTouched();
      return;
    }

    // AQUI ES DONDE SE ENVIARÍA EL EMAIL
    const datos = this.formularioContacto.value;
    console.log("Enviando correo con estos datos:", datos);
    
    // Simulación de envío (Angular por sí solo no envía emails, necesita un Backend o servicio como EmailJS)
    alert(`¡Mensaje enviado! Gracias ${datos.nombre}, te contactaremos a ${datos.email}`);
    
    // Limpiamos el formulario
    this.formularioContacto.reset();
  }
  
  // Getter para saber si un campo tiene error y fue tocado (para limpiar el HTML)
  tieneError(campo: string, tipoError: string) {
    const control = this.formularioContacto.get(campo);
    return control?.hasError(tipoError) && control?.touched;
  }

}

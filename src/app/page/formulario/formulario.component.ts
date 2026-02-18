import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Para el ngClass
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule, CommonModule ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
})
export class FormularioComponent {

  private fb = inject(FormBuilder); // Inyectamos el constructor de formularios


  // Agrupamos todo el formulario para poder validarlo entero con formularioContacto.invalid
  formularioContacto = this.fb.group({
    // Valorinicial, [Reaglas de validación]
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    mensaje: ['', [Validators.required, Validators.minLength(10)]]
  });

  async enviarFormulario() {
    if (this.formularioContacto.invalid) {
      this.formularioContacto.markAllAsTouched();
      return;
    }

    try {
      //Preparamos los datos para EmailJS
      const datosParaEmail = {
        nombre: this.formularioContacto.value.nombre,
        email: this.formularioContacto.value.email,
        mensaje: this.formularioContacto.value.mensaje
      };

      // Enviamos el correo con las credenciales de EmailJS (serviceID, templateID, datos, publicKey)
      // emailjs.send(SERVICE_ID, TEMPLATE_ID, DATOS, PUBLIC_KEY)
      await emailjs.send('service_8haxrrg', 'template_3hyxrip', datosParaEmail, '9P6EBqhgNOCbpzpIq');

      console.log("Correo enviado:", datosParaEmail);
      alert('¡Mensaje enviado correctamente!');
      
      // Limpiamos el formulario
      this.formularioContacto.reset();

    } catch (error) {
      console.error("Error al enviar:", error);
      alert('Hubo un error al enviar el mensaje.');
    }
  }

  // 4. Helper para limpiar el HTML (Devuelve true si hay error y el usuario tocó el campo)
  tieneError(campo: string, tipoError: string): boolean {
    const control = this.formularioContacto.get(campo);
    // El '?' evita que rompa si el campo no existe
    return (control?.hasError(tipoError) && control?.touched) ?? false;
  }

}

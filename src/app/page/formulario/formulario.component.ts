import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Para el ngClass
import emailjs from '@emailjs/browser';

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

  async enviarFormulario() {
    // A. Si el formulario está mal, mostramos los errores en rojo y paramos
    if (this.formularioContacto.invalid) {
      this.formularioContacto.markAllAsTouched();
      return;
    }

    try {
      // B. Preparamos los datos para EmailJS
      // Las claves (izquierda) deben coincidir con tu Template de EmailJS: {{nombre}}, {{email}}, etc.
      const datosParaEmail = {
        nombre: this.formularioContacto.value.nombre,
        email: this.formularioContacto.value.email,
        mensaje: this.formularioContacto.value.mensaje
      };

      // C. Enviamos el correo (Sustituye con TUS credenciales)
      // emailjs.send(SERVICE_ID, TEMPLATE_ID, DATOS, PUBLIC_KEY)
      await emailjs.send('service_8haxrrg', 'template_3hyxrip', datosParaEmail, '9P6EBqhgNOCbpzpIq');

      // D. Éxito
      console.log("✅ Correo enviado:", datosParaEmail);
      alert('¡Mensaje enviado correctamente! Nos pondremos en contacto contigo.');
      
      // Limpiamos el formulario para que quede vacío
      this.formularioContacto.reset();

    } catch (error) {
      // E. Error
      console.error("❌ Error al enviar:", error);
      alert('Hubo un error al enviar el mensaje. Por favor, inténtalo más tarde.');
    }
  }

  // 4. Helper para limpiar el HTML (Devuelve true si hay error y el usuario tocó el campo)
  tieneError(campo: string, tipoError: string): boolean {
    const control = this.formularioContacto.get(campo);
    // El '?' (optional chaining) evita que rompa si el campo no existe
    return (control?.hasError(tipoError) && control?.touched) ?? false;
  }

}

import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-register-form',
  styleUrl: './register-form.css',
  templateUrl: './register-form.html',
})
export class RegisterForm {
  courses = ['Angular', 'Spring Boot', 'Java', 'Python', 'Bases de datos'];

  hasUpper = /[A-Z]/;
  hasLower = /[a-z]/;
  hasNumber = /\d/;
  hasSpecial = /[^A-Za-z0-9]/;
  showPassword = false;

  registerForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
      Validators.pattern(/^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ ]+$/),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
      Validators.pattern(/^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ ]+$/),
    ]),
    dni: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(\d{8}[A-Za-z]|[XYZxyz]\d{7}[A-Za-z])$/),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(\+34 )?[67]\d{2} ?\d{3} ?\d{$/),
    ]),

    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(15),
      Validators.pattern(/^[A-Za-z][A-Za-z0-9_]*$/),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/),
    ]),

    course: new FormControl('', Validators.required),
    hours: new FormControl<number | null>(null, [
      Validators.required,
      Validators.min(2),
      Validators.max(40),
    ]),
    postalCode: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|[1-4]\d|5[0-2])\d{3}$/),
    ]),

    terms: new FormControl(false, Validators.requiredTrue),
  });

  isInvalidField(field: string) {
    const control = this.registerForm.get(field);
    return control?.invalid && (control?.dirty || control?.touched);
  }

  hasError(field: string, error: string) {
    const control = this.registerForm.get(field);
    return control?.hasError(error) && (control?.dirty || control?.touched);
  }

  missing(field: string, requirement: RegExp) {
    const control = this.registerForm.get(field);
    return (control?.dirty || control?.touched) && !!control?.value && !requirement.test(control.value);
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    console.log(this.registerForm.value);
  }
}

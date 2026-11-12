import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [],
  selector: 'app-register-form',
  styleUrl: './register-form.css',
  templateUrl: './register-form.html',
})
export class RegisterForm {
  RegisterForm=new FormGroup({
    personales=new FormGroup({
    Nombre:new FormControl('',[Validators.required])
    Apellidos
    DNI/NIE
    Teléfono móvil

    })
  })

  DatosCuenta=new FormGroup({
    NombreDeUsuario
    Email
    Contraseña 
  })
}

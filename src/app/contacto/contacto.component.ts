import { Component, OnInit } from '@angular/core';
import{contactoUsuario} from '../models/contacto.usuarios'

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public usuario: contactoUsuario;

  constructor() {
    this.usuario = new contactoUsuario ('','','','')
   }

  ngOnInit(): void {
  }

  onSubmit(form:any) {
   
  }

}

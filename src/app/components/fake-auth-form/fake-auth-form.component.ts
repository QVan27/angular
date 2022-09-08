import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fake-auth-form',
  templateUrl: './fake-auth-form.component.html',
  styleUrls: ['./fake-auth-form.component.css']
})
export class FakeAuthFormComponent implements OnInit {

  log: string = "";
  pass: string = '';
  logged : boolean = false;

  /* A la soumission le form récupère les input dans les attr du composant
  si le log et le pass ne sont pas vide, le form affiche le log avec 
  un bouton se déconnecter
  si on clic sur le bouton se déconnecter, le formulaire original revient*/

  constructor() { 
    this.logged = false;
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('log') != null){
      this.logged = true;
    }
  }

  onSubmit(): void {
    if(!this.logged && this.log !== '' && this.pass !== '') {
      //stocker l'identifiant quelque part
      // session
      sessionStorage.setItem('log', this.log);
      // local storage
      localStorage.setItem('log', this.log)
      this.logged = true;
    }else{
      this.log = '';
      this.pass = '';
      this.logged = false;
      sessionStorage.removeItem('log');
      localStorage.removeItem('log');
    }
  }

}

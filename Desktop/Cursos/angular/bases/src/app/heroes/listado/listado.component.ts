import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes:string[]=['Spiderman','Ironmn','Hulk','Thor','Capitan America']; 
  heroesB:string []=[]; 
  condicion:boolean=false;

  borrarHeroe(){
    const heroeBorrado=this.heroes.shift();
    this.heroesB.push(heroeBorrado);   
    this.condicion=true; 
    
  }

  

}

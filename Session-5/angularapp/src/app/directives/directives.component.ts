import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  products=[{"name":"Nikunj Soni","email":"nikunj@gmail.com"},
  {"name":"Ellen Sigudla","email":"ellen@gmail.com"},
  {"name":"Hazel Sethole","email":"hs@gmail.com"},
  {"name":"Zandile Sehcangu","email":"zc@gmail.com"},
  {"name":"jhon alex","email":"ja@gmail.com"}]

  
   flag=false;
   showMe(){
     this.flag=!this.flag;
   }

   public day= new Date().getDay();
}

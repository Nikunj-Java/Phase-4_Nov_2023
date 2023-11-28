import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {


  name:string="My Name is Nikunj, i am a JAVA FSD Trainer";
  pi:number=3.1415927;
  a=0.12345;
  b=9876.5432;

  today=new Date();

  object={name:"Nikunj",email:"Nikunj@gmail.com",address:"India"};


}

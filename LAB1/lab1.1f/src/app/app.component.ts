import { Component } from '@angular/core';
import { Insects } from './interfaces/insects';
import { Service1Service } from './services/service1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab1.1f';
  insectList:Insects[] = [];

  constructor(private service:Service1Service){}
  
  getInsects():void{
    this.service.getInsects().subscribe(
      (insects)=>{
        this.insectList=insects;
      }
    )
  }
}

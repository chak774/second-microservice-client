import { Component, OnInit } from '@angular/core';
import {SecondMicroserviceService} from './second-microservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

   constructor(private secondMicroserviceService: SecondMicroserviceService) {} 


   postData = '{"foo":"bar"}';
   putId = '';
   putVal = '{"foo":"newbar"}';
   delId = '';
   result : String;

   ngOnInit(){
   }

   getAll(){
    this.secondMicroserviceService.getAll().subscribe(result => this.result=JSON.stringify(result));
  } 

  createOne(){
    this.secondMicroserviceService.createOne(JSON.parse(this.postData)).subscribe(result => this.result=JSON.stringify(result));
  }

  updateOne(){
    this.secondMicroserviceService.updateOne(this.putId, JSON.parse(this.putVal)).subscribe(result => this.result=JSON.stringify(result));
  }

  deleteOne(){
    this.secondMicroserviceService.deleteOne(this.delId).subscribe(result => this.result=JSON.stringify(result));
  }

  clearResult(){
    this.result = "";
  }
}

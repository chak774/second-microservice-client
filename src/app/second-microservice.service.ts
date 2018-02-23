import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SecondMicroserviceService {

private secondMicroserviceUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) { }



  getAll () : Observable<any>{
    return this.http.get(this.secondMicroserviceUrl + "/secondMicroservices");
  }

  createOne(val){
    console.log("POST Data: ", val);
    return this.http.post(this.secondMicroserviceUrl + "/secondMicroservice", val, httpOptions);
  }

  updateOne(id, val){
    console.log("PUT ID: ", id);
    console.log("PUT Data: ", val);
    var reqBody = {"id" : id, "newValue" : val};
    return this.http.put(this.secondMicroserviceUrl + "/secondMicroservice", reqBody, httpOptions);

  } 
  
  deleteOne(id){
    console.log("DELETE ID: ", id);
    return this.http.delete(this.secondMicroserviceUrl + "/secondMicroservice" + "/" + id, httpOptions);

  } 

}

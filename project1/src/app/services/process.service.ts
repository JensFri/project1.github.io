import { Injectable } from '@angular/core';
import { Process } from '../process/processConstruction'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class ProcessService { 

  constructor(private httpClient: HttpClient) { }

  addProcess(item) {
    const test = {
      titel: item.titel,
      name: item.name,
      lastname: item.lastname,
      created_at: item.created_at,
      updated_at: item.updated_at,   
      filename: item.filename  
    };
    this.httpClient.post('http://localhost:4000/api/experiments/add', test)
    .subscribe(res => console.log('Done'));    
  }

  getProcess() {
    const uri = 'http://localhost:4000/api/experiments';
    return this.httpClient
            .get(uri)
            .map(res => {
              return res;
            });
  }

  deleteProcess(id) {
    const uri = 'http://localhost:4000/api/experiments/delete/' + id;

        return this
            .httpClient
            .get(uri)
            .map(res => {
              return res;
            });
  }   

}

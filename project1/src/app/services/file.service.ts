import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import 'rxjs/Rx';
import {Observable} from 'rxjs';

@Injectable()

export class FileService {

    constructor(private httpClient: HttpClient){}


    downloadFile(file:String){
        var body = {filename:file}

        return this.httpClient.post('http://localhost:4000/file/download', body, {
            responseType: 'blob',
            headers: new HttpHeaders().append('Content-Type', 'application/json')
        });
    }

    // getFiles() {
    //     const uri = 'http://localhost:4000/image/files';
    //     return this.httpClient
    //             .get(uri)
    //             .map(res => {
    //               return res;
    //             });
    // }
}
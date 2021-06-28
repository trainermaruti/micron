import { Injectable } from '@angular/core';
import { IVideo } from './ivideo';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import{map,catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideodataService {
  private serviceUrl="https://marutivideo.azurewebsites.net/api/videos";

  constructor(private _httpclient:HttpClient) 
  {

   }
  getVideos():Observable<IVideo[]>{
    return this._httpclient.get(this.serviceUrl)
    .pipe(map(allvideos=><IVideo[]>allvideos),
    catchError(()=>{return throwError("Something went wrong!")}));
  }

}

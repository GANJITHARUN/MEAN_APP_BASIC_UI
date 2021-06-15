import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(public http: HttpClient) {}

  public getList() {
    return this.http.get(`${environment.APIEndpoint}/posts`);
  }

  public addList(data : any) {
    return this.http.post(`${environment.APIEndpoint}/posts`, data);
  }

  public updateList(data : any) {
    return this.http.post(
      `${environment.APIEndpoint}/posts/?data_id=${data._id}`, data);
  }

  public deleteList(data: any) {
    return this.http.delete(
      `${environment.APIEndpoint}/posts/${data._id}`
    );
  }
}

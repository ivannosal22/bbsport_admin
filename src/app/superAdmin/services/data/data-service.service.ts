import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(public http: HttpClient,
    public message: NzMessageService) { }


  getFacility() {
    return this.http.get(`${environment.apiUrl}facility`).pipe(
      map(data => data),
      catchError(error => { throw error; }));
  }

  addFacility(params) {
    return this.http.post(`${environment.apiUrl}facility`, params).pipe(
      map(data => data),
      catchError(error => { throw error; }));
  }

  getStadium() {
    return this.http.get(`${environment.apiUrl}stadium`).pipe(
      map(data => data),
      catchError(error => { throw error; }));
  }

  deleteStadium(id) {
    return this.http.delete(`${environment.apiUrl}stadium/${id}`).pipe(
      map(data => data),
      catchError(error => { throw error; }));
  }

  addStadium(params) {
    return this.http.post(`${environment.apiUrl}stadium`, params).pipe(
      map(data => data),
      catchError(error => { throw error; }));
  }

  uploadImage(params) {
    return this.http.post(`${environment.apiUrl}upload-image`, params).pipe(
      map(data => data),
      catchError(error => { throw error; }));
  }

  addPromotion(params) {
    return this.http.post(`${environment.apiUrl}promotion`, params).pipe(
      map(data => data),
      catchError(error => { throw error; }));
  }

  getPromotion() {
    return this.http.get(`${environment.apiUrl}promotion`).pipe(
      map(data => data),
      catchError(error => { throw error; }));
  }

  errorHandler(msg) {
    this.message.info(msg);
  }

  getMetaValues(params) {
    return this.http.post(`${environment.apiUrl}getMeta`, params).pipe(
      map(data => data),
      catchError(error => { throw error; }));
  }

  updateMetaValues(params) {
    return this.http.post(`${environment.apiUrl}updateMeta`, params).pipe(
      map(data => data),
      catchError(error => { throw error; }));
  }

}

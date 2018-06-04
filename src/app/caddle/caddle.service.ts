import { Injectable, OnInit } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { Caddle } from './caddle.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { map, catchError } from 'rxjs/operators';
import { BaseResponse } from './base-response.interface';

@Injectable()
export class CaddleService implements OnInit {
  baseUrl = environment.url;
  caddleChanged = new Subject<Caddle[]>();
  private caddleList: Caddle[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.fetchCaddleList();
  }

  getCaddleList() {
    return this.caddleList.slice();
  }

  fetchCaddleList() {
    this.httpClient.get<BaseResponse>(this.baseUrl).pipe(
      map(
        baseResponse => {
          return baseResponse.data;
        }
      ),
      catchError(error => throwError(error))
    ).subscribe(
      (caddles: Caddle[]) => {
        this.caddleList = caddles;
        this.caddleChanged.next(this.caddleList.slice());
      }
    );
  }

  insertCaddle(caddle: Caddle) {
    this.httpClient.post(this.baseUrl, caddle).subscribe(
      (response: Response) => {
        if ( response.status == 201) {
          this.caddleList.push(caddle);
          this.caddleChanged.next(this.caddleList.slice());
        }
      }
    );
  }

  getCaddle(index: number) {
    return this.caddleList[index];
  }

}

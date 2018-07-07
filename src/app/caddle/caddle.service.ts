import { Injectable, OnInit } from '@angular/core';
import { Subject, throwError, Observable } from 'rxjs';
import { Caddle } from './caddle.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { map, catchError } from 'rxjs/operators';
import { BaseResponse } from './base-response.interface';
import { MilkProductions } from '../milk-production/milk-productions.model';

@Injectable()
export class CaddleService implements OnInit {
  baseUrl = `${environment.url}/caddle`;
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
          this.fetchCaddleList();
          this.caddleList.push(caddle);
          this.caddleChanged.next(this.caddleList.slice());
        }
      }
    );
  }

  addMilkProduction(id: string, milkProduction: MilkProductions) {
    console.log(id);
    this.httpClient.put(`${this.baseUrl}/${id}/milkProductions`, milkProduction).pipe(
      map(
        (res: Response) => {
          if (res) {
            if (res.status >= 200 && res.status < 300) {
              return [{success: true}]; 
            }
          }
        }
      ), catchError(error => throwError(error))
    ).subscribe(
      () => {
        this.fetchCaddleList();
        this.caddleChanged.next(this.caddleList.slice())
      }
    );
  }

  updateCaddle(caddle: Caddle) {
    this.httpClient.put(`${this.baseUrl}/${caddle.id}`, caddle).pipe(
      map(
        (res: Response) => {
          if (res) {
            if (res.status >= 200 && res.status < 300) {
              return [{success: true}]; 
            }
          }
        }
      ), catchError(error => throwError(error))
    ).subscribe(() => {
      this.fetchCaddleList();
      this.caddleChanged.next(this.caddleList.slice())
    });
  }

  deleteCaddle(id: string) {
    this.httpClient.delete(`${this.baseUrl}/${id}`).pipe(
      map(
        (res: Response) => {
          if (res) {
            if (res.status >= 200 && res.status < 300) {
              return [{success: true}]; 
            }
          }
        }
      ), catchError(error => throwError(error))
    ).subscribe(
      () => {
        this.fetchCaddleList();
        this.caddleChanged.next(this.caddleList.slice())
      }
    );
  }

  getCaddle(index: number) {
    return this.caddleList[index];
  }

  getCaddleById(index: string) {
    return this.caddleList.find( x => x.id == index);
  }

  getMilkProductions(id: string) {
    this.httpClient.get<BaseResponse>(`${this.baseUrl}/milkProductions`).pipe(catchError(error => throwError(error)))
      .subscribe(
        (baseResponse: BaseResponse) => {
          this.caddleList.find(x => x.id == id).milkProductions = baseResponse.data;
          this.caddleChanged.next(this.caddleList.slice());
        }
      )
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class GalleryService {

  constructor(private http: HttpClient,
              private authService: AuthService) { }
  
  private galleries;
  
  getGalleries(){
        this.galleries = [];
        return new Observable((o: Observer<any>) => {
            this.http.get('http://localhost:8000/api/allGalleries', {
               headers: this.authService.getRequestHeaders()
            }).subscribe((galleries: any[]) => {
                this.galleries = galleries['data'];
    
                o.next(this.galleries);
                return o.complete();
            });
       });
      }

}

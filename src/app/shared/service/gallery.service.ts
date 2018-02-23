import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import{Comment} from '../model/comment';

@Injectable()
export class GalleryService {

  constructor(private http: HttpClient,
              private authService: AuthService) { }
  
  private galleries;
  private gallery;
  private comments: Comment[] = [];
  
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
 public getSingleGallery(id) {
     this.gallery = [];
    return new Observable((o: Observer<any>) => {
        this.http.get(`http://localhost:8000/api/gallerie/${id}`, {
        headers: this.authService.getRequestHeaders()
        }).subscribe((gallery: any[]) => {
    
            this.gallery = gallery;
    
    
            o.next(this.gallery);
            return o.complete();
        });
    });
    }

    public getSingleGalleryComments(id) {
        this.comments = [];
        return new Observable((o: Observer<any>) => {
            this.http.get('http://localhost:8000/api/comments/' + id, {
                headers: this.authService.getRequestHeaders()
            }).subscribe((comments: any[]) => {

                this.comments = comments.map(c => new Comment(
                    c.id,
                    c.content,
                    c.gallery_id,
                    c.user_id,
                    c.user));


                o.next(this.comments);
                return o.complete();
            });
        });
}

}

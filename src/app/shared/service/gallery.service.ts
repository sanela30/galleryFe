import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import{Comment} from '../model/comment';
import { HttpErrorResponse } from '@angular/common/http/src/response';

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
                    c.user_id
                    ));


                o.next(this.comments);
                return o.complete();
            });
        });
}

public addComment(comment: Comment) {
            return new Observable((o: Observer<any>) => {
                this.http.post('http://localhost:8000/api/comments', {
                    content: comment.content,
                    gallery_id: comment.gallery_id,
                    user_id: comment.user_id
                }, {
                    headers: this.authService.getRequestHeaders()
                }).subscribe((comments: any) => {
                        const comment = new Comment(
                            comments.id,
                            comments.content,
                            comments.gallery_id,
                            comments.user_id);
                        this.comments.push(comment);
                        o.next(this.comments);
                        return o.complete();
                    }, (err: HttpErrorResponse) => {
                        alert(`Backend returned code ${err.status} with message: ${err.error}`);
                    }
                );
            });
        }
    
        public removeComment(comment: Comment){
        return new Observable((o: Observer<any>) => {
            this.http.delete('http://localhost:8000/api/comment/' + comment.id,{
                headers: this.authService.getRequestHeaders()
            }).subscribe(
                () => {
                    const index = this.comments.indexOf(comment);
                    this.comments.splice(index, 1);
    
                    o.next(index);
                    return o.complete();
                }
            );
        });
    }

}

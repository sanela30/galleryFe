import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/service/auth.service';
import { GalleryService } from '../../shared/service/gallery.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Comment } from '../../shared/model/comment';

@Component({
  selector: 'app-single-gallery',
  templateUrl: './single-gallery.component.html',
  styleUrls: ['./single-gallery.component.css']
})
export class SingleGalleryComponent implements OnInit {

  
  public gallery: any[] = [];
  private params;
  public comments: Array<Comment> = [];
  public comment: Comment = new Comment();

  constructor(
    public auth: AuthService, 
    public galleryService: GalleryService, 
    public route: ActivatedRoute,
    public router:Router){ this.route.params.subscribe((params: Params) => {
      this.params = params;
  });  

      this.galleryService.getSingleGallery(this.params.id).subscribe(
  data => {
      this.gallery = data;
  },
  (err: HttpErrorResponse) => {
      alert(`Backend returned code ${err.status} with message: ${err.error}`);
  });

  this.galleryService.getSingleGalleryComments(this.params.id).subscribe(
    data => {
        this.comments = data;
    },
    (err: HttpErrorResponse) => {
        alert(`Backend returned code ${err.status} with message: ${err.error}`);
    }
);
}

addComment(){
        this.comment.user_id=this.auth.user.id;
        this.comment.gallery_id=this.params.id;
        delete this.comment.id;

        this.galleryService.addComment(this.comment).subscribe((data) => {
            this.comments=data;
        });
    }

    removeComment(comment) {
        if(confirm("Are you sure to delete this comment?")) {
            this.galleryService.removeComment(comment).subscribe();
        }
    }

  ngOnInit() {
  }

}

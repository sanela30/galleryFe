import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/service/auth.service';
import { GalleryService } from '../../shared/service/gallery.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

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

  ngOnInit() {
  }

}

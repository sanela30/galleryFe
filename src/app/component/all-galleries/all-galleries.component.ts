import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../shared/service/gallery.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-all-galleries',
  templateUrl: './all-galleries.component.html',
  styleUrls: ['./all-galleries.component.css']
})
export class AllGalleriesComponent implements OnInit {

  private galleries;

 constructor(private galleryService: GalleryService) { 
    this.galleryService.getGalleries().subscribe(
      data => {
       this.galleries = data;
     },
     (err: HttpErrorResponse) => {
        alert(`Backend returned code ${err.status} with message: ${err.error}`);
     }
   );
 }

  ngOnInit() {
  }

}

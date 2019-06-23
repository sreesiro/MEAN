import { Component, OnInit } from '@angular/core';
// importing route related code
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BloghttpService } from '../bloghttp.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {
  // empty object
  public currentBlog;

  constructor(private _route: ActivatedRoute, private router: Router, private blogHttpService: BloghttpService) {
    console.log('Home-View Constructor is called');
  }

  ngOnInit() {
    console.log('Home-View ngOnInit is called');
    const blogId = this._route.snapshot.paramMap.get('blogId');
    console.log(blogId);
    this.currentBlog = this.blogHttpService.getSingleBlogApplication(blogId).subscribe(
      data => {
        console.log(data);
        this.currentBlog = data['data'];

      },
      error => {
        console.log('error has occured. Please try after sometime');
        // console.log(error.errorMessage);

      }
    );
    // console.log(this.currentBlog.data);
  }
}

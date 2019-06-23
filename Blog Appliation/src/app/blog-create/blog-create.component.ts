import { Component, OnInit } from '@angular/core';
import {BloghttpService} from '../bloghttp.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(private blogHttpService: BloghttpService, private _route: ActivatedRoute, private route: Router) {}
  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories = ['Drama', 'Comedy', 'Technology', 'Horror'];
  ngOnInit() {
  }

  public createBlog(): any {
    const blogData = {
      title : this.blogTitle,
      description : this.blogDescription,
      category : this.blogCategory,
      blogBody : this.blogBodyHtml
    };
    console.log(blogData);
    // return blogData;
    this.blogHttpService.createBlog(blogData).subscribe(
      data => {
        console.log('Blog created');
        console.log(data);
        // alert('Blog created successfully');
        setTimeout(() => {
          this.route.navigate(['/home', data.data.blogId]);
        });
      },
      error => {
        console.log('Error occured');
        console.log(error.errorMessage);
        alert('Some error occured');
      }
    );

  }

}

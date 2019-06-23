import { Injectable } from '@angular/core';
// import http to make requests
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BloghttpService {
  public allBlogs;
  public singleBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs/';
  // tslint:disable-next-line:max-line-length
  public authToken = `ZTE3OGM3ZTQzNjZhNjRhY2YxNDU3ZTEwZjRkOTA4ZjcyODBlZGFiOWUwZjAyNzY5YjVhN2ExMDVlZDQ0YWE2ZjViNGI3M2U1OGY4NDg0MjE3NmJhMjk3ZmJhZjY5ZWI5OTM1NWQ0NGJlMDdjMWJkZTBlZDIzYTBjZDdjYjEzYmFiYQ==`;

  public getSingleBlogApplication(currentBlogId): any {
    const myResponse = this._http.get(
      this.baseUrl + 'view/' + currentBlogId + '?authToken=' + this.authToken
    );
    // for (const item of this.AllBlogs) {
    //   if (item.blogId === currentBlogId) {
    //     this.currentBlog = item;
    //   }
    // }
    return myResponse;
    // console.log(this.currentBlog);
  }

  constructor(private _http: HttpClient) {
    console.log('Http service was called...');
  }

  public getAllBlogs(): any {
    const myResponse = this._http.get(
      this.baseUrl + 'all?authToken=' + this.authToken
    );
    console.log(myResponse);
    return myResponse;
  }

  public createBlog(blogData): any {
    const myResponse = this._http.post(
      this.baseUrl + 'create?authToken=' + this.authToken, blogData
    );
    console.log(myResponse);
    return myResponse;
  }

  public editBlog(blogData, blogId): any {
    const myResponse = this._http.put(
      this.baseUrl + blogId + '/edit?authToken=' + this.authToken, blogData
    );
    console.log(myResponse);
    return myResponse;
  }

  public deleteBlog(blogId): any {
    const myResponse = this._http.post(
      this.baseUrl + blogId + '/delete?authToken=' + this.authToken, blogId
    );
    console.log(myResponse);
    return myResponse;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public currentBlog;
  // dummy data
  public AllBlogs = [
    {
      'blogId': '1',
      'lastModified': '06/05/2019',
      'createdBy': 'S.Sreenath',
      'tags': ['humour', 'standup comedy'],
      'author': 'Admin',
      'category': 'comedy',
      'bodyHtml': 'This is the HTML body 1',
      'description': 'This is blog 1 description',
      'title': 'This is blog '
    },
    {
      'blogId': '2',
      'lastModified': '06/05/2019',
      'createdBy': 'Sachin',
      'tags': [],
      'author': 'Admin',
      'category': 'comedy',
      'bodyHtml': 'This is the HTML body 2',
      'description': 'This is blog 2 description',
      'title': 'This is blog '
    },
    {
      'blogId': '3',
      'lastModified': '06/05/2019',
      'createdBy': 'Rahul Dravid',
      'tags': [],
      'author': 'Admin',
      'category': 'comedy',
      'bodyHtml': 'This is the HTML body 3',
      'description': 'This is blog 3 description',
      'title': 'This is blog '
    },
    {
      'blogId': '4',
      'lastModified': '06/05/2019',
      'createdBy': 'Ganguly ',
      'tags': [],
      'author': 'Admin',
      'category': 'comedy',
      'bodyHtml': 'This is the HTML body 4',
      'description': 'This is blog 4 description',
      'title': 'This is blog '
    }
  ];

  public getAllBlogs() {
    return this.AllBlogs;
  }

  public getSingleBlogApplication(currentBlogId): any {
    for (const item of this.AllBlogs) {
      if (item.blogId === currentBlogId) {
        this.currentBlog = item;
      }
    }
    return this.currentBlog;
    // console.log(this.currentBlog);
  }

  constructor() {
    console.log('Service constructor is called..');
  }
}

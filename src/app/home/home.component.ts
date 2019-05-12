import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { BloghttpService} from '../bloghttp.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allBlogs;

  constructor(public blogHttpService: BloghttpService) {
    console.log('Home compoenent is called...');

  }

  ngOnInit() {
    this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(
      data => {
        console.log(data);
        this.allBlogs = data['data'];

      },
      error => {
        console.log('error has occured. Please try after sometime');
        console.log(error.errorMessage);
      }
    );
    console.log('Getting all blogs');
    console.log(this.allBlogs);
  }

}

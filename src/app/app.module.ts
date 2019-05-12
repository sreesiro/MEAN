import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

// Router Module, We have to inherit..
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { AboutComponent } from './about/about.component';
import { PostblogComponent } from './postblog/postblog.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import the blog service
import { BlogService } from './blog.service';
import { BlogDeleteComponent } from './blog-delete/blog-delete.component';
import { BloghttpService } from './bloghttp.service';

// The below line is called decorator..
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    AboutComponent,
    PostblogComponent,
    NotFoundComponent,
    BlogDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home/:blogId', component: HomeViewComponent},
      {path: 'create', component: BlogCreateComponent},
      {path: 'edit/:blogId', component: BlogEditComponent},
      {path: 'about', component: AboutComponent},
      {path: 'postblog', component: PostblogComponent},
      {path: 'delete/:blogId', component: BlogDeleteComponent},
      {path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [BlogService, BloghttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

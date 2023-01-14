import { Component, OnInit } from '@angular/core';
import {BlogdataService} from '../blogdata.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  postDetails = {};

  blogPosts=[];

  constructor(private blogdataService: BlogdataService) {
    this.init()
   
   }

  ngOnInit() {  }

  init(){
    this.blogPosts = this.blogdataService.getBlogData();
    console.log(this.blogPosts);
  }

  reRoute(link){
    window.open(link);
  }

}

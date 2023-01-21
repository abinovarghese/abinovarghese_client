import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment';
import {ProjectdataService} from '../projectdata.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  projects : any=[];

  apiUrl = environment.API_URL;

  constructor(private http: HttpClient,private projectdataService: ProjectdataService) { }

  ngOnInit() {
      this.list();
  }

  list() {
    this.projects = this.projectdataService.list();
    console.log(this.projects);
  }

  reRoute(link){
    window.open(link);
  }

}

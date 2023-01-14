import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ProjectdataService} from '../projectdata.service';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss']
})
export class CarousalComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`)
  stories = [];
  
  constructor(private projectdataService: ProjectdataService) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this.stories = this.projectdataService.listStories();
  }

  reRoute(link){
    window.open(link);
  }

}

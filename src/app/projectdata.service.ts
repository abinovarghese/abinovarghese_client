import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../environments/environment';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Injectable({
  providedIn: 'root'
})
export class ProjectdataService {

  constructor(private http: HttpClient,private ngxLoader: NgxUiLoaderService) { }

  projectList=[];
  storiesList=[];

  list() : any {
    if(this.projectList.length!=0){
      return this.projectList;
    }
    const projects=[];
    const url = environment.API_URL;
    this.ngxLoader.start();
    this.http.get(url+"/get/projects").subscribe((data) => {
      var temp = [];
      temp = JSON.parse(JSON.stringify(data));
      for(var i=0;i<temp.length;i++){
        projects.push(data[i]);
      }
    });
    this.projectList = projects;
    this.ngxLoader.stop();
    return projects;
}

listStories() : any {
  if(this.storiesList.length!=0){
    return this.storiesList;
  }
  const stories=[];
  const url = environment.API_URL;
  this.ngxLoader.start();
  this.http.get(url+"/get/stories").subscribe((data) => {
    var temp = [];
    temp = JSON.parse(JSON.stringify(data));
    for(var i=0;i<temp.length;i++){
      stories.push(data[i]);
    }
  });
  this.storiesList = stories;
  this.ngxLoader.stop();
  return stories;
}
  
}

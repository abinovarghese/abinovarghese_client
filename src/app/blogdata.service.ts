import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Injectable({
  providedIn: 'root'
})
export class BlogdataService {

  blogs=[];

  constructor(private ngxLoader: NgxUiLoaderService) { }

  getBlogData():any{
  
  if(this.blogs.length!=0){
    return this.blogs;
  }
  
  var postDetails = {};

  const blogPosts=[];
  this.ngxLoader.start();
  fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@abinovarghese')
  .then((res) => res.json())
  .then((data) => {
     // Filter for acctual posts. Comments don't have categories, therefore can filter for items with categories bigger than 0
     const res = data.items //This is an array with the content. No feed, no info about author etc..
     const posts = res.filter(item => item.categories.length > 0) // That's the main trick* !

     // Functions to create a short text out of whole blog's content
     function toText(node) {
        let tag = document.createElement('div')
        tag.innerHTML = node
        node = tag.innerText
        return node
     }
     function shortenText(text,startingPoint ,maxLength) {
        return text.length > maxLength?
        text.slice(startingPoint, maxLength):
        text
     }

     // Put things in right spots of markup
     let output = '';
     posts.forEach((item) => {

       postDetails["title"] = shortenText(item.title, 0, 30)+ '...';
       postDetails["thumbnail"] = item.thumbnail;
       postDetails["intro"] = shortenText(toText(item.content),0, 250)+ '...'
       postDetails["author"] = item.author;
       postDetails["date"] = shortenText(item.pubDate,0 ,10);
       postDetails["link"] = item.link;


       blogPosts.push(postDetails);
       postDetails = {};

     })
  })
  this.blogs = blogPosts;
  this.ngxLoader.stop();
  return blogPosts;
  }
}

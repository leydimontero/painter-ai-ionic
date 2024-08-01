import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { Posts } from 'src/assets/data/images';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  posts: Post[] = [];
  loading: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getPosts()
  }

  doRefresh(event: any){
    setTimeout(() =>{
      this.getPosts()
      event.target.complete()
    }, 2000)
  }

  getPosts(){
    this.posts = Posts;
    console.log(this.posts);
  }
}

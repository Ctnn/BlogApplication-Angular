import { Component } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-ana-ekran',
  templateUrl: './ana-ekran.component.html',
  styleUrls: ['./ana-ekran.component.css']
})
export class AnaEkranComponent {

  featuredPostsArray: Array<any> | undefined;
  latestPostsArray: Array<any> | undefined;
  constructor(private postService: PostsService){

  }

  ngOnInit(): void {

    this.postService.loadFeatured().subscribe(val=>{
      this.featuredPostsArray = val;   
      })
  this.postService.loadLatest().subscribe(val=>{
    this.latestPostsArray = val;   
    })
  }

}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-tekli-gonderi',
  templateUrl: './tekli-gonderi.component.html',
  styleUrls: ['./tekli-gonderi.component.css']
})
export class TekliGonderiComponent {
  postData:any;
  similiarPostsArray: Array<any> | undefined;
  constructor(private router:ActivatedRoute,private postService:PostsService) { }

  ngOnInit(): void {
    this.router.params.subscribe(val=>{
      this.postService.countViews(val['id']);
      this.postService.loadOnePost(val['id']).subscribe(post=>{
        this.postData=post;
        this.loadSimiliarPosts(this.postData.kategori.kategoriId)
      })
    })
  }

  loadSimiliarPosts(categoryId:any){
    this.postService.loadSimiliarPosts(categoryId).subscribe(val=>{
      this.similiarPostsArray = val;
    })
  }
}

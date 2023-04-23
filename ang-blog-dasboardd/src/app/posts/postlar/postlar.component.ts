import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/models/post'; // add this import

@Component({
  selector: 'app-postlar',
  templateUrl: './postlar.component.html',
  styleUrls: ['./postlar.component.css'],
})
export class PostlarComponent implements OnInit {
  constructor(private postService: PostsService) {}

  postsArray: Array<any> | undefined;

  ngOnInit(): void {
    this.postService.loadData().subscribe((val) => {
      console.log(val);
      this.postsArray = val;
    });
  }

  onDelete(postImgPath:any, id:any) {
  this.postService.deletePost(postImgPath,id);
  }

  onFeatured(id:any,value:any){
    const featuredData = {
      isFeatured: value
    }

    this.postService.markFeatured(id,featuredData);
  }

}

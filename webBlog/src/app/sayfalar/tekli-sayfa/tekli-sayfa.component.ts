import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-tekli-sayfa',
  templateUrl: './tekli-sayfa.component.html',
  styleUrls: ['./tekli-sayfa.component.css']
})
export class TekliSayfaComponent {
  postData:any;
  constructor(private router:ActivatedRoute,private postService:PostsService) { }

  ngOnInit(): void {
    this.router.params.subscribe(val=>{
      this.postService.loadOnePost(val['id']).subscribe(post=>{
        this.postData=post;
      })
    })
  }
}


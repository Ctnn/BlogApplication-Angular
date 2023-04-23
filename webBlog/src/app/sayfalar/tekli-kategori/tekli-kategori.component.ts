import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-tekli-kategori',
  templateUrl: './tekli-kategori.component.html',
  styleUrls: ['./tekli-kategori.component.css']
})
export class TekliKategoriComponent {

  constructor(private route:ActivatedRoute, private postService:PostsService) { }

  postArray: Array<any> | undefined;
  categoryObj:any;
  ngOnInit(): void {
    this.route.params.subscribe(val=>{
      this.categoryObj = val;
      this.postService.loadCategoryPosts(val['id']).subscribe(post=>{
        this.postArray = post;
      })
    })
  }
}

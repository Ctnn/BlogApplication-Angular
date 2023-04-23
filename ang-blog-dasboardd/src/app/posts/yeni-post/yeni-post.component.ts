import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { expand } from 'rxjs';
import { CategoriesService } from 'src/app/services/categories.service';
import {Post} from '../../models/post';
import {PostsService} from 'src/app/services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-yeni-post',
  templateUrl: './yeni-post.component.html',
  styleUrls: ['./yeni-post.component.css']
})
export class YeniPostComponent {
  
  permalink: string = '';
  imgSrc: any = './assets/images/placeholder.jpg';
  selectedImg: any = null;
  categories: any;
  postForm: FormGroup;
  disabled: boolean = true;
  post:any;
  formStatus: string = 'Ekle';
  docId: any;
  constructor( 
    private categoryService:CategoriesService,
    private fb:FormBuilder,
    private postService:PostsService,
    private route:ActivatedRoute   ) {
      this.postForm = this.fb.group({
        baslik: ['', [Validators.required, Validators.minLength(10)]],
        baglanti: ['', Validators.required],
        alinti: ['', [Validators.required, Validators.minLength(50)]],
        kategori: ['', Validators.required],
        postImg: ['', Validators.required],
        icerik: ['', Validators.required]
      });
    
    this.route.queryParams.subscribe(val=>{
      
      this.docId = val['id'];
     
      this.postService.loadTekData(val['id']).subscribe(post=>{
      this.post=post;
    this.postForm = this.fb.group({
      baslik: [this.post.baslik, [Validators.required, Validators.minLength(10)]],
      baglanti: [this.post.baglanti,Validators.required],
      alinti: [this.post.alinti,[Validators.required, Validators.minLength(50)]],
      
      kategori: ['${this.post.kategori.kategoriId}-${this.post.kategori.kategori}',Validators.required],
      postImg: ['',Validators.required],
      icerik: [this.post.icerik,Validators.required],

    })
      this.imgSrc = this.post.postImgPath;
      
      this.formStatus = 'Güncelle';
      })
    })
   }

  get fc(){
    return this.postForm.controls;
  }
  ngOnInit(): void {
    this.categoryService.loadData().subscribe(val=>{
      this.categories = val;
    })
  }



  onTitleChanged(event: any) {

  const title = event.target.value;

  // url için uygun hale getir
  this.permalink = title.replace(/\s/g, '-');

  }
  // Resim Yükleme
  showPreview(event: any) {
  
  const reader = new FileReader();
  reader.onload = (e: any) => {
    this.imgSrc = e.target.result
  }
  reader.readAsDataURL(event.target.files[0]);
  this.selectedImg = event.target.files[0];
}

onSubmit(){
console.log(this.postForm.value);

let bolunmus = this.postForm.value.kategori.split('-');
console.log(bolunmus);

const postData: Post={
  baslik: this.postForm.value.baslik,
  baglanti: this.postForm.value.baglanti,
  kategori: { 
    kategoriId: bolunmus[0],
    kategori: bolunmus[1],
  },
  postImgPath: '',
  alinti: this.postForm.value.alinti,
  icerik: this.postForm.value.icerik,
  isFeatured: false,
  views: 0,
  status: "Yeni",
  createdAt: new Date(),
}
this.postService.uploadImage(this.selectedImg, postData,this.formStatus,this.docId);
this.postForm.reset();
//Default olarak belirlediğim image post oluşumundan sonra yerini alacak
this.imgSrc = './assets/images/placeholder.jpg';
}


}

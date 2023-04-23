import { Component } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-kategoriler',
  templateUrl: './kategoriler.component.html',
  styleUrls: ['./kategoriler.component.css']
})

export class KategorilerComponent {

  // Kategorileri Çekmek İçin
  categoryArray: Array<any> | undefined; 
  formCategory:string | undefined;
  formStatus: string="Ekle";
  categoryId : string | undefined;
  constructor(private categoryService: CategoriesService) { }

  ngOnInit(): void {
    this.categoryService.loadData().subscribe(val=>{
      console.log(val);
      this.categoryArray = val;
    })
  }

onSubmit(formData: any){
  let categoryData : Category = {
    category: formData.value.category
  }
  if(this.formStatus == "Ekle"){
    this.categoryService.saveData(categoryData);
    formData.reset();
  }
  else if (this.formStatus == "Güncelle"){
    this.categoryService.updateData(this.categoryId,categoryData);
    formData.reset();
    this.formStatus = "Ekle";


}
}


onEdit(category: string | undefined,id: string | undefined){
 this.formCategory = category;
 this.formStatus = "Güncelle";
 this.categoryId = id;
}

onDelete(id: string | undefined){
  this.categoryService.deleeteData(id);
 }

}

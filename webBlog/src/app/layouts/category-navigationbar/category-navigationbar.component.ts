import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-navigationbar',
  templateUrl: './category-navigationbar.component.html',
  styleUrls: ['./category-navigationbar.component.css']
})
export class CategoryNavigationbarComponent {

    categoryArray: Array<any> | undefined;

    constructor(private categoryService:CategoriesService) { }

    ngOnInit(): void {
        this.categoryService.loadData().subscribe(val=>{
            this.categoryArray = val;
        })
    }
}

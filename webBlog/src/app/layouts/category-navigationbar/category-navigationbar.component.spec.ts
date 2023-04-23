import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryNavigationbarComponent } from './category-navigationbar.component';

describe('CategoryNavigationbarComponent', () => {
  let component: CategoryNavigationbarComponent;
  let fixture: ComponentFixture<CategoryNavigationbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryNavigationbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryNavigationbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

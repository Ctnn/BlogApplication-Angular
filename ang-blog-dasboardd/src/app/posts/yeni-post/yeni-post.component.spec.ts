import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YeniPostComponent } from './yeni-post.component';

describe('YeniPostComponent', () => {
  let component: YeniPostComponent;
  let fixture: ComponentFixture<YeniPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YeniPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YeniPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

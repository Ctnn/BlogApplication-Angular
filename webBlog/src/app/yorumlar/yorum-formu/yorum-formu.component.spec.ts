import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YorumFormuComponent } from './yorum-formu.component';

describe('YorumFormuComponent', () => {
  let component: YorumFormuComponent;
  let fixture: ComponentFixture<YorumFormuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YorumFormuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YorumFormuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

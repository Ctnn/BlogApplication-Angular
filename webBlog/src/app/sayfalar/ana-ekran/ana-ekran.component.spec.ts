import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaEkranComponent } from './ana-ekran.component';

describe('AnaEkranComponent', () => {
  let component: AnaEkranComponent;
  let fixture: ComponentFixture<AnaEkranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnaEkranComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnaEkranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

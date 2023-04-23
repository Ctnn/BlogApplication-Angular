import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GonderiKartComponent } from './gonderi-kart.component';

describe('GonderiKartComponent', () => {
  let component: GonderiKartComponent;
  let fixture: ComponentFixture<GonderiKartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GonderiKartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GonderiKartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

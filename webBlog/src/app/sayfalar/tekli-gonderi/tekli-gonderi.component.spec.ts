import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TekliGonderiComponent } from './tekli-gonderi.component';

describe('TekliGonderiComponent', () => {
  let component: TekliGonderiComponent;
  let fixture: ComponentFixture<TekliGonderiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TekliGonderiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TekliGonderiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

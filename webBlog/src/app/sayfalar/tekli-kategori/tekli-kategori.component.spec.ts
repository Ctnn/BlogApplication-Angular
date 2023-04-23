import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TekliKategoriComponent } from './tekli-kategori.component';

describe('TekliKategoriComponent', () => {
  let component: TekliKategoriComponent;
  let fixture: ComponentFixture<TekliKategoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TekliKategoriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TekliKategoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

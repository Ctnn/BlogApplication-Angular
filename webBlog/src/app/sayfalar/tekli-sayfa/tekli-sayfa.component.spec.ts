import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TekliSayfaComponent } from './tekli-sayfa.component';

describe('TekliSayfaComponent', () => {
  let component: TekliSayfaComponent;
  let fixture: ComponentFixture<TekliSayfaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TekliSayfaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TekliSayfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

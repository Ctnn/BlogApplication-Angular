import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IletisimeGecComponent } from './iletisime-gec.component';

describe('IletisimeGecComponent', () => {
  let component: IletisimeGecComponent;
  let fixture: ComponentFixture<IletisimeGecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IletisimeGecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IletisimeGecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

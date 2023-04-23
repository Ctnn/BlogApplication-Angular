import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboneOlComponent } from './abone-ol.component';

describe('AboneOlComponent', () => {
  let component: AboneOlComponent;
  let fixture: ComponentFixture<AboneOlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboneOlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboneOlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

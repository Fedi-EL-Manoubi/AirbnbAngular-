import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheBienComponent } from './fiche-bien.component';

describe('FicheBienComponent', () => {
  let component: FicheBienComponent;
  let fixture: ComponentFixture<FicheBienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FicheBienComponent]
    });
    fixture = TestBed.createComponent(FicheBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

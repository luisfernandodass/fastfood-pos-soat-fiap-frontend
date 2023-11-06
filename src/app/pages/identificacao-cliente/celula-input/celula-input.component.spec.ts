import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelulaInputComponent } from './celula-input.component';

describe('CelulaInputComponent', () => {
  let component: CelulaInputComponent;
  let fixture: ComponentFixture<CelulaInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelulaInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelulaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

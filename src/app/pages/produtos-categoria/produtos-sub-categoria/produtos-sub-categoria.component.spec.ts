import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosSubCategoriaComponent } from './produtos-sub-categoria.component';

describe('ProdutosSubCategoriaComponent', () => {
  let component: ProdutosSubCategoriaComponent;
  let fixture: ComponentFixture<ProdutosSubCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosSubCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutosSubCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

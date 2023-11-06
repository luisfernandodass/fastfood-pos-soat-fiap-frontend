import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificacaoClienteComponent } from './identificacao-cliente.component';

describe('IdentificacaoClienteComponent', () => {
  let component: IdentificacaoClienteComponent;
  let fixture: ComponentFixture<IdentificacaoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificacaoClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdentificacaoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

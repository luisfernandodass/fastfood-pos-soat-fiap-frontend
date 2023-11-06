import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertaPedidoProntoComponent } from './alerta-pedido-pronto.component';

describe('AlertaPedidoProntoComponent', () => {
  let component: AlertaPedidoProntoComponent;
  let fixture: ComponentFixture<AlertaPedidoProntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertaPedidoProntoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertaPedidoProntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

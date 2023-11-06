import { TestBed } from '@angular/core/testing';

import { IdentificacaoClienteService } from './identificacao-cliente.service';

describe('IdentificacaoClienteService', () => {
  let service: IdentificacaoClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdentificacaoClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

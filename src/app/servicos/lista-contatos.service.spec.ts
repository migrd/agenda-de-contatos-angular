import { TestBed } from '@angular/core/testing';

import { ListaContatosService } from './lista-contatos.service';

describe('ListaContatosService', () => {
  let service: ListaContatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaContatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

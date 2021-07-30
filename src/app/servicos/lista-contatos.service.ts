import { Injectable } from "@angular/core";

import { Contato } from "../modelos/contato.model";

@Injectable({
  providedIn: "root"
})
export class ListaContatosService {
  constructor() {}

  public lista: Contato[] = [];

  updateLista(nome: string, numero: number): void {
    this.lista.push(new Contato(nome, numero));
    this.lista.sort((a, b) => a.nome.localeCompare(b.nome));
  }

  remover(contato: Contato) {
    const index = this.lista.indexOf(contato);
    if (index !== -1) {
      this.lista.splice(index, 1);
    }
  }
}

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
  }
}

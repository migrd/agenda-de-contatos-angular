import { Component, OnInit} from "@angular/core";

import { ListaContatosService } from "../servicos/lista-contatos.service";

@Component({
  selector: "app-contatos",
  templateUrl: "./contatos.component.html",
  styleUrls: ["./contatos.component.css"]
})
export class ContatosComponent implements OnInit {
  constructor(private lista: ListaContatosService) {
    this.lista = lista;
  }

  private list: any = this.lista.lista;
  private contatoSelecionado: any;
  private searchText: any;

  ngOnInit(): void {}
}

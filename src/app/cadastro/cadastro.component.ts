import { Component, OnInit, ViewChild } from "@angular/core";

import { ListaContatosService } from "../servicos/lista-contatos.service";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"]
})
export class CadastroComponent implements OnInit {
  @ViewChild("nome") inputName;
  @ViewChild("numero") inputNumber;

  private nomeContato: string = "";
  private enviado: boolean = false;

  constructor(private lista: ListaContatosService) {
    this.lista = lista;
  }

  mensagemSucesso(): void {
    this.enviado = true;
    setTimeout(() => (this.enviado = false), 5000);
  }

  add(nome: string, numero: number): void {
    this.lista.updateLista(nome, numero);
    this.nomeContato = nome;
    this.mensagemSucesso();
    this.inputName.nativeElement.value = "";
    this.inputNumber.nativeElement.value = "";
  }

  ngOnInit(): void {}
}

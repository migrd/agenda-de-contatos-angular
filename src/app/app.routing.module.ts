import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CadastroComponent } from "./cadastro/cadastro.component";
import { ContatosComponent } from './contatos/contatos.component';

const routes: Routes = [
  { path: "cadastro-contato", component: CadastroComponent },
  { path: "contatos", component: ContatosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

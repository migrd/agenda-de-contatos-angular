import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Ng2SearchPipeModule } from "ng2-search-filter";

import { AppRoutingModule } from "./app.routing.module";
import { AppComponent } from "./app.component";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { ContatosComponent } from "./contatos/contatos.component";

@NgModule({
  declarations: [AppComponent, CadastroComponent, ContatosComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, Ng2SearchPipeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

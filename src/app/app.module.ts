import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { HeadderComponent } from './componentes/headder/headder.component';
import { HomeComponent } from './page/home/home.component';
import { CursosComponent } from './page/cursos/cursos.component';
import { HabilidadesComponent } from './page/habilidades/habilidades.component';
import { ProjetosComponent } from './page/projetos/projetos.component';
import { PageComponent } from './page/page.component';
import { DoceriaComponent } from './page/meusprojetos/doceria/doceria.component';
import { SitecomercialComponent } from './page/meusprojetos/sitecomercial/sitecomercial.component';
import { WebcurriculoComponent } from './page/meusprojetos/webcurriculo/webcurriculo.component';
import { PortifolioComponent } from './page/meusprojetos/portifolio/portifolio.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    HeadderComponent,
    HomeComponent,
    CursosComponent,
    HabilidadesComponent,
    ProjetosComponent,
    PageComponent,
    DoceriaComponent,
    SitecomercialComponent,
    WebcurriculoComponent,
    PortifolioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

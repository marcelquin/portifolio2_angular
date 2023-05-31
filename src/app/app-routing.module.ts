import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { CursosComponent } from './page/cursos/cursos.component';
import { HabilidadesComponent } from './page/habilidades/habilidades.component';
import { ProjetosComponent } from './page/projetos/projetos.component';
import { DoceriaComponent } from './page/meusprojetos/doceria/doceria.component';
import { SitecomercialComponent } from './page/meusprojetos/sitecomercial/sitecomercial.component';
import { WebcurriculoComponent } from './page/meusprojetos/webcurriculo/webcurriculo.component';
import { PortifolioComponent } from './page/meusprojetos/portifolio/portifolio.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"cursos", component: CursosComponent},
  {path:"habilidades", component: HabilidadesComponent},
  {path:"projetos", component: ProjetosComponent},
  {path:"doceria", component:DoceriaComponent},
  {path:"sitecomercial", component:SitecomercialComponent},
  {path:"webcurriculo", component:WebcurriculoComponent},
  {path:"portifolio", component:PortifolioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

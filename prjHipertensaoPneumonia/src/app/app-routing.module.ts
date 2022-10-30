import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HipertensaoComponent } from './components/hipertensao/hipertensao.component';
import { PneumoniaComponent } from './components/pneumonia/pneumonia.component';

import { CgCuriosidadesHComponent } from './components/hipertensao/cg-curiosidades-h/cg-curiosidades-h.component';
import { JpCausasHComponent } from './components/hipertensao/jp-causas-h/jp-causas-h.component';
import { LcSobreHComponent } from './components/hipertensao/lc-sobre-h/lc-sobre-h.component';
import { PlSintomasHComponent } from './components/hipertensao/pl-sintomas-h/pl-sintomas-h.component';
import { TcTratamentosHComponent } from './components/hipertensao/tc-tratamentos-h/tc-tratamentos-h.component';

import { CgCuriosidadesPComponent } from './components/pneumonia/cg-curiosidades-p/cg-curiosidades-p.component';
import { JpCausasPComponent } from './components/pneumonia/jp-causas-p/jp-causas-p.component';
import { LcSobrePComponent } from './components/pneumonia/lc-sobre-p/lc-sobre-p.component';
import { PlSintomasPComponent } from './components/pneumonia/pl-sintomas-p/pl-sintomas-p.component';
import { TcTratamentosPComponent } from './components/pneumonia/tc-tratamentos-p/tc-tratamentos-p.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "hipertensao", component: HipertensaoComponent},
  {path: "pneumonia", component: PneumoniaComponent},

  {path: "cg-curiosidades-h", component: CgCuriosidadesHComponent},
  {path: "jp-causas-h", component: JpCausasHComponent},
  {path: "lc-sobre-h", component: LcSobreHComponent},
  {path: "pl-sintomas-h", component: PlSintomasHComponent},
  {path: "tc-meio-ambiente", component: TcTratamentosHComponent},

  {path: "cg-curiosidades-p", component: CgCuriosidadesPComponent},
  {path: "jp-causas-p", component: JpCausasPComponent},
  {path: "lc-sobre-p", component: LcSobrePComponent},
  {path: "pl-sintomas-p", component: PlSintomasPComponent},
  {path: "tc-tratamentos-p", component: TcTratamentosPComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

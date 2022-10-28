import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HipertensaoComponent } from './components/hipertensao/hipertensao.component';
import { PneumoniaComponent } from './components/pneumonia/pneumonia.component';

import { LcSobreHComponent } from './components/hipertensao/lc-sobre-h/lc-sobre-h.component';
import { JpCausasHComponent } from './components/hipertensao/jp-causas-h/jp-causas-h.component';
import { PlSintomasHComponent } from './components/hipertensao/pl-sintomas-h/pl-sintomas-h.component';
import { TcTratamentosHComponent } from './components/hipertensao/tc-tratamentos-h/tc-tratamentos-h.component';
import { CgCuriosidadesHComponent } from './components/hipertensao/cg-curiosidades-h/cg-curiosidades-h.component';

import { LcSobrePComponent } from './components/pneumonia/lc-sobre-p/lc-sobre-p.component';
import { JpCausasPComponent } from './components/pneumonia/jp-causas-p/jp-causas-p.component';
import { PlSintomasPComponent } from './components/pneumonia/pl-sintomas-p/pl-sintomas-p.component';
import { TcTratamentosPComponent } from './components/pneumonia/tc-tratamentos-p/tc-tratamentos-p.component';
import { CgCuriosidadesPComponent } from './components/pneumonia/cg-curiosidades-p/cg-curiosidades-p.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HipertensaoComponent,
    PneumoniaComponent,
    LcSobreHComponent,
    JpCausasHComponent,
    PlSintomasHComponent,
    TcTratamentosHComponent,
    CgCuriosidadesHComponent,
    LcSobrePComponent,
    JpCausasPComponent,
    PlSintomasPComponent,
    TcTratamentosPComponent,
    CgCuriosidadesPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

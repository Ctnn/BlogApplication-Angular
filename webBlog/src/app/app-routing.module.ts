import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnaEkranComponent } from './sayfalar/ana-ekran/ana-ekran.component';
import { TekliKategoriComponent } from './sayfalar/tekli-kategori/tekli-kategori.component';
import { HakkimdaComponent } from './sayfalar/hakkimda/hakkimda.component';
import { TekliGonderiComponent } from './sayfalar/tekli-gonderi/tekli-gonderi.component';
import { IletisimeGecComponent } from './sayfalar/iletisime-gec/iletisime-gec.component';

/* WEB URL ULAŞIM YÖNLENDİRMESİ*/
const routes: Routes = [
  { path: '', component: AnaEkranComponent },
  { path: 'kategori/:kategori/:id', component: TekliKategoriComponent },
  {path: 'gonderi/:id', component: TekliGonderiComponent},

  { path: 'hakkimda', component: HakkimdaComponent },
  { path: 'iletisim', component: IletisimeGecComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

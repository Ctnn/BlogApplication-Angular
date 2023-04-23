import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'environments/environment.prod';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { HeaderComponent } from './layouts/header/header.component';
import { CategoryNavigationbarComponent } from './layouts/category-navigationbar/category-navigationbar.component';
import { AboneOlComponent } from './abone-ol/abone-ol.component';
import { YorumFormuComponent } from './yorumlar/yorum-formu/yorum-formu.component';
import { YorumListesiComponent } from './yorumlar/yorum-listesi/yorum-listesi.component';
import { IletisimeGecComponent } from './sayfalar/iletisime-gec/iletisime-gec.component';
import { AnaEkranComponent } from './sayfalar/ana-ekran/ana-ekran.component';
import { TekliKategoriComponent } from './sayfalar/tekli-kategori/tekli-kategori.component';
import { TekliSayfaComponent } from './sayfalar/tekli-sayfa/tekli-sayfa.component';
import { TekliGonderiComponent } from './sayfalar/tekli-gonderi/tekli-gonderi.component';
import { HakkimdaComponent } from './sayfalar/hakkimda/hakkimda.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { GonderiKartComponent } from './layouts/gonderi-kart/gonderi-kart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryNavigationbarComponent,
    AboneOlComponent,
    YorumFormuComponent,
    YorumListesiComponent,
    IletisimeGecComponent,
    AnaEkranComponent,
    TekliKategoriComponent,
    TekliSayfaComponent,
    TekliGonderiComponent,
    HakkimdaComponent,
    FooterComponent,
    GonderiKartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

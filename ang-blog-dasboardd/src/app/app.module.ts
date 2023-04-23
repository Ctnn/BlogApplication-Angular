import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import {AngularFireModule} from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';

import { environment } from 'src/environments/environment.development';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KategorilerComponent } from './kategoriler/kategoriler.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import {ToastrModule} from 'ngx-toastr';
import  {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { PostlarComponent } from './posts/postlar/postlar.component';
import { YeniPostComponent } from './posts/yeni-post/yeni-post.component';
import {AngularEditorModule} from '@kolkov/angular-editor';
import {  HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { GirisComponent } from './auth/giris/giris.component';
import { SubscribersComponent } from './subscribers/subscribers.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    KategorilerComponent,
    FooterComponent,
    HeaderComponent,
    PostlarComponent,
    YeniPostComponent,
    GirisComponent,
    SubscribersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AngularEditorModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireAuthModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

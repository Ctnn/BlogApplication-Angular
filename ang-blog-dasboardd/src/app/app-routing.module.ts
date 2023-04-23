import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KategorilerComponent } from './kategoriler/kategoriler.component';
import { PostlarComponent } from './posts/postlar/postlar.component';
import { YeniPostComponent } from './posts/yeni-post/yeni-post.component';
import { GirisComponent } from './auth/giris/giris.component';
import { AuthGuard } from './services/auth.guard';
import { SubscribersComponent } from './subscribers/subscribers.component';

const routes: Routes = [
  {path:'', component: DashboardComponent,canActivate:[AuthGuard]},
  {path:'giris',component:GirisComponent},
  {path:'kategoriler', component: KategorilerComponent,canActivate:[AuthGuard]},
  {path:'posts', component:PostlarComponent,canActivate:[AuthGuard]},
  {path:'posts/yeni', component:YeniPostComponent,canActivate:[AuthGuard]},
  {path:'subscribers', component:SubscribersComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

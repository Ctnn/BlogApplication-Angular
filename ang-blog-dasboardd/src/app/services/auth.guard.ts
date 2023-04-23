import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private authService:AuthService,private router:Router,private toastr:ToastrService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.authService.isloggedInGuard)
      {
        console.log("Guard çalıştı, Yetkili Giriş Yapıldı")
        return true;
      }
      else
      {
        this.toastr.warning('Bu Sayfaya Erişiminiz Yoktur..','Hata');
        console.log("Guard çalıştı, Yetkili Giriş Yapılmadı")
        return false;
      }
  }
  
}

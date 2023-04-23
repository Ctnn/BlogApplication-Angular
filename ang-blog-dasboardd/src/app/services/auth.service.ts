import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private afAuth: AngularFireAuth, private  toastr:ToastrService, private router:Router) { }


  isloggedInGuard:boolean = false;
  loggedIn:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  login(email:any,password:any)
  {
    this.afAuth.signInWithEmailAndPassword(email,password).then(logRef=>{
      this.toastr.success('Giriş Başarılı','Hoşgeldiniz');
      this.loadUser();
      this.loggedIn.next(true);
      this.isloggedInGuard = true;
      this.router.navigate(['/']);
    }).catch(err=>{
      this.toastr.error('Giriş Başarısız','Hata');
    })
  }

  loadUser(){
  this.afAuth.authState.subscribe(user=>{
    localStorage.setItem('user',JSON.stringify(user)); 
  })}

  logout(){
    this.afAuth.signOut().then(()=>{
      this.toastr.success('Çıkış Başarılı','Hoşçakalın');
      localStorage.removeItem('user');
      this.loggedIn.next(false);
      this.isloggedInGuard = false;
      this.router.navigate(['/giris']);
    })}

    isloggedIn(){
      return this.loggedIn.asObservable();
    }
}

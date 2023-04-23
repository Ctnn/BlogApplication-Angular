import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  userEmail:String | undefined;
  isloggedIn$ : Observable<Boolean> | undefined;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.userEmail=JSON.parse(localStorage.getItem('user') || '{}').email;
    this.isloggedIn$ = this.authService.isloggedIn();

  }

  onlogOut(){
    this.authService.logout();
  }


}

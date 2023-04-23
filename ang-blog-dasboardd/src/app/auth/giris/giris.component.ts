import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-giris',
  templateUrl: './giris.component.html',
  styleUrls: ['./giris.component.css']
})
export class GirisComponent {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(formValue:any){
    this.authService.login(formValue.email,formValue.password); 
  }

}

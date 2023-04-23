import { Component } from '@angular/core';
import { Sub } from '../models/sub';
import { SubscribersService } from '../services/subscribers.service';

@Component({
  selector: 'app-abone-ol',
  templateUrl: './abone-ol.component.html',
  styleUrls: ['./abone-ol.component.css']
})
export class AboneOlComponent {

  isEmailError:boolean = false;
  isSubscribed:boolean = false;
  constructor(private subService:SubscribersService) { }

  ngOnInit(): void {
  }

  onSubmit(formVal:any){
    const subData: Sub ={
      name: formVal.name,
      email: formVal.email
    }
   this.subService.checkSubs(subData.email).subscribe(val=>{
    if(val.empty){
      this.subService.addSubs(subData);
      this.isSubscribed = true;
    }
    else{
      this.isEmailError = true;
     alert("Zaten abonesiniz");
    }
   });
  }

}

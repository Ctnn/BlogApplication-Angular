import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gonderi-kart',
  templateUrl: './gonderi-kart.component.html',
  styleUrls: ['./gonderi-kart.component.css']
})
export class GonderiKartComponent {

  constructor() { }

  @Input() postData:any;

  ngOnInit(): void {
  console.log(this.postData);
  }
}

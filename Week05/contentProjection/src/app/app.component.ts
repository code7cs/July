import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display:boolean = true;
  title = 'contentProjectiozn';

  public dept: string =  "HR and sales dept"
}

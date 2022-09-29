import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping_cart';
  navActive = 'recipes';

  navClick(val: string){
   this.navActive = val;
  }
}

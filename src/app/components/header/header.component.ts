import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() navClickEmit = new EventEmitter<string>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleNav( navClick : string){
     this.navClickEmit.emit(navClick);
  }

  homePage(){
    this.router.navigate(["/"]);
  }

}

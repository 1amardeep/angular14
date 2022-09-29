import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() navClickEmit = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  handleNav( navClick : string){
     this.navClickEmit.emit(navClick);
  }

}

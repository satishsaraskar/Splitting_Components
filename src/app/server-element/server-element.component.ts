import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent {

  // alias custom binding custom property prant to chlid
  @Input('srvElement')
   element: { type: string; name: string; content: string; } | any ;

  constructor() {

  }

  ngOnInit() {
  }

}
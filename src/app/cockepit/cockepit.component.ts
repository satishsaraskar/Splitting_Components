import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockepit',
  templateUrl: './cockepit.component.html',
  styleUrls: ['./cockepit.component.css']
})
export class CockepitComponent {
  @Output()serverCreated = new EventEmitter<{ serverName : string , serverContent:string }>();
  // alias custom Event parent to chlid 
  @Output('bpCreated')
    blueprintCreated = new EventEmitter<{ serverName : string , serverContent:string }>();
  public newServerName : string = "";
  public newServerContent : string = "";
  constructor() { }

  ngOnInit() {
  }

  onAddServer (){
    this.serverCreated.emit({serverName :this.newServerName , serverContent:this.newServerContent})
  }
  onAddBluePrint (){
    this.blueprintCreated.emit({serverName :this.newServerName , serverContent:this.newServerContent})

  }
}

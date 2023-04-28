import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public serverElements  = [
    {type:'server', name :'One' , content:'just a test one!'},
    {type:'blueprint', name :'two' , content:'just a test two !'},
  ] ;

  title = 'splitting-app-components';

  onServerAdded ( serverData : { serverName : string , serverContent:string}){
    this.serverElements.push({
      type:'server',
      name:serverData.serverName,
      content: serverData.serverContent
    });
  }


  onBlueprintAdded (blueprintData : { serverName : string , serverContent:string}){
    this.serverElements.push({
      type:'blueprint',
      name:blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }



}

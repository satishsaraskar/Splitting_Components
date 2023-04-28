import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public serverElements  = [
    {type:'server', name :'Sql server' , content:'a database that is isolated from other databases and from the instance of SQL Server that hosts the database'},
    {type:'blueprint', name :'mongodb server' , content:'MongoDB stores data records as BSON documents'},
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

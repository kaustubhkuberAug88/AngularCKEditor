import { Component, OnInit } from '@angular/core';
import { Content } from './models/Content';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  ngOnInit(): void {
    this.ckeConfig = {    
      allowedContent: false,    
      extraPlugins: 'divarea',    
      forcePasteAsPlainText: false
      //,toolbar: [['Bold', 'Italic']]          
    };      
  }

  onSubmit()    
  {    
    console.log(this.contentdata);
  }   

  title = 'primeng-controls';
  ckeConfig: any; 
  contentdata=new Content();
  
}

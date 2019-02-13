import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent 
{
  counter:number = 0;
  hide:boolean = true;

  buttonClicked()
  {
    this.counter++;
    console.log("button clicked");
  }

  dbClick()
  {
    console.log("img clicked");
    
    if(this.hide == true)
    {
      this.hide = false;
    }
    else if(this.hide == false)
    {
      this.hide = true;
    }

  }
}

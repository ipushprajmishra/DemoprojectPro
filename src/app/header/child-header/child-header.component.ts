import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-header',
  templateUrl: './child-header.component.html',
  styleUrl: './child-header.component.css'
})
export class ChildHeaderComponent {

  @Input()
  data:any;

  @Input()
  childSearchText:string=''

  clickvalue:string='';

  @Output()
childbuttonclicked:EventEmitter<string>=new EventEmitter<string>();


onButtonClick(event:any)
{
  console.log('child ' +  event.target.value);
  this.childbuttonclicked.emit(event.target.value);
}
}


import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  names:string="Pushpraj Mishra";
  std:number=10;

  isShow:boolean=true;


  getData()
  {
this.isShow=!this.isShow;
if(this.std <=10)
  {
    this.std++;
  }else 
  {
    this.std--;
  }

  }

  DataChanged(event:any)
  {
this.names=event.target.value;
  }

data:any=[1,2,3,4];

demodata:boolean=true;
products =[
  {id:1,
    name:"Pushpraj",
    age:26,
    location:"govandi"

  },
  {id:2,
    name:"mishra",
    age:29,
    location:"vashi"

  },
]


  filterdProducts:any=this.products;
   
  
parentSearchText:string='';

filterData(event:any)
{ 
  debugger;
  if(event.target.value!='')
  {
    this.filterdProducts=this.products.filter(x=>x.name.includes(event.target.value));
  }
  else 
  {
    this.filterdProducts=this.products;
  }

}


textFromChild:string=''
passChildToParent(event:any)
{
  this.textFromChild=  event;

}
}

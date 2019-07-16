import { Component } from '@angular/core';
import {ApiService} from './my-service.service';
import {Istock} from './stock';
import { Observable } from 'rxjs/internal/Observable';
import { interval } from 'rxjs';



@Component({
  selector: 'app-root',

  template: `
  Please Select a Stock from List Below :
<select [(ngModel)] = "stockSelected"  (ngModelChange)= "onStockSelect($event)">
<option value="1">Stock1</option>
<option value="2">Stock2</option>
</select>
<br>
<br>
 Selected Stock Information
    
   <br>
   <table style="border:1px solid blue; height:100px;width:300px">
   <tr>
   <td>
  <b> Stock Name</b>
   </td>
  <td><b>Current Time</b></td>  
  <td><b>Stock Price</b></td>
  </tr>
  <tr>
  <td>{{stock.stockName}}</td>
  <td>{{stock.currentTime}}</td>
  <td>{{stock.stockPrice}}</td>
  <tr>
  </table>
    

  `
 
})
export class AppComponent {
  title = 'stockProjectAngular';
  public stock:Istock;
 public data:Istock;
 public stockSelected:number;
 
constructor(private Api:ApiService ){}

ngOnInit():void 
{
  this.stockSelected=1;
interval(1000).subscribe(()=> this.onStockSelect(this.stockSelected));
}

onStockSelect(id:any){
  
this.Api.getData(id).subscribe((data:Istock) =>{
  this.stock=data;
});



}
}





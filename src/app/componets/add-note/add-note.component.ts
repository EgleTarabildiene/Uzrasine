import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../../models/item';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.css'
})
export class AddNoteComponent {

public name: string | null=null;

public orders:Item[]=[];


public constructor(private orderService:OrderService){
this.orders=orderService.orders;
}

public addItem(){
  if (this.name!=null){

    this.orderService.addItem({
 name:this.name,
  
  });
  console.log(this.orders);
  this.name=null;
 }
}

/*public isNaN(i:number| null){
  if(i!==null){
    return this.isNaN(i);
  }
  return false;
}

*/
}




import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Item } from '../../models/item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-notes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-notes.component.html',
  styleUrl: './list-notes.component.css'
})
export class ListNotesComponent {
  public orders:Item[];
public constructor(private orderService:OrderService){
this.orders=orderService.orders;
}

public deleteItem(i:number){
  this.orderService.deleteItem(i);
}

}

import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Wine, WineQuantity } from '../../model/interfaces';

@Component({
  selector: 'app-wine-item',
  templateUrl: './wine-item.component.html',
  styleUrls: ['./wine-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WineItemComponent implements OnInit {
  @Input() wine: Wine = {} as Wine;
  @Output() WineQuantityChange: EventEmitter<WineQuantity>;
  cantidad: WineQuantity = {} as WineQuantity;

  constructor() {
    this.WineQuantityChange = new EventEmitter<WineQuantity>();
  }
  ngOnInit() {}
  dec(): void {
    this.cantidad.id = this.wine.id;
    this.cantidad.quantity = this.wine.quantityInCart;
    this.cantidad.quantity--;
    this.WineQuantityChange.emit(this.cantidad);
  }
  inc(): void {
    this.cantidad.id = this.wine.id;
    this.cantidad.quantity = this.wine.quantityInCart;
    this.cantidad.quantity++;
    this.WineQuantityChange.emit(this.cantidad);
  }
}

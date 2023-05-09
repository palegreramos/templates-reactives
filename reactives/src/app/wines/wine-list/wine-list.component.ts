import { Component, OnInit } from '@angular/core';
import { Wine, WineQuantity } from '../../model/interfaces';
import { listwines } from 'src/app/model/wines';
@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css'],
})
export class WineListComponent implements OnInit {
 wines=listwines;

  constructor() { }

  ngOnInit() { }

  onWineQuantityChange(wine: WineQuantity) {
    this.wines[wine.id].quantityInCart = wine.quantity;
  }
}

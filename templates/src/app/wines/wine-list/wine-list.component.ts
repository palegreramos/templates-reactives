import { Component, OnInit } from '@angular/core';
import { Wine, WineQuantity } from '../../model/interfaces';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css'],
})
export class WineListComponent implements OnInit {
  wines: Array<Wine> = [
    {
      id: 0,
      name: 'Don Simón Selección Tempranillo',
      imageUrl: './assets/donsimon.jpg',
      price: 1.65,
      isOnSale: false,
      quantityInCart: 0,
      foodPairing: [
        { name: 'aceitunas', kcal: 100, vegan: true, gluten: false },
        { name: 'queso', kcal: 100, vegan: false, gluten: true },
      ],
    },
    {
      id: 1,
      name: 'Rosado Alicia en el Pais de las Uvas',
      imageUrl: './assets/alicia.jpg',
      price: 5.84,
      isOnSale: true,
      quantityInCart: 0,
      foodPairing: [
        { name: 'jamón', kcal: 150, vegan: false, gluten: false },
        { name: 'queso', kcal: 100, vegan: false, gluten: true },
      ],
    },
    {
      id: 2,
      name: 'Cune Verdejo Rueda',
      imageUrl: './assets/cuneruedaverdejo.jpg',
      price: 5.45,
      isOnSale: true,
      quantityInCart: 0,
      foodPairing: [
        { name: 'aceitunas', kcal: 100, vegan: true, gluten: false },
        { name: 'queso', kcal: 100, vegan: false, gluten: true },
      ],
    },
  ];

  constructor() { }

  ngOnInit() { }

  onWineQuantityChange(wine: WineQuantity) {
    this.wines[wine.id].quantityInCart = wine.quantity;
  }
}

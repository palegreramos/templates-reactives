import { Component, OnInit } from '@angular/core';
import { Wine} from '../../model/interfaces';

@Component({
  selector: 'app-wine-new',
  templateUrl: './wine-new.component.html',
  styleUrls: ['./wine-new.component.css']
})
export class WineNewComponent implements OnInit {
public wine: Wine={} as Wine;
public message: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  createWine(wineForm: any) {
    if (wineForm.invalid) {
      this.message = 'Please correct all errors and resubmit the form';
    } else {
      this.message = '';
      this.wine = wineForm.value.wine;
      console.log('Creating wine', this.wine);
    }
  }

}

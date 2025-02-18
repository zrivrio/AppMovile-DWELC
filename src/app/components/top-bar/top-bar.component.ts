import { Component } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { map, Observable } from 'rxjs';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.css'],
    standalone: false
})
export class TopBarComponent {
    
    numberOfItems$: Observable<number>;

  constructor(private cartService: CartService) {
    this.numberOfItems$ = this.cartService.itemsObservable.pipe(
      map(items => items.length)
    );
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
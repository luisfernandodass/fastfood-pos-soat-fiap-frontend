import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IProduct } from '../../interfaces/produto';

@Component({
  selector: 'app-item-produto',
  templateUrl: './item-produto.component.html',
  styleUrls: ['./item-produto.component.scss']
})
export class ItemProdutoComponent implements OnInit {

  @Input('product') product: IProduct;

  form = new FormGroup({
    productQuantity: new FormControl<number>(0) 
  });

  disableBtnDecreaseQuantity = true;

  ngOnInit(): void {
    console.log('product', this.product)
    this.verifyIfShouldDisableBtnDecreaseQuantity();
  }

  private verifyIfShouldDisableBtnDecreaseQuantity(): void {
    this.form.controls['productQuantity'].valueChanges
    .subscribe((quantity) => {
      quantity === 0 
      ? this.disableBtnDecreaseQuantity = true
      : this.disableBtnDecreaseQuantity = false;
    });
  }

  addProduct(): void {
    const control = this.form.controls['productQuantity'];
    control.setValue(control.value as number + 1)
  }

  removeProduct(): void {
    const control = this.form.controls['productQuantity'];
    control.setValue(control.value as number - 1)
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-celula-input',
  templateUrl: './celula-input.component.html',
  styleUrls: ['./celula-input.component.scss']
})
export class CelulaInputComponent implements OnInit {
  form = new FormGroup({
    digito: new FormControl<string>('', Validators.maxLength(1))
  });

  @Output() formValido = new EventEmitter();
  @Input() inputElementoID: string;

  ngOnInit(): void {
    this.form.controls['digito'].valueChanges
      .subscribe((valor: string | any) => {
        this.formValido.emit(valor);
      });
  }
}

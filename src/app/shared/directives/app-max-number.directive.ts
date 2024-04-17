import {
  Directive,
  Input,
  OnChanges,
  OnInit,
  Optional,
  SimpleChanges,
} from '@angular/core';
import { FormControlName, NgModel } from '@angular/forms';

@Directive({
  selector: '[appMaxNumber]',
})
export class AppMaxNumberDirective implements OnInit, OnChanges {
  @Input()
  max: number;
  constructor(
    @Optional() private ngModel: NgModel,
    @Optional() private formControlName: FormControlName,
  ) {}
  ngOnInit(): void {
    let valueOld = null;

    const controlModel = this.ngModel ? this.ngModel : this.formControlName;

    if (controlModel) {
      controlModel.control.valueChanges.subscribe((value) => {
        const maxNumber = this.max && !isNaN(+this.max) ? +this.max : null;
        value = value === null || value === undefined ? '' : value;
        controlModel.control.patchValue(value, {
          emitEvent: false,
        });
        if (value && maxNumber && value > maxNumber) {
          value = valueOld;
          controlModel.control.patchValue(value || null, {
            emitEvent: false,
          });
        }
        valueOld = value;
      });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['max']) {
      this.max = changes['max'].currentValue;
    }
  }
}

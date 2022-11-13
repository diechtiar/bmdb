import { Component, EventEmitter, forwardRef, OnInit, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

const SEARCH_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SearchInputComponent),
  multi: true,
};

@Component({
  selector: 'bmdb-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  providers: [SEARCH_CONTROL_VALUE_ACCESSOR]
})
export class SearchInputComponent implements OnInit, ControlValueAccessor {

  private onTouched = () => {};
  private onChanged = (value: string) => {};

  value = '';

  constructor() {}

  ngOnInit(): void {}

  search() {
    this.onChanged(this.value);
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    this.value = value;
  }

  handleChange(e: 'string') {
    this.onTouched();
    this.value = e;
    this.onChanged(this.value);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bmdb-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {

  value?: string;

  constructor() {}

  ngOnInit(): void {}
}

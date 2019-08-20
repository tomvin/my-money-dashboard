import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../../models/category';

@Component({
  selector: 'mm-pos-left-navbar',
  templateUrl: './pos-left-navbar.component.html',
  styleUrls: ['./pos-left-navbar.component.scss']
})
export class PosLeftNavbarComponent implements OnInit {
  @Input() categories: Category[] = [];

  constructor() { }

  ngOnInit() {
  }

}

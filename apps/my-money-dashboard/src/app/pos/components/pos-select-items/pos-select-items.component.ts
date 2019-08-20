import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../../models/category';
import { Item } from '../../../models/item';

@Component({
  selector: 'mm-pos-select-items',
  templateUrl: './pos-select-items.component.html',
  styleUrls: ['./pos-select-items.component.scss']
})
export class PosSelectItemsComponent implements OnInit {
  @Output() itemClick: EventEmitter<Item> = new EventEmitter();
  @Input() category: Category;
  filteredItems: Item[] = [];

  constructor() { }

  ngOnInit() {

  }

  public handleItemClick(item: Item): void {
    this.itemClick.emit(item);
  }

}

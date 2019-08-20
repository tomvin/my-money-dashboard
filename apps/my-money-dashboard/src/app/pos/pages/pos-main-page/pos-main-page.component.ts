import { Component, OnInit } from '@angular/core';
import { Category } from '../../../models/category';
import { Item } from '../../../models/item';

@Component({
  selector: 'mm-pos-main-page',
  templateUrl: './pos-main-page.component.html',
  styleUrls: ['./pos-main-page.component.scss']
})
export class PosMainPageComponent implements OnInit {
  public categories: Category[] = MOCK_CATEGORIES;

  constructor() { }

  ngOnInit() {
  }

}

const MOCK_CATEGORIES: Category[] = [{
  name: 'Admission',
  icon: 'ticket-alt',
  items: [{
    name: 'Adult',
    price: 11,
    imageUrl: 'http://northfloridaeggfest.com/wp-content/uploads/2017/01/purge-clipart-ticket-85041.jpg'
  }, {
    name: 'Concession',
    price: 9,
    imageUrl: 'http://northfloridaeggfest.com/wp-content/uploads/2017/01/purge-clipart-ticket-85041.jpg'
  }, {
    name: 'Children Under 5',
    price: 0,
    imageUrl: 'http://northfloridaeggfest.com/wp-content/uploads/2017/01/purge-clipart-ticket-85041.jpg'
  }, {
    name: 'VIT Teacher',
    price: 0,
    imageUrl: 'http://northfloridaeggfest.com/wp-content/uploads/2017/01/purge-clipart-ticket-85041.jpg'
  }, {
    name: 'Family',
    price: 26,
    imageUrl: 'http://northfloridaeggfest.com/wp-content/uploads/2017/01/purge-clipart-ticket-85041.jpg'
  }]
}, {
  name: 'Gifts',
  icon: 'gifts',
  items: [{
    name: 'Adult',
    price: 11,
    imageUrl: ''
  }, {
    name: 'Concession',
    price: 9,
    imageUrl: ''
  }, {
    name: 'Children Under 5',
    price: 0,
    imageUrl: ''
  }, {
    name: 'VIT Teacher',
    price: 0,
    imageUrl: ''
  }, {
    name: 'Family',
    price: 26,
    imageUrl: ''
  }]
}];

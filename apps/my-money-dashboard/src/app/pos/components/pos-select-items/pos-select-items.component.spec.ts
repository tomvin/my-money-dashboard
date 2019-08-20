import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosSelectItemsComponent } from './pos-select-items.component';

describe('PosSelectItemsComponent', () => {
  let component: PosSelectItemsComponent;
  let fixture: ComponentFixture<PosSelectItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosSelectItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosSelectItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

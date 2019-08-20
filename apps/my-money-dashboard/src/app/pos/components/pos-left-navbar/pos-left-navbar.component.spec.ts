import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosLeftNavbarComponent } from './pos-left-navbar.component';

describe('PosLeftNavbarComponent', () => {
  let component: PosLeftNavbarComponent;
  let fixture: ComponentFixture<PosLeftNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosLeftNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosLeftNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

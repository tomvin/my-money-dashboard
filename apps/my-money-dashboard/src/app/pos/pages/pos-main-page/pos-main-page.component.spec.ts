import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosMainPageComponent } from './pos-main-page.component';

describe('PosMainPageComponent', () => {
  let component: PosMainPageComponent;
  let fixture: ComponentFixture<PosMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

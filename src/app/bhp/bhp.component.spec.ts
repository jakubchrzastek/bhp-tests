import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhpComponent } from './bhp.component';

describe('BhpComponent', () => {
  let component: BhpComponent;
  let fixture: ComponentFixture<BhpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

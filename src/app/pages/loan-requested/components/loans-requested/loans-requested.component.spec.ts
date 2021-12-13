import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansRequestedComponent } from './loans-requested.component';

describe('LoansRequestedComponent', () => {
  let component: LoansRequestedComponent;
  let fixture: ComponentFixture<LoansRequestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoansRequestedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansRequestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

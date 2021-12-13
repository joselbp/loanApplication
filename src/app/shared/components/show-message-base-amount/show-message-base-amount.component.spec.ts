import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMessageBaseAmountComponent } from './show-message-base-amount.component';

describe('ShowMessageBaseAmountComponent', () => {
  let component: ShowMessageBaseAmountComponent;
  let fixture: ComponentFixture<ShowMessageBaseAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMessageBaseAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMessageBaseAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomImputComponent } from './custom-imput.component';

describe('CustomImputComponent', () => {
  let component: CustomImputComponent;
  let fixture: ComponentFixture<CustomImputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomImputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomImputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

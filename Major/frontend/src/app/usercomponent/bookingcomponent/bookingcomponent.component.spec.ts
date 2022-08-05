import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingcomponentComponent } from './bookingcomponent.component';

describe('BookingcomponentComponent', () => {
  let component: BookingcomponentComponent;
  let fixture: ComponentFixture<BookingcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

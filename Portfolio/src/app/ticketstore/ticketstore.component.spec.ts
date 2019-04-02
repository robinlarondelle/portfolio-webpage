import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketstoreComponent } from './ticketstore.component';

describe('TicketstoreComponent', () => {
  let component: TicketstoreComponent;
  let fixture: ComponentFixture<TicketstoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketstoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

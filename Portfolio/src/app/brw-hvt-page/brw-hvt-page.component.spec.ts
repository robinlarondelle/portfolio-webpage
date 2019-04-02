import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrwHvtPageComponent } from './brw-hvt-page.component';

describe('BrwHvtPageComponent', () => {
  let component: BrwHvtPageComponent;
  let fixture: ComponentFixture<BrwHvtPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrwHvtPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrwHvtPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

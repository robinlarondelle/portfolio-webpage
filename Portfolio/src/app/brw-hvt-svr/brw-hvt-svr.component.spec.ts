import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrwHvtSvrComponent } from './brw-hvt-svr.component';

describe('BrwHvtSvrComponent', () => {
  let component: BrwHvtSvrComponent;
  let fixture: ComponentFixture<BrwHvtSvrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrwHvtSvrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrwHvtSvrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

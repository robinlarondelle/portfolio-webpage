import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CineappComponent } from './cineapp.component';

describe('CineappComponent', () => {
  let component: CineappComponent;
  let fixture: ComponentFixture<CineappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CineappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CineappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

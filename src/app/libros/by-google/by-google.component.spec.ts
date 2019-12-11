import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByGoogleComponent } from './by-google.component';

describe('ByGoogleComponent', () => {
  let component: ByGoogleComponent;
  let fixture: ComponentFixture<ByGoogleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByGoogleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

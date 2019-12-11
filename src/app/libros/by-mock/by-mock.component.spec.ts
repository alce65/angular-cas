import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByMockComponent } from './by-mock.component';

describe('ByMockComponent', () => {
  let component: ByMockComponent;
  let fixture: ComponentFixture<ByMockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByMockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

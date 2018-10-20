import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { K3Component } from './k3.component';

describe('K3Component', () => {
  let component: K3Component;
  let fixture: ComponentFixture<K3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ K3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(K3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

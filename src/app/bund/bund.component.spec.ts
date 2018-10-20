import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundComponent } from './bund.component';

describe('BundComponent', () => {
  let component: BundComponent;
  let fixture: ComponentFixture<BundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

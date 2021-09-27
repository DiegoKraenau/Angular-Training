import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PuComponent } from './pu.component';

describe('PuComponent', () => {
  let component: PuComponent;
  let fixture: ComponentFixture<PuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

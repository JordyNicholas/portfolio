import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightViewComponent } from './right-view.component';

describe('RightViewComponent', () => {
  let component: RightViewComponent;
  let fixture: ComponentFixture<RightViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightViewComponent]
    });
    fixture = TestBed.createComponent(RightViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

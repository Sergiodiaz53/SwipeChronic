import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipableCardComponent } from './swipable-card.component';

describe('SwipableCardComponent', () => {
  let component: SwipableCardComponent;
  let fixture: ComponentFixture<SwipableCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwipableCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

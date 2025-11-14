import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacityParameterComponent } from './capacity-parameter.component';

describe('CapacityParameterComponent', () => {
  let component: CapacityParameterComponent;
  let fixture: ComponentFixture<CapacityParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapacityParameterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacityParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

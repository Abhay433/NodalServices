import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmaintananceComponent } from './smaintanance.component';

describe('SmaintananceComponent', () => {
  let component: SmaintananceComponent;
  let fixture: ComponentFixture<SmaintananceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmaintananceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmaintananceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

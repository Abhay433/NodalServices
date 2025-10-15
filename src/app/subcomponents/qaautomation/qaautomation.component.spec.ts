import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaautomationComponent } from './qaautomation.component';

describe('QaautomationComponent', () => {
  let component: QaautomationComponent;
  let fixture: ComponentFixture<QaautomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QaautomationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QaautomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

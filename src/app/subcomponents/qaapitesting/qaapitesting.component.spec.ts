import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaapitestingComponent } from './qaapitesting.component';

describe('QaapitestingComponent', () => {
  let component: QaapitestingComponent;
  let fixture: ComponentFixture<QaapitestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QaapitestingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QaapitestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

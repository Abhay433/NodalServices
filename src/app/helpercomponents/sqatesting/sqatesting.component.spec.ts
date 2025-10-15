import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqatestingComponent } from './sqatesting.component';

describe('SqatestingComponent', () => {
  let component: SqatestingComponent;
  let fixture: ComponentFixture<SqatestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqatestingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqatestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

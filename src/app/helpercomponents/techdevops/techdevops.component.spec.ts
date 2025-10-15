import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechdevopsComponent } from './techdevops.component';

describe('TechdevopsComponent', () => {
  let component: TechdevopsComponent;
  let fixture: ComponentFixture<TechdevopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechdevopsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechdevopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutuspoliciesComponent } from './aboutuspolicies.component';

describe('AboutuspoliciesComponent', () => {
  let component: AboutuspoliciesComponent;
  let fixture: ComponentFixture<AboutuspoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutuspoliciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutuspoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

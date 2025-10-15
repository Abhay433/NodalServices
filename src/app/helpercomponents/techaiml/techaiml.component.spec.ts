import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechaimlComponent } from './techaiml.component';

describe('TechaimlComponent', () => {
  let component: TechaimlComponent;
  let fixture: ComponentFixture<TechaimlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechaimlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechaimlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

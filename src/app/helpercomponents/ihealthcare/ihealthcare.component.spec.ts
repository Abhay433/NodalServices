import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IhealthcareComponent } from './ihealthcare.component';

describe('IhealthcareComponent', () => {
  let component: IhealthcareComponent;
  let fixture: ComponentFixture<IhealthcareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IhealthcareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IhealthcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

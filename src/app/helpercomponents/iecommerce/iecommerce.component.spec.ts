import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IecommerceComponent } from './iecommerce.component';

describe('IecommerceComponent', () => {
  let component: IecommerceComponent;
  let fixture: ComponentFixture<IecommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IecommerceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IecommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

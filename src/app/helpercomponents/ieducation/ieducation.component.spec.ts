import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IeducationComponent } from './ieducation.component';

describe('IeducationComponent', () => {
  let component: IeducationComponent;
  let fixture: ComponentFixture<IeducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IeducationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IeducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

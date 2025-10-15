import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfintechComponent } from './ifintech.component';

describe('IfintechComponent', () => {
  let component: IfintechComponent;
  let fixture: ComponentFixture<IfintechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfintechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfintechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

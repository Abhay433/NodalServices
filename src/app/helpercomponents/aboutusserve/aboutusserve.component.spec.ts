import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusserveComponent } from './aboutusserve.component';

describe('AboutusserveComponent', () => {
  let component: AboutusserveComponent;
  let fixture: ComponentFixture<AboutusserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutusserveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutusserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

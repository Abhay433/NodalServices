import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusleadershipComponent } from './aboutusleadership.component';

describe('AboutusleadershipComponent', () => {
  let component: AboutusleadershipComponent;
  let fixture: ComponentFixture<AboutusleadershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutusleadershipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutusleadershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

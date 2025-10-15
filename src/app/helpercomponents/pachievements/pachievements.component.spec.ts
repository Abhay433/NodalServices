import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PachievementsComponent } from './pachievements.component';

describe('PachievementsComponent', () => {
  let component: PachievementsComponent;
  let fixture: ComponentFixture<PachievementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PachievementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PachievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

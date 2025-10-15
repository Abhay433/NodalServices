import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsoftwaredevelopmentComponent } from './ssoftwaredevelopment.component';

describe('SsoftwaredevelopmentComponent', () => {
  let component: SsoftwaredevelopmentComponent;
  let fixture: ComponentFixture<SsoftwaredevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SsoftwaredevelopmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsoftwaredevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

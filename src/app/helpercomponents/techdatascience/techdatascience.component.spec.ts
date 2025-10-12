import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechdatascienceComponent } from './techdatascience.component';

describe('TechdatascienceComponent', () => {
  let component: TechdatascienceComponent;
  let fixture: ComponentFixture<TechdatascienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechdatascienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechdatascienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

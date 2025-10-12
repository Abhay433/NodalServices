import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcomponentsComponent } from './subcomponents.component';

describe('SubcomponentsComponent', () => {
  let component: SubcomponentsComponent;
  let fixture: ComponentFixture<SubcomponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubcomponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

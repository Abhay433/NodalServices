import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SthirdpartyComponent } from './sthirdparty.component';

describe('SthirdpartyComponent', () => {
  let component: SthirdpartyComponent;
  let fixture: ComponentFixture<SthirdpartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SthirdpartyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SthirdpartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QamanualComponent } from './qamanual.component';

describe('QamanualComponent', () => {
  let component: QamanualComponent;
  let fixture: ComponentFixture<QamanualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QamanualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QamanualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

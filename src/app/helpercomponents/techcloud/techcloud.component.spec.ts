import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechcloudComponent } from './techcloud.component';

describe('TechcloudComponent', () => {
  let component: TechcloudComponent;
  let fixture: ComponentFixture<TechcloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechcloudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechcloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

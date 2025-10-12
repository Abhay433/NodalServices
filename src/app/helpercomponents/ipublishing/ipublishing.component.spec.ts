import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpublishingComponent } from './ipublishing.component';

describe('IpublishingComponent', () => {
  let component: IpublishingComponent;
  let fixture: ComponentFixture<IpublishingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpublishingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpublishingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

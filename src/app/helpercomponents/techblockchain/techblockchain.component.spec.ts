import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechblockchainComponent } from './techblockchain.component';

describe('TechblockchainComponent', () => {
  let component: TechblockchainComponent;
  let fixture: ComponentFixture<TechblockchainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechblockchainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechblockchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

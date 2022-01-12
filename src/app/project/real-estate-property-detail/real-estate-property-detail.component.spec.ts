import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstatePropertyDetailComponent } from './real-estate-property-detail.component';

describe('RealEstatePropertyDetailComponent', () => {
  let component: RealEstatePropertyDetailComponent;
  let fixture: ComponentFixture<RealEstatePropertyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealEstatePropertyDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealEstatePropertyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

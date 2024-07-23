import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasingReportComponent } from './purchasing-report.component';

describe('PurchasingReportComponent', () => {
  let component: PurchasingReportComponent;
  let fixture: ComponentFixture<PurchasingReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchasingReportComponent]
    });
    fixture = TestBed.createComponent(PurchasingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

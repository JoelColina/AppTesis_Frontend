import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcountReportsComponent } from './acount-reports.component';

describe('AcountReportsComponent', () => {
  let component: AcountReportsComponent;
  let fixture: ComponentFixture<AcountReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcountReportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcountReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

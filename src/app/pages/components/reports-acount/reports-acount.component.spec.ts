import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsAcountComponent } from './reports-acount.component';

describe('ReportsAcountComponent', () => {
  let component: ReportsAcountComponent;
  let fixture: ComponentFixture<ReportsAcountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportsAcountComponent]
    });
    fixture = TestBed.createComponent(ReportsAcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterUpdateCostCenterComponent } from './master-update-cost-center.component';

describe('MasterUpdateCostCenterComponent', () => {
  let component: MasterUpdateCostCenterComponent;
  let fixture: ComponentFixture<MasterUpdateCostCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterUpdateCostCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterUpdateCostCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

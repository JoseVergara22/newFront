import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterRegisterCostCenterComponent } from './master-register-cost-center.component';

describe('MasterRegisterCostCenterComponent', () => {
  let component: MasterRegisterCostCenterComponent;
  let fixture: ComponentFixture<MasterRegisterCostCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterRegisterCostCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterRegisterCostCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

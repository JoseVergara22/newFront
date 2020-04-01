import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterUpdateTechniciansComponent } from './master-update-technicians.component';

describe('MasterUpdateTechniciansComponent', () => {
  let component: MasterUpdateTechniciansComponent;
  let fixture: ComponentFixture<MasterUpdateTechniciansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterUpdateTechniciansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterUpdateTechniciansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

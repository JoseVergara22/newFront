import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterUpdateRegionalComponent } from './master-update-regional.component';

describe('MasterUpdateRegionalComponent', () => {
  let component: MasterUpdateRegionalComponent;
  let fixture: ComponentFixture<MasterUpdateRegionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterUpdateRegionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterUpdateRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

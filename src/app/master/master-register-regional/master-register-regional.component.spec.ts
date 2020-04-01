import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterRegisterRegionalComponent } from './master-register-regional.component';

describe('MasteRegisterRegionalComponent', () => {
  let component: MasterRegisterRegionalComponent;
  let fixture: ComponentFixture<MasterRegisterRegionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterRegisterRegionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterRegisterRegionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

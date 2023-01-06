import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeploymentSecComponent } from './deployment-sec.component';

describe('DeploymentSecComponent', () => {
  let component: DeploymentSecComponent;
  let fixture: ComponentFixture<DeploymentSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeploymentSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeploymentSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

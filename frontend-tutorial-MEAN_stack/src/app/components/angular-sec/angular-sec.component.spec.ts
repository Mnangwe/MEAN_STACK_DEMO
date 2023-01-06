import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSecComponent } from './angular-sec.component';

describe('AngularSecComponent', () => {
  let component: AngularSecComponent;
  let fixture: ComponentFixture<AngularSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

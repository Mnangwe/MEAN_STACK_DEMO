import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeSecComponent } from './node-sec.component';

describe('NodeSecComponent', () => {
  let component: NodeSecComponent;
  let fixture: ComponentFixture<NodeSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodeSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

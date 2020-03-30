import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTargetPanelComponent } from './add-target-panel.component';

describe('AddTargetPanelComponent', () => {
  let component: AddTargetPanelComponent;
  let fixture: ComponentFixture<AddTargetPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTargetPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTargetPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

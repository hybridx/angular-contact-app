import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationTriggerPanelComponent } from './notification-trigger-panel.component';

describe('NotificationTriggerPanelComponent', () => {
  let component: NotificationTriggerPanelComponent;
  let fixture: ComponentFixture<NotificationTriggerPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationTriggerPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationTriggerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

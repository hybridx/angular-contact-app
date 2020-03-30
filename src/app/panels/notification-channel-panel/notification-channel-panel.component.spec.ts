import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationChannelPanelComponent } from './notification-channel-panel.component';

describe('NotificationChannelPanelComponent', () => {
  let component: NotificationChannelPanelComponent;
  let fixture: ComponentFixture<NotificationChannelPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationChannelPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationChannelPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

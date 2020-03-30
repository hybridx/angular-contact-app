import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationChannelPanelComponent } from './panels/notification-channel-panel/notification-channel-panel.component';
import { NotificationTriggerPanelComponent } from './panels/notification-trigger-panel/notification-trigger-panel.component';
import { ApplicationPanelComponent } from './panels/application-panel/application-panel.component';
import { AddTargetPanelComponent } from './panels/add-target-panel/add-target-panel.component';

const appRoutes: Routes = [
  {
    path: 'channel',
    component: NotificationChannelPanelComponent
  },
  {
    path: 'trigger',
    component: NotificationTriggerPanelComponent
  },
  {
    path: 'application',
    component: ApplicationPanelComponent
  },
  {
    path: 'target',
    component: AddTargetPanelComponent
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRouterModule { }

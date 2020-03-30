import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbsComponent } from './commons/breadcrumbs/breadcrumbs.component';
import { AppRouterModule } from './app-router.module';
import { SettingListComponent } from './setting-list/setting-list.component';
import { ApplicationPanelComponent } from './panels/application-panel/application-panel.component';
import { NotificationChannelPanelComponent } from './panels/notification-channel-panel/notification-channel-panel.component';
import { NotificationTriggerPanelComponent } from './panels/notification-trigger-panel/notification-trigger-panel.component';
import { AddTargetPanelComponent } from './panels/add-target-panel/add-target-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbsComponent,
    SettingListComponent,
    ApplicationPanelComponent,
    NotificationChannelPanelComponent,
    NotificationTriggerPanelComponent,
    AddTargetPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

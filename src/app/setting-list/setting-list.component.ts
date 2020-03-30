import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'opf-setting-list',
  templateUrl: './setting-list.component.html',
  styleUrls: ['./setting-list.component.scss']
})
export class SettingListComponent implements OnInit {
  panelLinks = [
    {
      link: 'application',
      title: 'Select Application',
    },
    {
      link: 'channel',
      title: 'Select Notification Channel',
    },
    {
      link: 'trigger',
      title: 'Select Notification Tigger Channel',
    },
    {
      link: 'target',
      title: 'Add Target News',
    }
  ];
  selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  selectCurrentTab(i) {
    this.selectedIndex = i;
  }

}

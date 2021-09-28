import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Inbox', icon: 'home' },
    { title: 'Learning', url: '/folder/Outbox', icon: 'book' },
    { title: 'Discussions', url: '/folder/Favorites', icon: 'chatbubbles' },
    { title: 'Activites', url: '/folder/Archived', icon: 'document' },
    { title: 'Processes', url: '/folder/Trash', icon: 'shuffle' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}

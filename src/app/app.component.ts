import { Component, ViewChild } from '@angular/core';
import { MatDrawer, MatDrawerToggleResult } from '@angular/material/sidenav';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-lavasoft';
  opened = false;

  

  @ViewChild('drawer') drawer!: MatDrawer;

  toggle(): Promise<MatDrawerToggleResult> {
    this.opened = !this.opened;
    return this.drawer.toggle();
  }


}

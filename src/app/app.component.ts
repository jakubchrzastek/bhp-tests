import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private showNav: Boolean = false;

  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    this.showNav = false;
  }


  showMenu(event: Event) {
    event.stopPropagation();
    this.showNav = true;
  }
}

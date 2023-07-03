import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private renderer: Renderer2) { }

  toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    this.renderer.addClass(dropdown, 'show');
  }
  
}

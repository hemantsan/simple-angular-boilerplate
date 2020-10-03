import { Component, OnInit } from '@angular/core';
// import { AuthService } from '@app/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  username: string;

  constructor(
    // private authService: AuthService
  ) { }

  ngOnInit() {
    // this.username = this.authService.getCurrentUser().name;
  }

  showDrawer() {
    document.querySelector('.adminx-sidebar').classList.toggle('in');
  }

  logout($event) {
    $event.preventDefault();
    // this.authService.logout();
  }
}

import { Component, OnInit } from '@angular/core';
import { HeaderService } from '@app/shared/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  breadcrums: string[];
  pageTitle: string;
  urls: any;

  constructor(private contentHeader: HeaderService) {
    this.contentHeader.setPageHeader$.subscribe(data => {
      this.urls = data.split('/');
      this.breadcrums = this.urls.filter((el) => {
        if (el != null && el !== '') {
          return el;
        }
      });

      this.pageTitle = this.breadcrums[0].charAt(0).toUpperCase() + this.breadcrums[0].slice(1);
    });
  }

  ngOnInit() {

  }
}

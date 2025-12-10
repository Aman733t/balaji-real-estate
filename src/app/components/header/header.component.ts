import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PackagesModule } from '../../libs/packages/packages.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PackagesModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public menuList: any = [{
    menu_name: 'Contact Us',
    menu_path: '/contact'
  }, {
    menu_name: 'About',
    menu_path: '/about'
  },
  {
    menu_name: 'Work',
    menu_path: '/myworks'
  },
  {
    menu_name: 'Services',
    menu_path: '/services'
  },
  {
    menu_name: 'Home',
    menu_path: '/'
  }
  ]

  constructor(private router: Router) { }

  isActive(menuPath: any) {
    return this.router.url === menuPath;
  }

  removeActiveClass(): void {
    document.querySelectorAll('.menu li').forEach((element) => {
      element.classList.remove('active');
    });
  }
}

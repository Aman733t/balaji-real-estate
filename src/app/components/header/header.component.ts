import { Component, HostListener, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PackagesModule } from '../../libs/packages/packages.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, PackagesModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  // Access the checkbox to see if menu is open
  @ViewChild('menuBtn') menuBtn!: ElementRef<HTMLInputElement>;

  private lastScrollTop: number = 0;
  public isHeaderHidden: boolean = false;

  public menuList: any = [
    { menu_name: 'Contact Us', menu_path: '/contact' },
    { menu_name: 'About', menu_path: '/about' },
    { menu_name: 'Work', menu_path: '/myworks' },
    { menu_name: 'Services', menu_path: '/services' },
    { menu_name: 'Home', menu_path: '/' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // NEW LOGIC: If mobile menu is open, do NOT hide the header
    const isMobileMenuOpen = this.menuBtn?.nativeElement?.checked;

    if (isMobileMenuOpen) {
      this.isHeaderHidden = false;
      this.lastScrollTop = currentScroll;
      return;
    }

    // Standard hide/show logic
    if (currentScroll <= 50) {
      this.isHeaderHidden = false;
    } else if (currentScroll > this.lastScrollTop) {
      // Scrolling Down
      this.isHeaderHidden = true;
    } else {
      // Scrolling Up
      this.isHeaderHidden = false;
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  isActive(menuPath: string): boolean {
    return this.router.url === menuPath;
  }

  removeActiveClass(): void {
    if (typeof document !== 'undefined') {
      document.querySelectorAll('.menu li').forEach((element) => {
        element.classList.remove('active');
      });
    }
  }
}
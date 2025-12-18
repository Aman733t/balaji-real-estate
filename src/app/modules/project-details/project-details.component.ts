import { Component } from '@angular/core';
import { PackagesModule } from '../../libs/packages/packages.module';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ScrolldownComponent } from '../../components/scrolldown/scrolldown.component';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [PackagesModule, HeaderComponent, FooterComponent, ScrolldownComponent],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {

  constructor() {

  }

  scroller() {
    let offset = -80;
    let element: any = document.getElementById("d-section-2");
    let scroolValue = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: scroolValue, behavior: 'smooth' })
  }

  ngAfterViewInit(): void {
    const items = document.querySelectorAll(".accordion button");

    function toggleAccordion(this: HTMLElement) {
      const itemToggle = this.getAttribute('aria-expanded');

      items.forEach(item => {
        item.setAttribute('aria-expanded', 'false');
      });

      if (itemToggle === 'false') {
        this.setAttribute('aria-expanded', 'true');
      }
    }

    items.forEach(item => {
      item.addEventListener('click', toggleAccordion);
    });
  }
}


import { Component, ViewChild, AfterViewInit, signal, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PackagesModule } from '../../libs/packages/packages.module';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ScrolldownComponent } from '../../components/scrolldown/scrolldown.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [PackagesModule, HeaderComponent, FooterComponent, ScrolldownComponent],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {
  public productId: string | null = null;
  public info: any = {};
  private routeSub: Subscription | undefined;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params: any) => {
      console.log(params);
    });
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
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


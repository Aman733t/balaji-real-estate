import {
  Component,
  ViewChildren,
  QueryList,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { PackagesModule } from '../../libs/packages/packages.module';
import { ScrolldownComponent } from '../../components/scrolldown/scrolldown.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    PackagesModule,
    ScrolldownComponent
  ],
  providers:[ApiService],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {

  /* ---------------------------------------------
   * 🔹 DOM REFERENCES FOR FLIP
   * --------------------------------------------- */
  @ViewChildren('card', { read: ElementRef })
  cards!: QueryList<ElementRef>;

  private lastPositions = new Map<number, DOMRect>();
  private pendingFlip = false;

  /* ---------------------------------------------
   * 🔹 FILTER STATE
   * --------------------------------------------- */
  public activeTab: string = 'All Projects';
  public projectTabs: string[] = ['All Projects', 'Residential', 'Commercial'];

  /* ---------------------------------------------
   * 🔹 FULL PROJECT DATA
   * --------------------------------------------- */
  public projectsArr: any[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api:ApiService
  ) { 
    this.projectsArr = this.api.getProjectMetaData();
  }

  /* ---------------------------------------------
   * 🔹 DOM READY HOOK (CRITICAL)
   * --------------------------------------------- */
  ngAfterViewInit() {
    this.cards.changes.subscribe(() => {
      if (this.pendingFlip) {
        this.animateFLIP();
        this.pendingFlip = false;
      }
    });
  }

  /* ---------------------------------------------
   * 🔹 FILTERED PROJECTS
   * --------------------------------------------- */
  get filteredProjects() {
    if (this.activeTab === 'All Projects') return this.projectsArr;
    return this.projectsArr.filter(
      p => p.property_type === this.activeTab
    );
  }

  /* ---------------------------------------------
   * 🔹 TAB CLICK HANDLER (FLIP FLOW)
   * --------------------------------------------- */
  selectTab(tab: string) {
    this.storePositions();   // 1️⃣ FIRST
    this.pendingFlip = true; // 2️⃣ FLAG
    this.activeTab = tab;    // 3️⃣ CHANGE DATA
  }

  /* ---------------------------------------------
   * 🔹 FLIP CORE
   * --------------------------------------------- */
  private storePositions() {
    this.lastPositions.clear();
    this.cards.forEach((card, index) => {
      this.lastPositions.set(
        index,
        card.nativeElement.getBoundingClientRect()
      );
    });
  }

  private animateFLIP() {
    const MAX_TRANSLATE = 120; // px – limits how far cards can "travel"

    const clamp = (value: number, limit: number) =>
      Math.max(Math.min(value, limit), -limit);

    this.cards.forEach((card, index) => {
      const el = card.nativeElement as HTMLElement;

      const newPos = el.getBoundingClientRect();
      const oldPos = this.lastPositions.get(index);
      if (!oldPos) return;

      // Calculate movement
      const dx = clamp(oldPos.left - newPos.left, MAX_TRANSLATE);
      const dy = clamp(oldPos.top - newPos.top, MAX_TRANSLATE);

      // Apply inverted transform
      el.style.transform = `translate(${dx}px, ${dy}px) scale(0.98)`;
      el.style.transition = 'none';

      // Play animation on next frame
      requestAnimationFrame(() => {
        el.style.transform = '';
        el.style.transition =
          `transform 750ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 40}ms`;
      });
    });
  }
  /* ---------------------------------------------
   * 🔹 TRACK BY (MANDATORY)
   * --------------------------------------------- */
  trackById(index: number, project: any) {
    return project.id;
  }

  /* ---------------------------------------------
   * 🔹 NAVIGATION
   * --------------------------------------------- */
  viewAllDetails(id: number) {
    this.router.navigate(['/projects/details', id]);
  }

  scroller() {
    const offset = -80;
    const el = document.getElementById('p-projects');
    if (!el) return;

    const top =
      el.getBoundingClientRect().top +
      window.pageYOffset +
      offset;

    window.scrollTo({ top, behavior: 'smooth' });
  }
}

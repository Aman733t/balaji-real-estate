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

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    PackagesModule,
    ScrolldownComponent
  ],
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
  activeTab: string = 'All Projects';
  projectTabs: string[] = ['All Projects', 'Residential', 'Commercial'];

  /* ---------------------------------------------
   * 🔹 FULL PROJECT DATA
   * --------------------------------------------- */
  projectsArr: any[] = [
    {
      id: 1,
      name: 'Shahrukhz Danube',
      hero_image: '../../assets/projects/Shahrukhz Danube/Shahrukhz Danube thumbnail.jpg',
      property_developer: 'Danube Properties',
      property_location: 'Dubai',
      property_type: 'Commercial'
    },
    {
      id: 2,
      name: 'Breeze By Danube',
      hero_image: '../../assets/projects/Breeze By Danube/Breeze by Danube thumbnail.jpg',
      property_developer: 'Danube Properties',
      property_location: 'Dubai',
      property_type: 'Residential'
    },
    {
      id: 3,
      name: 'Rajprabha',
      hero_image: '../../assets/projects/Rajprabha/Rajprabha thumbnail.jpg',
      property_developer: 'Rajprabha',
      property_location: 'Vasai',
      property_type: 'Commercial'
    },
    {
      id: 4,
      name: 'Fortune One',
      hero_image: '../../assets/projects/Fortune One/Fortune One Thumbnail.jpg',
      property_developer: 'Fortune Group',
      property_location: 'Vapi',
      property_type: 'Commercial'
    },
    {
      id: 5,
      name: 'Fortune Landmark',
      hero_image: '../../assets/projects/Fortune Landmark/Fortune Landmark Thumbnail.jpg',
      property_developer: 'Fortune Group',
      property_location: 'Vapi',
      property_type: 'Commercial'
    },
    {
      id: 6,
      name: 'Fortune Nest',
      hero_image: '../../assets/projects/Fortune Nest/Fortune Nest thumbnail.jpg',
      property_developer: 'Fortune Group',
      property_location: 'Valsad',
      property_type: 'Residential'
    },
    {
      id: 7,
      name: 'Fortune Siddhivinayak',
      hero_image: '../../assets/projects/Fortune Siddhivinayak/Fortune Siddhivinayak thumbnail.jpg',
      property_developer: 'Fortune Group',
      property_location: 'Valsad',
      property_type: 'Commercial'
    },
    {
      id: 8,
      name: 'Ganesh Arcade',
      hero_image: '../../assets/projects/Ganesh Arcade/Ganesh Arcade thumbnail.jpg',
      property_developer: 'Fortune Group',
      property_location: 'Daman & Diu',
      property_type: 'Commercial'
    },
    {
      id: 9,
      name: 'Fortune Skyes',
      hero_image: '../../assets/projects/Fortune Skyes/Fortune Skyes thumbnail.jpg',
      property_developer: 'Fortune Group',
      property_location: 'Daman',
      property_type: 'Residential'
    },
    {
      id: 10,
      name: 'Fortune DP Plaza',
      hero_image: '../../assets/projects/Fortune DP Plaza/Fortune DP Plaza thumbnail.jpg',
      property_developer: 'Fortune Group',
      property_location: 'Daman',
      property_type: 'Commercial'
    },
    {
      id: 11,
      name: 'Fortune Chandranagari',
      hero_image: '../../assets/projects/Fortune Chandranagari/Fortune Chandranagari thumbnail.jpg',
      property_developer: 'Fortune Group',
      property_location: 'Vapi',
      property_type: 'Residential'
    },
    {
      id: 12,
      name: 'Green Ville',
      hero_image: '../../assets/projects/Green Ville/Green Ville thumbnail.jpg',
      property_developer: 'Fortune Group',
      property_location: 'Daman',
      property_type: 'Residential'
    },
    {
      id: 13,
      name: 'Fortune Lake Home',
      hero_image: '../../assets/projects/Fortune Lake Home/Fortune Lake Home thumbnail.jpg',
      property_developer: 'Fortune Group',
      property_location: 'Umargaon Valsad',
      property_type: 'Residential'
    },
    {
      id: 14,
      name: 'Sungate Infra Bunglows',
      hero_image: '../../assets/projects/Sungate Infra Bunglows/Sungate Infra Bunglows thumbnail.jpg',
      property_developer: 'Fortune Group',
      property_location: 'Vapi',
      property_type: 'Residential'
    },
    {
      id: 15,
      name: 'Sungate Apartments',
      hero_image: '../../assets/projects/Sungate Apartments/Sungate Apartments thumbnail.jpg',
      property_developer: 'Fortune Group',
      property_location: 'Vapi',
      property_type: 'Residential'
    },
    {
      id: 16,
      name: 'Ruby',
      hero_image: '../../assets/projects/Ruby/Ruby thumbnail.jpg',
      property_developer: 'Shrisai Akar Civilinfra',
      property_location: 'Borivali',
      property_type: 'Residential'
    },
    {
      id: 17,
      name: 'Sigma Amber',
      hero_image: '../../assets/projects/Sigma Amber/Sigma Amber thumbnail.jpg',
      property_developer: 'Sigma',
      property_location: 'Charkop',
      property_type: 'Residential'
    },
    // {
    //   id: 18,
    //   name: 'Gauri Excellency',
    //   hero_image: '../../assets/projects/Gauri Excellency thumbnail.jpg',
    //   property_developer: 'Gauri Group',
    //   property_location: 'Kandivali West',
    //   property_type: 'Residential'
    // },

  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

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

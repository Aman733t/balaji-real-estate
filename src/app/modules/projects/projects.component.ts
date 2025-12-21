import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { PackagesModule } from '../../libs/packages/packages.module';
import { ScrolldownComponent } from "../../components/scrolldown/scrolldown.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PackagesModule, ScrolldownComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  public projectsArr: any = [
    {
      id: 1,
      name: 'Shahrukhz Danube',
      hero_image: '../../assets/projects/Shahrukhz Danube thumbnail.jpg',
      property_developer: 'Danube Properties',
      property_location: 'Dubai',
      property_type: 'Commercial'
    }, {
      id: 2,
      name: 'Breeze By Danube',
      hero_image: '../../assets/projects/Breeze by Danube thumbnail.jpg',
      property_developer: 'Danube Properties',
      property_location: 'Dubai',
      property_type: 'Residential'
    }, {
      id: 3,
      name: 'Fortune One',
      hero_image: '../../assets/projects/Fortune One Thumbnail.jpg',
      property_developer: 'Fortune Group',
      property_location: 'Vapi',
      property_type: 'Commercial'
    }, {
      id: 4,
      name: 'Fortune Landmark',
      hero_image: '../../assets/projects/Fortune Landmark Thumbnail.jpg',
      property_developer: 'Fortune Group',
      property_location: 'Vapi',
      property_type: 'Commercial'
    }, {
      id: 5,
      name: 'Fortune Nest',
      hero_image: '../../assets/projects/Fortune Nest thumbnail.jpg',
      property_developer: 'Fortune Group',
      property_location: 'Valsad',
      property_type: 'Residential'
    }, {
      id: 6,
      name: 'Fortune Siddhivinayak',
      hero_image: '../../assets/projects/Fortune Siddhivinayak thumbnail.jpg',
      property_developer: 'Fortune Group',
      property_location: 'Valsad',
      property_type: 'Commercial'
    },
    {
      id: 6,
      name: 'Fortune Siddhivinayak',
      hero_image: '../../assets/projects/Fortune Siddhivinayak thumbnail.jpg',
      property_developer: 'Fortune Group',
      property_location: 'Valsad',
      property_type: 'Commercial'
    },
    {
      id: 7,
      name: 'Ganesh Arcade',
      hero_image: '../../assets/projects/7. Ganesh Arcade thumbnail.jpg',
      property_developer: 'Fortune Group',
      property_location: 'Daman & Diu',
      property_type: 'Commercial'
    }, {
      id: 8,
      name: 'Fortune Skyes',
      hero_image: '../../assets/projects/8. Fortune Skyes thumbnail.jpg',
      property_developer: 'Fortune Group',
      property_location: 'Daman',
      property_type: 'Residential'
    }, {
      id: 9,
      name: 'Fortune DP Plaza',
      hero_image: '../../assets/projects/9. Fortune DP Plaza thumbnail.jpg',
      property_developer: 'Fortune Group',
      property_location: 'Daman',
      property_type: 'Commercial'
    }, {
      id: 10,
      name: 'Fortune Chandranagari',
      hero_image: '../../assets/projects/10. Fortune Chandranagari Vapi thumbnail.jpg',
      property_developer: 'Fortune Group',
      property_location: 'Vapi',
      property_type: 'Residential'
    }, {
      id: 11,
      name: 'Green Ville',
      hero_image: '../../assets/projects/11. Green Ville Fortune Group thumbnail.jpg',
      property_developer: 'Fortune Group',
      property_location: 'Daman',
      property_type: 'Residential'
    }, {
      id: 12,
      name: 'Fortune Lake Home',
      hero_image: '../../assets/projects/12. Fortune Lake Home thumbnail.jpg',
      property_developer: 'Fortune Group',
      property_location: 'Umargaon Valsad',
      property_type: 'Residential'
    }, {
      id: 13,
      name: 'Sungate Infra Bunglows',
      hero_image: '../../assets/projects/13. Sungate Infra Bunglows thumbnail.jpg',
      property_developer: 'Fortune Group',
      property_location: 'Vapi',
      property_type: 'Residential'
    }, {
      id: 14,
      name: 'Sungate Apartments',
      hero_image: '../../assets/projects/14. Sungate Apartments thumbnail.jpg',
      property_developer: 'Fortune Group',
      property_location: 'Vapi',
      property_type: 'Residential'
    }, {
      id: 15,
      name: 'Gauri Excellency',
      hero_image: '../../assets/projects/15. Gauri Excellency thumbnail.jpg',
      property_developer: 'Gauri Group',
      property_location: 'Kandivali West',
      property_type: 'Residential'
    }, {
      id: 16,
      name: 'Green Ville by Emaar',
      hero_image: '../../assets/projects/16. Green Ville by Emaar thumbnail.jpg',
      property_developer: 'Emaar Group',
      property_location: 'Dubai',
      property_type: 'Residential'
    }, {
      id: 17,
      name: 'Avena ',
      hero_image: '../../assets/projects/17. Avena thumbnail.jpg',
      property_developer: 'Emaar Group',
      property_location: 'Dubai',
      property_type: 'Residentiall'
    }, {
      id: 18,
      name: 'Velora 2',
      hero_image: '../../assets/projects/18. Velora 2 thumbnail 2.jpg',
      property_developer: 'Emaar Group',
      property_location: 'Dubai',
      property_type: 'Residential'
    }, {
      id: 19,
      name: 'Greenridge',
      hero_image: '../../assets/projects/19. Greenridge thumbnail 1.jpg',
      property_developer: 'Emaar Group',
      property_location: 'Dubai',
      property_type: 'Residential'
    }, {
      id: 20,
      name: 'Vida Residences',
      hero_image: '../../assets/projects/20. Vida Residences thumbnail.jpg',
      property_developer: 'Emaar Group',
      property_location: 'Dubai',
      property_type: 'Residential'
    }, {
      id: 21,
      name: 'Address The Bay Summary',
      hero_image: '../../assets/projects/21. Address-The Bay Summary thumbnail 1.jpg',
      property_developer: 'Emaar Group',
      property_location: 'Dubai',
      property_type: 'Commercial'
    },
  ]

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  scroller() {
    let offset = -80;
    let element: any = document.getElementById("p-projects");
    let scroolValue = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: scroolValue, behavior: 'smooth' })
  }

  viewAllDetails(id: any) {
    this.router.navigate(['/projects/details', id])
  }

}

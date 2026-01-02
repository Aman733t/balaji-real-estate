import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { PackagesModule } from '../../libs/packages/packages.module';
import { ScrolldownComponent } from "../../components/scrolldown/scrolldown.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PackagesModule, ScrolldownComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public projectsArr: any = [
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
  ];

  constructor() {

  }

  scroller() {
    let offset = 0;
    let element: any = document.getElementById("h-section2");
    let scroolValue = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: scroolValue, behavior: 'smooth' })
  }
}

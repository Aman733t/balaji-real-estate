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
      hero_image: '../../assets/projects/shahrukhz_danube/shahrukhz_danube_thumbnail.jpg',
      property_developer: 'Danube Properties',
      property_location: 'Dubai',
      property_type: 'Commercial'
    },
    {
      id: 2,
      name: 'Breeze By Danube',
      hero_image: '../../assets/projects/breeze_by_danube/breeze_by_danube_thumbnail.jpg',
      property_developer: 'Danube Properties',
      property_location: 'Dubai',
      property_type: 'Residential'
    },
    {
      id: 3,
      name: 'Rajprabha',
      hero_image: '../../assets/projects/rajprabha/rajprabha_thumbnail.jpg',
      property_developer: 'Rajprabha',
      property_location: 'Vasai',
      property_type: 'Commercial'
    },
    {
      id: 4,
      name: 'Fortune One',
      hero_image: '../../assets/projects/fortune_one/fortune_one_thumbnail.jpg',
      property_developer: 'Fortune Group',
      property_location: 'Vapi',
      property_type: 'Commercial'
    },
    {
      id: 5,
      name: 'Fortune Landmark',
      hero_image: '../../assets/projects/fortune_landmark/fortune_landmark_thumbnail.jpg',
      property_developer: 'Fortune Group',
      property_location: 'Vapi',
      property_type: 'Commercial'
    },
    {
      id: 6,
      name: 'Fortune Nest',
      hero_image: '../../assets/projects/fortune_nest/fortune_nest_thumbnail.jpg',
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

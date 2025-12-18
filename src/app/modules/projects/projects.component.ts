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

  public projectsArr:any = [
    {
      id:1,
      name:'Shahrukhz Danube',
      hero_image:'../../assets/projects/Shahrukhz Danube thumbnail.jpg',
      property_developer:'Danube Properties',
      property_location:'Dubai',
      property_type:'Commercial'
    },{
      id:2,
      name:'Breeze By Danube',
      hero_image:'../../assets/projects/Breeze by Danube thumbnail.jpg',
      property_developer:'Danube Properties',
      property_location:'Dubai',
      property_type:'Residential'
    },{
      id:3,
      name:'Fortune One',
      hero_image:'../../assets/projects/Fortune One Thumbnail.jpg',
      property_developer:'Fortune Group',
      property_location:'Vapi',
      property_type:'Commercial'
    },{
      id:4,
      name:'Fortune Landmark',
      hero_image:'../../assets/projects/Fortune Landmark Thumbnail.jpg',
      property_developer:'Fortune Group',
      property_location:'Vapi',
      property_type:'Commercial'
    },{
      id:5,
      name:'Fortune Nest',
      hero_image:'../../assets/projects/Fortune Nest thumbnail.jpg',
      property_developer:'Fortune Group',
      property_location:'Valsad',
      property_type:'Residential'
    },{
      id:6,
      name:'Fortune Siddhivinayak',
      hero_image:'../../assets/projects/Fortune Siddhivinayak thumbnail.jpg',
      property_developer:'Fortune Group',
      property_location:'Valsad',
      property_type:'Commercial'
    }
  ]

  constructor(private router: Router, private route: ActivatedRoute){
    
  }

  scroller() {
    let offset = 0;
    let element:any = document.getElementById("h-section3");
    let scroolValue = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: scroolValue, behavior: 'smooth' })
  }

  viewAllDetails(id:any){
    this.router.navigate(['/projects/details',id])
  }

}

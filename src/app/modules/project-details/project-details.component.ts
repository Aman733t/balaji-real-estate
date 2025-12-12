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

  constructor(){

  }

  scroller() {
    let offset = 0;
    let element: any = document.getElementById("h-section3");
    let scroolValue = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: scroolValue, behavior: 'smooth' })
  }
}

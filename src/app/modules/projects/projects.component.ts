import { Component } from '@angular/core';
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

  constructor(){
    
  }

  scroller() {
    let offset = 0;
    let element:any = document.getElementById("h-section3");
    let scroolValue = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: scroolValue, behavior: 'smooth' })
  }


}

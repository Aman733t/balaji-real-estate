import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { PackagesModule } from '../../libs/packages/packages.module';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PackagesModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  constructor() {

  }

  scroller() {
    let offset = 0;
    let element: any = document.getElementById("h-section3");
    let scroolValue = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: scroolValue, behavior: 'smooth' })
  }
}

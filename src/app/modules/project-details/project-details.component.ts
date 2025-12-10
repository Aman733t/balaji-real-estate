import { Component } from '@angular/core';
import { PackagesModule } from '../../libs/packages/packages.module';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [PackagesModule, HeaderComponent, FooterComponent],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {

}

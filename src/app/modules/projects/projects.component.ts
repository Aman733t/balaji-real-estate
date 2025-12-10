import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { PackagesModule } from '../../libs/packages/packages.module';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,PackagesModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { PackagesModule } from '../../libs/packages/packages.module';
import { ScrolldownComponent } from "../../components/scrolldown/scrolldown.component";
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, PackagesModule, ScrolldownComponent],
  providers: [ApiService],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  public info: any = {};

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) {

  }

  scroller() {
    let offset = -80;
    let element: any = document.getElementById("c-section-2");
    let scroolValue = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: scroolValue, behavior: 'smooth' })
  }

  sendInquiryInfo() {
    if(Object.keys(this.info).length > 0){
      this.api.trackInquiry(this.info).subscribe((response:any)=>{
        if(response['code'] == 1){
          this.info = {}
        }
      })
    }
  }

}

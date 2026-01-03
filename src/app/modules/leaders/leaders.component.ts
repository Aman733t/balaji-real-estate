import { Component, ViewChild, AfterViewInit, signal, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PackagesModule } from '../../libs/packages/packages.module';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ScrolldownComponent } from '../../components/scrolldown/scrolldown.component';
import { Subscription } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-leaders',
  standalone: true,
  imports: [PackagesModule, HeaderComponent, FooterComponent, ScrolldownComponent],
  providers: [ApiService],
  templateUrl: './leaders.component.html',
  styleUrl: './leaders.component.scss'
})
export class LeadersComponent {
  public info: any = {};
  private routeSub: Subscription | undefined;
  public leaderInfo: any = {};
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) {

  }

  ngOnInit() {
    this.topView();
    this.routeSub = this.route.params.subscribe((params: any) => {
      if (params['id']) {
        let leaderArr = this.api.getLeadersMetaData();
        leaderArr.forEach((leader: any) => {
          if (leader['id'] == params['id']) {
            this.leaderInfo = leader
          }
        })
      }
    });
  }

  topView(){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }


  scroller() {
    let offset = -80;
    let element: any = document.getElementById("c-section-2");
    let scroolValue = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: scroolValue, behavior: 'smooth' })
  }

  professionalOverview(text: any) {
    return text.split('\n').map((line: any) => line.trim()).join('\n');
  }
}

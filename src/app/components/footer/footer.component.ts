import { Component } from '@angular/core';
import { PackagesModule } from '../../libs/packages/packages.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [PackagesModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public socialLinks: any = {
    'instagram': 'https://www.instagram.com/balajireal14/',
    'youtube': 'https://www.youtube.com/',
    'linkedin': 'https://www.linkedin.com/in/',
    'facebook': 'https://www.facebook.com/profile.php?id=61584399387989'
  }

  constructor() {

  }

  goToLink(type: any) {
    if (type) {
      window.open(this.socialLinks[type], '_blank');
    }
  }

  goToWhatsapp() {
    // Phone number you want to send the message to
    var phoneNumber = "9821294212";
    // Message you want to send
    var message = "Hello..";
    // Encode the phone number and message for URL
    var encodedPhoneNumber = encodeURIComponent(phoneNumber);
    var encodedMessage = encodeURIComponent(message);
    // Construct the URL for sending the message via WhatsApp
    var whatsappUrl = "https://wa.me/" + encodedPhoneNumber + "?text=" + encodedMessage;
    // Redirect the user to WhatsApp
    window.location.href = whatsappUrl;
  }
}

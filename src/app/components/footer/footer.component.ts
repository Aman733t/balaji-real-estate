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
    'instagram': 'https://www.instagram.com/officialdeecreations/',
    'youtube': 'https://www.youtube.com/@deecreationsofficial',
    'linkedin': 'https://www.linkedin.com/in/deecreationsofficial/',
    'facebook': 'https://www.facebook.com/officialdeecreations'
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
    var phoneNumber = "7304564563";
    // Message you want to send
    var message = "Hello there..";
    // Encode the phone number and message for URL
    var encodedPhoneNumber = encodeURIComponent(phoneNumber);
    var encodedMessage = encodeURIComponent(message);
    // Construct the URL for sending the message via WhatsApp
    var whatsappUrl = "https://wa.me/" + encodedPhoneNumber + "?text=" + encodedMessage;
    // Redirect the user to WhatsApp
    window.location.href = whatsappUrl;
  }
}

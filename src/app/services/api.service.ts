import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  public headers: HttpHeaders = new HttpHeaders()
  // public baseUrl: string = 'https://salesfactory.in/track/';
  public baseUrl:string = 'http://localhost:9002/track/'
  private _refreshNeeded = new Subject<void>();
  private biz_id = '';
  
  constructor(private http: HttpClient) { 
   this.http.get('assets/projects.json').subscribe((data:any) => {
      this.biz_id = data['business']
    }); 
  }

  refreshNeeded() {
    return this._refreshNeeded;
  }

  getHeaders() {
    let headers: HttpHeaders = new HttpHeaders();
    let biz_id = this.biz_id;
    headers = headers.append('Cache-Control', 'no-cache');
    headers = headers.append('Pragma', 'no-cache');
    headers = headers.append('Expires', '0');
    headers = headers.append('biz-id', biz_id);
    return headers;
  }

  getProjectMetaData() {
    return [
      {
        id: 1,
        name: 'Shahrukhz Danube',
        thumbnail_image: '../../assets/projects/shahrukhz_danube/shahrukhz_danube_thumbnail.jpg',
        hero_image: '../../assets/projects/shahrukhz_danube/shahrukhz_danube_hero.jpg',
        property_developer: 'Danube Properties',
        property_location: 'Dubai',
        property_type: 'Commercial',
        brochure_download: "",
        property_intro_content: `Rising on the iconic Sheikh Zayed Road, this premium 55-storey office tower offers unmatched visibility and seamless access in the heart of Dubai.
        Inspired by the self-made journey of Shahrukh Khan, Shahrukhz is a tribute to those who script their own destiny — a place for business leaders, founders and visionaries to build more than companies, to build empires.
        With world-class amenities curated for productivity, prestige and wellbeing…every detail elevates the way you work.`,
        faq: [
          {
            "id": 1,
            "question": "Real Estate Developer In Dubai",
            "ans": "Are you looking for luxury living with a leading real estate developer in Dubai? In the ever-evolving landscape of Dubai’s real estate market, choosing the right partner for your investment is paramount. As one of the top three real estate developers in Dubai, Danube Properties stands as a beacon of trust, quality, and innovation. Founded in 1993 by Mr. Rizwan Sajan, Danube Properties has grown into a formidable force in the UAE’s real estate sector, offering a diverse range of properties for sale in Dubai that cater to the needs of its global clientele. Specializing in residential homes, commercial spaces, mixed-use developments, and premium luxury estates, Danube Properties caters to a broad spectrum of needs and preferences."
          }, {
            "id": 2,
            "question": "Why Choose Danube Properties?",
            "ans": "Selecting a real estate developer in Dubai is more than just a financial decision; it’s about finding a company that aligns with your vision and goals. Danube Properties has carved out a reputation for delivering high-quality developments on time, ensuring that your investment is secure and fruitful. With over three decades of experience in the industry, the company has consistently met the expectations of its customers through exceptional quality, and prime locations. Danube Properties is particularly known for pioneering the 1% monthly payment plan with 0% interest and up to 80 months payment plan, making premium property ownership accessible to a wider audience. This approach, combined with over 40 world class amenities offered in their developments, positions Danube as a leader in providing not just properties, but a comprehensive lifestyle. Additionally, a wide range of options cater to different preferences and budgets, ensuring a high return on investment. Danube Properties offers a new standard of living with spacious, fully furnished homes designed for modern lifestyles. These modern homes are equipped with exquisite materials and interiors, providing both luxury and comfort."
          }, {
            "id": 3,
            "question": "A Trusted Name in Real Estate",
            "ans": "Danube Properties stands out not only for its exceptional developments but also for its customer-centric approach. The company’s philosophy is centered around delivering value through quality and building long-lasting relationships with its clients."
          }, {
            "id": 4,
            "question": "Investment Opportunities in Dubai",
            "ans": "Dubai’s real estate market is booming, with properties for sale in Dubai attracting investors from around the world. The city’s dynamic economy, and attractive lifestyle make it a prime destination for real estate investment. Whether you’re looking for a residential home, commercial space, or luxury estate. Don’t wait to invest with Danube Properties today."
          }, {
            "id": 5,
            "question": "Danube Properties Impressive Portfolio",
            "ans": "Danube Properties has launched 32 projects, successfully delivering 16, with another 16 currently in various stages of construction. Each project showcases exceptional construction quality, state-of-the-art equipment, and top-tier home interior finishes. These projects include Pearlz, Jewelz, Wavez, Eleganz, Olivz, Elz, Lawnz, Bayz, Miraclz, Resortz, Glamz, Starz, Glitz 3, Glitz 2, Glitz 1, and Dreamz. Danube’s developments are designed to offer a range from affordable to premium luxury, attracting significant interest from a diverse clientele. Since its inception, Danube Properties’ ventures have achieved remarkable success. The combination of attractive payment plans, strategic locations, and an array of modern amenities has made their properties highly desirable. Currently, Danube Properties holds an impressive book value with construction spanning over 25.5 million square feet. Their projects continue to set new standards in the real estate market, delivering exceptional value and quality to their customers."
          }
        ],
        project_image: [
          "../../assets/projects/shahrukhz_danube/shahrukhz_danube_page_01.jpg",
          "../../assets/projects/shahrukhz_danube/shahrukhz_danube_page_02.jpg",
          "../../assets/projects/shahrukhz_danube/shahrukhz_danube_page_03.jpg",
          "../../assets/projects/shahrukhz_danube/shahrukhz_danube_page_04.jpg",
          "../../assets/projects/shahrukhz_danube/shahrukhz_danube_page_05.jpg",
          "../../assets/projects/shahrukhz_danube/shahrukhz_danube_page_06.jpg",
          "../../assets/projects/shahrukhz_danube/shahrukhz_danube_page_07.jpg",
          "../../assets/projects/shahrukhz_danube/shahrukhz_danube_page_08.jpg",
          "../../assets/projects/shahrukhz_danube/shahrukhz_danube_page_09.jpg",
          "../../assets/projects/shahrukhz_danube/shahrukhz_danube_page_10.jpg",
          "../../assets/projects/shahrukhz_danube/shahrukhz_danube_page_11.jpg",
          "../../assets/projects/shahrukhz_danube/shahrukhz_danube_page_12.jpg",
          "../../assets/projects/shahrukhz_danube/shahrukhz_danube_page_13.jpg",
          "../../assets/projects/shahrukhz_danube/shahrukhz_danube_page_14.jpg",
          "../../assets/projects/shahrukhz_danube/shahrukhz_danube_page_15.jpg",
          "../../assets/projects/shahrukhz_danube/shahrukhz_danube_page_16.jpg",
          "../../assets/projects/shahrukhz_danube/shahrukhz_danube_page_17.jpg",
          "../../assets/projects/shahrukhz_danube/shahrukhz_danube_page_18.jpg",
          "../../assets/projects/shahrukhz_danube/shahrukhz_danube_page_19.jpg",
          "../../assets/projects/shahrukhz_danube/shahrukhz_danube_page_20.jpg",
          "../../assets/projects/shahrukhz_danube/shahrukhz_danube_page_21.jpg",
          "../../assets/projects/shahrukhz_danube/shahrukhz_danube_page_22.jpg",
          "../../assets/projects/shahrukhz_danube/shahrukhz_danube_page_23.jpg",
          "../../assets/projects/shahrukhz_danube/shahrukhz_danube_page_24.jpg",
          "../../assets/projects/shahrukhz_danube/shahrukhz_danube_page_25.jpg",
          "../../assets/projects/shahrukhz_danube/shahrukhz_danube_page_26.jpg",
          "../../assets/projects/shahrukhz_danube/shahrukhz_danube_page_27.jpg",
          "../../assets/projects/shahrukhz_danube/shahrukhz_danube_page_28.jpg",
          "../../assets/projects/shahrukhz_danube/shahrukhz_danube_page_29.jpg",
          "../../assets/projects/shahrukhz_danube/shahrukhz_danube_page_30.jpg"
        ]
      },
      {
        id: 2,
        name: 'Breeze By Danube',
        thumbnail_image: '../../assets/projects/breeze_by_danube/breeze_by_danube_thumbnail.jpg',
        hero_image: '../../assets/projects/breeze_by_danube/breeze_by_danube_hero.jpg',
        property_developer: 'Danube Properties',
        property_location: 'Dubai',
        property_type: 'Residential',
        brochure_download: "",
        property_intro_content: `Breez by Danube is a premium 60-floor waterfront residential tower in Dubai Maritime City. Inspired by seaside serenity and elevated living, Breez offers Fully Furnished Oceanfront Homes with over 40+ resort-style amenities for a lifestyle that flows as effortlessly as its name.

More than just a residence, Breez is your invitation to experience a life where the city’s pulse meets the calm of the sea.

WHY DUBAI MARITIME CITY?
• 2 Mins Port Rashid Boat Station
• 3 Mins Dubai Cruise Terminal 2
• 8 Mins Gold Souk & Jumeirah Beach
• 8 Mins Dubai World Trade Center
• 10 Mins Burj Khalifa
• 15 Mins Dubai International Airport`,
        faq: [],
        project_image: [
          "../../assets/projects/breeze_by_danube/breeze_by_danube_page_02.jpg",
          "../../assets/projects/breeze_by_danube/breeze_by_danube_page_03.jpg",
          "../../assets/projects/breeze_by_danube/breeze_by_danube_page_04.jpg",
          "../../assets/projects/breeze_by_danube/breeze_by_danube_page_05.jpg",
          "../../assets/projects/breeze_by_danube/breeze_by_danube_page_06.jpg",
          "../../assets/projects/breeze_by_danube/breeze_by_danube_page_07.jpg",
          "../../assets/projects/breeze_by_danube/breeze_by_danube_page_08.jpg",
          "../../assets/projects/breeze_by_danube/breeze_by_danube_page_09.jpg",
          "../../assets/projects/breeze_by_danube/breeze_by_danube_page_10.jpg",
          "../../assets/projects/breeze_by_danube/breeze_by_danube_page_11.jpg",
          "../../assets/projects/breeze_by_danube/breeze_by_danube_page_12.jpg",
          "../../assets/projects/breeze_by_danube/breeze_by_danube_page_13.jpg",
          "../../assets/projects/breeze_by_danube/breeze_by_danube_page_14.jpg",
          "../../assets/projects/breeze_by_danube/breeze_by_danube_page_15.jpg",
          "../../assets/projects/breeze_by_danube/breeze_by_danube_page_16.jpg",
          "../../assets/projects/breeze_by_danube/breeze_by_danube_page_17.jpg",
          "../../assets/projects/breeze_by_danube/breeze_by_danube_page_18.jpg",
          "../../assets/projects/breeze_by_danube/breeze_by_danube_page_19.jpg",
          "../../assets/projects/breeze_by_danube/breeze_by_danube_page_20.jpg",
          "../../assets/projects/breeze_by_danube/breeze_by_danube_page_21.jpg",
          "../../assets/projects/breeze_by_danube/breeze_by_danube_page_22.jpg",
          "../../assets/projects/breeze_by_danube/breeze_by_danube_page_23.jpg",
          "../../assets/projects/breeze_by_danube/breeze_by_danube_page_24.jpg",
          "../../assets/projects/breeze_by_danube/breeze_by_danube_page_25.jpg",
          "../../assets/projects/breeze_by_danube/breeze_by_danube_page_26.jpg",
          "../../assets/projects/breeze_by_danube/breeze_by_danube_page_27.jpg",
          "../../assets/projects/breeze_by_danube/breeze_by_danube_page_28.jpg"
        ]
      },
      {
        id: 3,
        name: 'Rajprabha',
        thumbnail_image: '../../assets/projects/rajprabha/rajprabha_thumbnail.jpg',
        hero_image: '../../assets/projects/rajprabha/rajprabha_thumbnail.jpg',
        property_developer: 'Rajprabha',
        property_location: 'Vasai',
        property_type: 'Commercial',
        brochure_download: "",
        property_intro_content: `Rajprabha Developers Pvt Ltd professional in the real estate sector. They are a recognized builder in the city. With a full-fledged team of construction experts they have successfully constructed and rebuild many properties in the real estate sector. Whether it is a commercial property or residential building, they render equal services at pocket-friendly market rates.`,
        faq: [],
        project_image: []
      },
      {
        id: 4,
        name: 'Fortune One',
        thumbnail_image: '../../assets/projects/fortune_one/fortune_one_thumbnail.jpg',
        hero_image: '../../assets/projects/fortune_one/fortune_one_hero.jpg',
        property_developer: 'Fortune Group',
        property_location: 'Vapi',
        property_type: 'Commercial',
        brochure_download: "",
        property_intro_content: `Fortune One is a premier commercial landmark designed to redefine the business landscape of Vapi. Strategically located near the V.I.A. road, it offers high-visibility retail spaces and modern offices.

What you need to know:
• Business Hub: Designed with a grand glass facade for maximum brand visibility.
• Connectivity: Just 10 minutes from Vapi Railway Station and 5 minutes from NH-48.
• Best For: Investors looking for high rental yields from corporate tenants.`,
        faq: [],
        project_image: [
          "../../assets/projects/fortune_one/fortune_one_1.png",
          "../../assets/projects/fortune_one/fortune_one_2.jpg",
          "../../assets/projects/fortune_one/fortune_one_3.JPG",
        ]
      },
      {
        id: 5,
        name: 'Fortune Landmark',
        thumbnail_image: '../../assets/projects/fortune_landmark/fortune_landmark_thumbnail.jpg',
        hero_image: '../../assets/projects/fortune_landmark/fortune_landmark_thumbnail.jpg',
        property_developer: 'Fortune Group',
        property_location: 'Vapi',
        property_type: 'Commercial',
        brochure_download: "",
        property_intro_content: `Fortune Landmark stands as a completed commercial hub in the GIDC Phase 2 area of Vapi. It provides ready-to-move office and retail units for immediate business operations.

What you need to know:
• Immediate Possession: Perfect for businesses that need to start today.
• Footfall: Located in a high-density area with a steady stream of customers.
• Facilities: Ample basement parking and 24/7 security management.`,
        faq: [],
        project_image: [
          "../../assets/projects/fortune_landmark/fortune_landmark_1.webp",
          "../../assets/projects/fortune_landmark/fortune_landmark_2.jpg",
        ]
      },
      {
        id: 6,
        name: 'Fortune Nest',
        thumbnail_image: '../../assets/projects/fortune_nest/fortune_nest_thumbnail.jpg',
        hero_image: '../../assets/projects/fortune_nest/fortune_nest_hero.jpg',
        property_developer: 'Fortune Group',
        property_location: 'Valsad',
        property_type: 'Residential',
        brochure_download: "",
        property_intro_content: `Fortune Nest offers a serene residential experience in Valsad, focusing on modern row houses and apartments with a gated community feel.

What you need to know:
• Lifestyle: Includes a dedicated children’s play area and landscaped gardens.
• Security: Fully fenced perimeter with CCTV surveillance.
• Proximity: Located near top-tier schools like Vallabh Ashram.`,
        faq: [],
        project_image: [
          "../../assets/projects/fortune_nest/fortune_nest_9.jpg",
          "../../assets/projects/fortune_nest/fortune_nest_12.jpg",
          "../../assets/projects/fortune_nest/fortune_nest_15.jpg",
          "../../assets/projects/fortune_nest/fortune_nest_16.jpg"
        ]
      },
      {
        id: 7,
        name: 'Fortune Siddhivinayak',
        thumbnail_image: '../../assets/projects/fortune_siddhivinayak/fortune_siddhivinayak_thumbnail.jpg',
        hero_image: '../../assets/projects/fortune_siddhivinayak/fortune_siddhivinayak_hero.jpg',
        property_developer: 'Fortune Group',
        property_location: 'Valsad',
        property_type: 'Commercial',
        brochure_download: "",
        property_intro_content: `Fortune Siddhivinayak is a mixed-use project in Chala, offering a blend of residential and commercial opportunities at an affordable price point.

What you need to know:
• Smart Design: Vastu-compliant units focusing on natural light.
• Local Access: Walking distance to Mamta Hospital and major supermarkets.
• Future Value: Located in the fastest-growing residential pocket of Vapi/Valsad.`,
        faq: [],
        project_image: [
          "../../assets/projects/fortune_siddhivinayak/fortune_siddhivinayak_2.jpg"
        ]
      },
      {
        id: 8,
        name: 'Ganesh Arcade',
        thumbnail_image: '../../assets/projects/ganesh_arcade/ganesh_arcade_thumbnail.jpg',
        hero_image: '../../assets/projects/ganesh_arcade/ganesh_arcade_thumbnail.jpg',
        property_developer: 'Fortune Group',
        property_location: 'Daman & Diu',
        property_type: 'Commercial',
        brochure_download: "",
        property_intro_content: `Ganesh Arcade is a strategically positioned commercial development in Daman designed to capture booming tourism and local trade.

What you need to know:
• Tourist Location: Situated on the main transit route to the beaches.
• Architecture: Modern open-plan layouts for easy customization.
• Advantage: Daman’s tax-friendly environment makes this highly profitable.`,
        faq: [],
        project_image: [
          "../../assets/projects/ganesh_arcade/ganesh_arcade_images.jpg"
        ]
      },
      {
        id: 9,
        name: 'Fortune Skyes',
        thumbnail_image: '../../assets/projects/fortune_skyes/fortune_skyes_thumbnail.jpg',
        hero_image: '../../assets/projects/fortune_skyes/fortune_skyes_thumbnail.jpg',
        property_developer: 'Fortune Group',
        property_location: 'Daman',
        property_type: 'Residential',
        brochure_download: "",
        property_intro_content: `A boutique residential retreat near Devka Beach, Fortune Skyes is designed for those seeking a vacation home or investment rental.

What you need to know:
• Coastal Living: Only 5 minutes from the Devka Beach promenade.
• Privacy: Low-density project with fewer units per floor.
• Investment: High potential for "Staycation" Airbnb-style rentals.`,
        faq: [],
        project_image: [
          "../../assets/projects/fortune_skyes/fortune_skyes_images.jpg"
        ]
      },
      {
        id: 10,
        name: 'Fortune DP Plaza',
        thumbnail_image: '../../assets/projects/fortune_dp_plaza/fortune_dp_plaza_thumbnail.jpg',
        hero_image: '../../assets/projects/fortune_dp_plaza/fortune_dp_plaza_hero.jpg',
        property_developer: 'Fortune Group',
        property_location: 'Daman',
        property_type: 'Commercial',
        brochure_download: "",
        property_intro_content: `Fortune DP Plaza is a large-scale commercial project in the Kachigam area, built to support the massive industrial electronics hub of Daman.

What you need to know:
• Scale: Features massive commercial frontage and high-speed elevators.
• Convenience: Integrated with residential wings for a walk-to-work lifestyle.
• Target: Ideal for corporate offices and industrial service providers.`,
        faq: [],
        project_image: [
          "../../assets/projects/fortune_dp_plaza/fortune_dp_plaza_1.jpg",
          "../../assets/projects/fortune_dp_plaza/fortune_dp_plaza_2.jpg",
          "../../assets/projects/fortune_dp_plaza/fortune_dp_plaza_3.jpg",
          "../../assets/projects/fortune_dp_plaza/fortune_dp_plaza_4.jpg",
        ]
      },
      {
        id: 11,
        name: 'Fortune Chandranagari',
        thumbnail_image: '../../assets/projects/fortune_chandranagari/fortune_chandranagari_thumbnail.jpg',
        hero_image: '../../assets/projects/fortune_chandranagari/fortune_chandranagari_hero.jpg',
        property_developer: 'Fortune Group',
        property_location: 'Vapi',
        property_type: 'Residential',
        brochure_download: "",
        property_intro_content: `A family-centric, ready-to-move housing society in Chala that focuses on community living and essential comforts.

What you need to know:
• Community: Already home to several families with a proven track record.
• Utilities: Features 24-hour dedicated water storage and borewell facilities.
• Value: One of the most competitively priced 2BHK options in the region.`,
        project_image: [
          "../../assets/projects/fortune_chandranagari/fortune_chandranagari_page_02.jpg",
          "../../assets/projects/fortune_chandranagari/fortune_chandranagari_page_03.jpg",
          "../../assets/projects/fortune_chandranagari/fortune_chandranagari_page_04.jpg",
          "../../assets/projects/fortune_chandranagari/fortune_chandranagari_page_05.jpg",
          "../../assets/projects/fortune_chandranagari/fortune_chandranagari_page_06.jpg",
          "../../assets/projects/fortune_chandranagari/fortune_chandranagari_page_07.jpg",
          "../../assets/projects/fortune_chandranagari/fortune_chandranagari_page_08.jpg",
          "../../assets/projects/fortune_chandranagari/fortune_chandranagari_page_09.jpg",
          "../../assets/projects/fortune_chandranagari/fortune_chandranagari_page_10.jpg",
          "../../assets/projects/fortune_chandranagari/fortune_chandranagari_page_11.jpg",
          "../../assets/projects/fortune_chandranagari/fortune_chandranagari_page_12.jpg"
        ]
      },
      {
        id: 12,
        name: 'Green Ville',
        thumbnail_image: '../../assets/projects/green_ville/green_ville_thumbnail.jpg',
        hero_image: '../../assets/projects/green_ville/green_ville_thumbnail.jpg',
        property_developer: 'Fortune Group',
        property_location: 'Daman',
        property_type: 'Residential',
        brochure_download: "",
        property_intro_content: `Green Ville is an upscale residential development emphasizing luxury and eco-friendly design in the heart of Damanwada.

What you need to know:
• Luxury Specs: High-end flooring and designer bathroom fittings.
• Environment: Located away from industrial noise for a fresher atmosphere.
• Connectivity: Close to Moti Daman fort area and administrative offices.`,
        faq: [],
        project_image: []
      },
      {
        id: 13,
        name: 'Fortune Lake Home',
        thumbnail_image: '../../assets/projects/fortune_lake_home/fortune_lake_home_thumbnail.jpg',
        hero_image: '../../assets/projects/fortune_lake_home/fortune_lake_home_hero.jpg',
        property_developer: 'Fortune Group',
        property_location: 'Umargaon Valsad',
        property_type: 'Residential',
        brochure_download: "",
        property_intro_content: `Fortune Lake Homes is a signature development featuring residential row houses and commercial shops near the Aakra Maruti Temple.

What you need to know:
• Spiritual Proximity: Peaceful lakeside environment near local temples.
• Layout: Spacious row houses offering a "bungalow feel."
• Commute: Easy access to Umargaon Railway Station.`,
        faq: [],
        project_image: [
          "../../assets/projects/fortune_lake_home/fortune_lake_home_1.jpg",
          "../../assets/projects/fortune_lake_home/fortune_lake_home_2.jpg"
        ]
      },
      {
        id: 14,
        name: 'Sungate Infra Bunglows',
        thumbnail_image: '../../assets/projects/sungate_infra_bunglows/sungate_infra_bunglows_thumbnail.jpg',
        hero_image: '../../assets/projects/sungate_infra_bunglows/sungate_infra_bunglows_thumbnail.jpg',
        property_developer: 'Fortune Group',
        property_location: 'Vapi',
        property_type: 'Residential',
        brochure_download: "",
        property_intro_content: `Sungate Infra Bungalows offers independent luxury with spacious layouts and premium teak-wood finishes in Chala.

What you need to know:
• Private Space: Each unit has private parking and a front garden sit-out.
• Quality: Built with earthquake-resistant RCC structures.
• Elite Zone: Nestled in the most sought-after residential pocket of Vapi.`,
        faq: [],
        project_image: []
      },
      {
        id: 15,
        name: 'Sungate Apartments',
        thumbnail_image: '../../assets/projects/sungate_apartments/sungate_apartments_thumbnail.jpg',
        hero_image: '../../assets/projects/sungate_apartments/sungate_apartments_hero.jpg',
        property_developer: 'Fortune Group',
        property_location: 'Vapi',
        property_type: 'Residential',
        brochure_download: "",
        property_intro_content: `Sungate Apartments Phase 1 offers modern units known for their strong construction quality and strategic location in Chala.

What you need to know:
• Reliability: Active resident welfare association and 24/7 security.
• Connectivity: Directly connected to the Vapi-Daman main road.
• Proximity: Within 2km of major pharmacies and emergency hospitals.`,
        faq: [],
        project_image: [
          "../../assets/projects/sungate_apartments/sungate_apartments_1.jpg",
          "../../assets/projects/sungate_apartments/sungate_apartments_2.jpg",
          "../../assets/projects/sungate_apartments/sungate_apartments_3.jpg",
          "../../assets/projects/sungate_apartments/sungate_apartments_4.jpg",
          "../../assets/projects/sungate_apartments/sungate_apartments_5.jpg"
        ]
      },
      {
        id: 16,
        name: 'Ruby',
        thumbnail_image: '../../assets/projects/ruby/ruby_thumbnail.jpg',
        hero_image: '../../assets/projects/ruby/ruby_hero.jpg',
        property_developer: 'Shrisai Akar Civilinfra',
        property_location: 'Borivali',
        property_type: 'Residential',
        brochure_download: "",
        property_intro_content: `Ruby is a 22-storey high-rise in Gorai, Borivali West, offering a premium urban lifestyle with a "Clubhouse in the Sky."

What you need to know:
• Rooftop: Features a meditation deck, yoga zone, and stargazing point.
• View: Higher floors offer panoramic views of the Gorai creek.
• Transport: 5 mins from the New Metro Line and Borivali Station.`,
        faq: [],
        project_image: [
          '../../assets/projects/ruby/ruby_brochure_page_02.jpg',
          '../../assets/projects/ruby/ruby_brochure_page_03.jpg',
          '../../assets/projects/ruby/ruby_brochure_page_04.jpg',
          '../../assets/projects/ruby/ruby_brochure_page_05.jpg',
          '../../assets/projects/ruby/ruby_brochure_page_06.jpg',
          '../../assets/projects/ruby/ruby_brochure_page_07.jpg',
          '../../assets/projects/ruby/ruby_brochure_page_08.jpg',
          '../../assets/projects/ruby/ruby_brochure_page_09.jpg',
          '../../assets/projects/ruby/ruby_brochure_page_10.jpg',
        ]
      },
      {
        id: 17,
        name: 'Sigma Amber',
        thumbnail_image: '../../assets/projects/sigma_amber/sigma_amber_thumbnail.jpg',
        hero_image: '../../assets/projects/sigma_amber/sigma_amber_hero.jpg',
        property_developer: 'Sigma',
        property_location: 'Charkop',
        property_type: 'Residential',
        property_intro_content: `Sigma Amber is a smart-living project in Charkop, Kandivali, one of Mumbai's most systematically planned sectors.

What you need to know:
• Efficiency: Intelligent 1 & 2 BHK homes maximizing every square inch.
• Security: Advanced 3-tier security system with video door phones.
• Neighborhood: Surrounded by established gardens and the Charkop market.`,
        brochure_download: "",
        faq: [],
        project_image: [
          "../../assets/projects/sigma_amber/sigma_amber_page_0001.jpg",
          "../../assets/projects/sigma_amber/sigma_amber_page_0002.jpg",
          "../../assets/projects/sigma_amber/sigma_amber_page_0003.jpg",
          "../../assets/projects/sigma_amber/sigma_amber_page_0004.jpg",
          "../../assets/projects/sigma_amber/sigma_amber_page_0005.jpg",
          "../../assets/projects/sigma_amber/sigma_amber_page_0006.jpg",
          "../../assets/projects/sigma_amber/sigma_amber_page_0007.jpg",
          "../../assets/projects/sigma_amber/sigma_amber_page_0008.jpg",
          "../../assets/projects/sigma_amber/sigma_amber_page_0009.jpg",
          "../../assets/projects/sigma_amber/sigma_amber_page_0010.jpg",
          "../../assets/projects/sigma_amber/sigma_amber_page_0011.jpg",
          "../../assets/projects/sigma_amber/sigma_amber_page_0012.jpg",
          "../../assets/projects/sigma_amber/sigma_amber_page_0013.jpg",
          "../../assets/projects/sigma_amber/sigma_amber_page_0014.jpg",
          "../../assets/projects/sigma_amber/sigma_amber_page_0015.jpg",
          "../../assets/projects/sigma_amber/sigma_amber_page_0016.jpg",
          "../../assets/projects/sigma_amber/sigma_amber_page_0017.jpg",
          "../../assets/projects/sigma_amber/sigma_amber_page_0018.jpg",
          "../../assets/projects/sigma_amber/sigma_amber_page_0019.jpg",
          "../../assets/projects/sigma_amber/sigma_amber_page_0020.jpg",
          "../../assets/projects/sigma_amber/sigma_amber_page_0021.jpg",
          "../../assets/projects/sigma_amber/sigma_amber_page_0022.jpg"
        ]
      }
    ]
  }

  getLeadersMetaData() {
    return [
      {
        id: 1,
        hero_image: '../../../assets/about/profile/anil-rana.png',
        alt: 'Anil Rana',
        name: 'Anil Rana',
        role: 'Founder & Senior Real Estate Consultant',
        badge: '30+ Years of Industry Experience',
        intro: 'A seasoned real estate professional specializing in residential, commercial, SRA, plots, and redevelopment properties across Mumbai and emerging markets.',
        professional_overview: `With over three decades of experience in the real estate industry, Anil Rana is a seasoned advisor recognized for his market insight, steady leadership, and relationship-driven approach. Based in the Mumbai region, he has guided clients across residential, commercial, SRA, plot, and redevelopment projects.

  His professional philosophy is rooted in trust, transparency, and long-term value creation—principles that continue to define his work and client relationships.

  Beginning his real estate journey in 1994, Anil Rana has witnessed multiple market cycles first-hand. This depth of experience allows him to provide clarity and foresight, particularly in complex redevelopment and long-term investment transactions.

  Supported by a professionally managed team, every engagement is handled with diligence, accuracy, and timely execution.`,
        quote:
          `Real estate decisions shape businesses and families for decades. My role is to ensure every decision is informed, secure, and future-ready.`,
        contact_info: {
          "location": "Mumbai Region",
          "phone_number": "+91 98212 94212",
          "whatsapp_number": "",
          "email_address": "anilrana09@gmail.com"
        },
        market_presence: {
          "description": "Anil Rana continues to explore growth opportunities across high-potential domestic and international markets, aligning client investments with future-ready locations."
        },
        clients_associations: [
          "IPCA Company",
          "Fairpen, Rajson Pen",
          "Reylite Switches, Parcos Switches",
          "Amron Switches, Music Centre",
          "Rajprabha (Vasai), Nawane Construction (Vasai)",
          "Channel Partner: Auris Serenity, Oberoi Realty, Danube (Dubai)"
        ]
      },
      {
        id: 2,
        hero_image: '../../../assets/about/profile/anil-dua.png',
        alt: 'Anil Dua',
        name: 'Anil Dua',
        role: 'Founder & Senior Real Estate Consultant',
        badge: '25+ Years of Industry Experience',
        intro: 'A seasoned real estate consultant specializing in industrial, commercial, and mixed-use properties, with strong expertise in Vasai and Kandivali industrial markets.',
        professional_overview: `With over 25 years of experience, Anil Dua is a trusted real estate consultant known for his focused expertise in industrial and mixed-use property advisory. Based in the Mumbai region, he is particularly recognized for his work in industrial gala properties across Vasai and Kandivali.

  His approach blends market intelligence with a structured, execution-focused process, ensuring transactions are commercially sound and operationally aligned.

  Since beginning his professional journey in real estate in 2005, Anil Dua has worked closely with business owners, investors, and developers. Backed by a capable professional team, he manages transactions with attention to detail, regulatory clarity, and long-term practicality.

  His core strength lies in identifying properties that align immediate business needs with sustainable future growth.`,
        quote:
          `Strong real estate outcomes come from understanding both the property and the purpose behind it. My focus is always on informed, practical decisions.`,
        contact_info: {
          "location": "Mumbai Region",
          "phone_number": "+91 93240 88437",
          "whatsapp_number": "",
          "email_address": "dua_realestate_anil@yahoo.co.in"
        },
        market_presence: {
          "description": "Anil Dua continues to expand his advisory reach into emerging real estate corridors, offering clients access to new opportunities beyond traditional markets."
        },
        clients_associations: [
          "IPCA Company",
          "Rana & Sons, Fairpen, Rajson Pen",
          "Reylite Switches, Parcos Switches",
          "Amron Switches, Music Centre",
          "Rajprabha (Vasai), Nawane Construction (Vasai)",
          "Channel Partner: Auris Serenity, Oberoi Realty, Danube"
        ]
      }
    ]
  }

  trackInquiry(info: any) {
    info['inquiry_platform'] = 'web';
    return this.http.post(this.baseUrl + 'trackInquiry', info, { headers: this.getHeaders() })
  }

}

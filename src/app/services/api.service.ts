import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  public headers: HttpHeaders = new HttpHeaders()
  public baseUrl: string = 'http://localhost:9005/api/';
  private _refreshNeeded = new Subject<void>();

  constructor(private http: HttpClient) { }

  refreshNeeded() {
    return this._refreshNeeded;
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
        faq: [],
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
        faq: [],
        project_image: []
      },
      {
        id: 13,
        name: 'Fortune Lake Home',
        thumbnail_image: '../../assets/projects/fortune_lake_home/fortune_lake_home_hero.jpg',
        hero_image: '../../assets/projects/fortune_lake_home/fortune_lake_home_thumbnail.jpg',
        property_developer: 'Fortune Group',
        property_location: 'Umargaon Valsad',
        property_type: 'Residential',
        brochure_download: "",
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

  getLeadersMetaData(){
    return [
      {
        id:1,
        hero_image:'../../../assets/about/profile/anil-rana.png',
        alt:'Anil Rana',
        name:'Anil Rana',
        role:'Founder & Senior Real Estate Consultant',
        badge:'30+ Years of Industry Experience',
        intro:'A seasoned real estate professional specializing in residential, commercial, SRA, plots, and redevelopment properties across Mumbai and emerging markets.',
        professional_overview:`With over 30+ years of experience, Anil Rana is a trusted real estate consultant specializing in industrial
            and mixed-use property advisory. Based in the Mumbai region, he is particularly known for his expertise in
            industrial gala properties in Vasai and Kandivali.

            His approach combines strong market knowledge with a structured, execution-focused process.

            Anil Rana began his professional journey in real estate in 1994 and has since worked closely with business
            owners, investors, and developers. Backed by a capable professional team, he manages transactions with
            attention to detail, regulatory clarity, and commercial practicality.

            His strength lies in identifying properties that align operational needs with long-term growth.`,
        contact_info:{
          "location":"Mumbai Region",
          "phone_number":"+91 98212 94212",
          "whatsapp_number":"",
          "email_address":"anilrana09@gmail.com"
        }
      },
      {
        id:2,
        hero_image:'../../../assets/about/profile/anil-dua.png',
        alt:'Anil Dua',
        name:'Anil Dua',
        role:'Founder & Senior Real Estate Consultant',
        badge:'25+ Years of Industry Experience',
        intro:'A seasoned real estate professional specializing in residential, commercial, SRA, plots, and redevelopment properties across Mumbai and emerging markets.',
        professional_overview:`With over 25 years of experience, Anil Dua is a trusted real estate consultant specializing in industrial
            and mixed-use property advisory. Based in the Mumbai region, he is particularly known for his expertise in
            industrial gala properties in Vasai and Kandivali.

            His approach combines strong market knowledge with a structured, execution-focused process.

            Anil Dua began his professional journey in real estate in 2005 and has since worked closely with business
            owners, investors, and developers. Backed by a capable professional team, he manages transactions with
            attention to detail, regulatory clarity, and commercial practicality.

            His strength lies in identifying properties that align operational needs with long-term growth.`,
        contact_info:{
          "location":"Mumbai Region",
          "phone_number":"+91 93240 88437",
          "whatsapp_number":"",
          "email_address":"dua_realestate_anil@yahoo.co.in"
        }
      }
    ]
  }

}

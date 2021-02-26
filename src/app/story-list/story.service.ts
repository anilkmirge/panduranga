import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  getStory(id: number) {
    return this.getStories().pipe(
      map((stories) => {
        return stories.filter((story) => story.id === id)[0]; //the filter method will bring only a single item array
      })
    );
  }

  getStories() {
    return of([
      {
        id: 1,
        title: 'Pundalika - The greatest devotee of Panduranga',
        description:
          'The Padma Purana and the Skanda Purana briefly describe why the Lord journeyed to Pandharpur and why He stays there in this form. Once Srimati Radharani, Lord Krishna’s consort in the village of Vrindavana, visited Dvaraka, where Lord Krishna lived as a king. At that time, Rukmini Devi, Lord Krishna’s queen, noticed that Krishna was dealing more intimately with Radharani than He had ever done with her. Upset, she departed for the forest of Dindirvana, near Pandharpur. Lord Krishna followed Rukmini to apologize, but His apology left her unmoved. So the Lord moved on to Pandharpur to visit one of His devotees, Bhakta Pundarika, now popularly known in Maharashtra as Pundalika. Lokanath Maharaj mentions in his book that Pundalik in his young age never looked after the needs of his father Janudev and his mother Satyavati. Both Janudev and Satyavati were great devotees of Lord Shiva and after meeting Lord Panduranga, they also became completely attached to Panduranga in their thoughts and mind. When Pundalik got married, he started ill treating them all the more. Tired of his tyranny, the parents decided to head for Kashi / Varanasi. It is said that those who die in Kashi attain salvation and liberation from the cycle of birth and death. This is still believed today and many people travel there when they feel their end is near. Hearing his parents’ plans, Pundalik and his wife decided to join them. His treachery continued so much that he made his old parents walk throughout the journey while he and his young wife rode on a horse. On the way, they came across the hermitage of the great sage, Kakkut muni. Tired of the long journey, the group decided to spend some days there. That night, Pundalik lay awake and witnessed something remarkable. Just before dawn, he saw a group of beautiful, young women dressed in dirty clothes, enter the Sage’s hermitage. They did chores like cleaning the floor, fetching water and washing the Sage’s clothes. After that, they went to the prayer room. When they came out, their clothes were spotlessly clean and they disappeared. Pundalik wasn’t alarmed seeing this but rather he felt at peace. He kept thinking about the incident the following day. He wanted to be sure that he was not dreaming but had truly witnessed such a glorious incident. So he remained awake again. But this time, he got closer and decided to speak to the women. “Who are you all?” “We are Ganga, Yamuna and all the holy rivers of India. People take a dip and bathe in us to wipe away their sins. The impurity of their mind, body and souls make us dirty. That’s why you see our clothes in such filthy condition.” Pundalik was amazed with their answer. “But you are the biggest sinner of all because of the way you treat your devotee parents.” This was a rude awakening for Pundalik. He realized his mistake and changed his ways. He served his parents well and looked after all their needs and comforts.  Seeing Pundalik’s sincere devotion and service towards his parents, Lord Panduranga was extremely pleased. When the Lord reached Pundarika’s ashrama, Pundarika was serving his elderly parents. So Pundarika gave the Lord a seat of brick and asked the Lord to wait. The Lord did as told. He stood, lotus hands on His hips, waiting for Pundarika to return. While He was waiting, Rukmini, having forgotten her distress, came from Dindirvana and rejoined Him. Both of Them stayed in Pandharpur in Deity form. To this day the Lord stands on the same brick, but now He’s waiting for all His devotees to come see Him. While waiting, the Lord seems to tell the devotees, “Do not fear. For those who have surrendered unto Me, I have reduced the depth of the ocean of material suffering. See, it is only this deep.” He indicates the shallowness of the ocean by placing His hands on His hips. Elegantly dressed in yellow and other colors, Lord Vitthala wears around His neck a vaijayanti garland and tulasi, whose aroma permeates the darsana hall and the surrounding area. His right hand holds a lotus flower and His left a conchshell. On His chest He bears the mark of Bhrgu’s foot. His ears are decorated with shark-shaped earrings, and on His forehead beneath His crown is a broad mark of tilaka. The Lord’s smile irresistibly enchants His devotees. Each pilgrim who approaches Him gets a glimpse of His peaceful smiling face and considers this the perfection of life.',
      },
      { id: 2, title: 'Devachi ye vaari ubha kshanabhari' },
    ]);
  }
}

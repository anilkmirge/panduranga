import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoryService } from '../story-list/story.service';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.css'],
})
export class StoryDetailComponent implements OnInit {
  story;
  constructor(
    private storyService: StoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.storyService.getStory(+params.get('id'))
          .subscribe(story => {
          this.story = story;
        });
      });
  }
}

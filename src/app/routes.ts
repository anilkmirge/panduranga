import { HomeComponent } from './home/home.component';
import { StoryListComponent } from './story-list/story-list.component';
import { StoryDetailComponent } from './story-detail/story-detail.component';


export const routingTable = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'stories', component: StoryListComponent},
  {path: 'stories/:id', component: StoryDetailComponent}
];

import Body from './components/AppBody.vue'
import AppPreview from './components/AppPreview.vue'
import MeetTheTeam from './components/MeetTheTeam.vue'

export const routes = [
  {path: '/app-preview', component: AppPreview},
  {path: '', component: Body},
  {path: '/meet-the-team', component: MeetTheTeam}
];

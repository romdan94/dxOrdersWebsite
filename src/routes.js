import Body from './components/AppBody.vue'
import AppPreview from './components/AppPreview.vue'

export const routes = [
  {path: '/app-preview', component: AppPreview},
  {path: '', component: Body}
];

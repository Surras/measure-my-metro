import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('./tracking-tab/tracking-tab.module').then(m => m.TrackingTabPageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('./history-tab/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tracking-tab',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tracking-tab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}

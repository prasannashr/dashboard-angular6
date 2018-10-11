import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ClustersListComponent } from './cos-clusters/clusters-list/clusters-list.component';
import { CosClustersComponent } from './cos-clusters/cos-clusters.component';
import { CosNodesComponent } from './cos-nodes/cos-nodes.component';
import { ClusterConfigurationComponent } from "./cos-clusters/cluster-configuration/cluster-configuration.component";
import { ResiliencyGroupsComponent } from './cos-nodes/resiliency-groups/resiliency-groups.component';
import { AddResiliencyGroupsAndNodesComponent } from './cos-nodes/add-resiliency-groups-and-nodes/add-resiliency-groups-and-nodes.component';
import { NodesComponent } from './cos-nodes/nodes/nodes.component';
import { NodeDetailsComponent } from './cos-nodes/node-details/node-details.component';
import { ResiliencyLandingPageComponent } from './cos-nodes/resiliency-landing-page/resiliency-landing-page.component';
import { NodesLandingPageComponent } from './cos-nodes/nodes-landing-page/nodes-landing-page.component'
import { CosServiceStatusComponent } from './cos-service-status/cos-service-status.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';


export const AppRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'my-dashboard', component: MyDashboardComponent },
    {
      path: 'clusters',
      component: CosClustersComponent,
      children: [
        { path:'', component: ClustersListComponent},
        { path:'config', component: ClusterConfigurationComponent}
      ]
    },
    {
      path: 'nodes',
      component: CosNodesComponent,
      children: [
        {
          path: 'resiliency-group',
          component: ResiliencyLandingPageComponent,
          children: [
            {
              path:'',
              component: ResiliencyGroupsComponent,
            },
            {
              path:':rg-id',
              component: NodesLandingPageComponent,
              children: [
                {
                  path:'',
                  component: NodesComponent,
                },
                {
                  path:'node/:node-id',
                  component: NodeDetailsComponent,
                }
              ]
            }
          ]
        },
        { path:'config', component: AddResiliencyGroupsAndNodesComponent},

        {
          path:'nodes',
          component: ResiliencyGroupsComponent,
          children: [
            {
              path:':node-id',
              component: NodeDetailsComponent,
            }
          ]
        }
      ]
    },
    { path: 'service-status', component: CosServiceStatusComponent },

    ];


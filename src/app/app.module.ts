import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { ChartistModule} from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule} from './material-module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CosNodesComponent } from './cos-nodes/cos-nodes.component';
import { CosClustersComponent } from './cos-clusters/cos-clusters.component';
import { ClustersListComponent } from './cos-clusters/clusters-list/clusters-list.component';
import { ClusterConfigurationComponent } from './cos-clusters/cluster-configuration/cluster-configuration.component';
import { ResiliencyGroupsComponent } from './cos-nodes/resiliency-groups/resiliency-groups.component';
import { AddResiliencyGroupsAndNodesComponent } from './cos-nodes/add-resiliency-groups-and-nodes/add-resiliency-groups-and-nodes.component';
import { NodesComponent } from './cos-nodes/nodes/nodes.component';
import { NodeDetailsComponent } from './cos-nodes/node-details/node-details.component';
import { ResiliencyLandingPageComponent } from './cos-nodes/resiliency-landing-page/resiliency-landing-page.component';
import { NodesLandingPageComponent } from './cos-nodes/nodes-landing-page/nodes-landing-page.component';
import { CosNodesService } from "./cos-nodes/cos-nodes.service";
import { DonutChartService } from "./donut-chart.service";
import { CosServiceStatusComponent } from './cos-service-status/cos-service-status.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true,
};

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    DashboardComponent,
    CosNodesComponent,
    CosClustersComponent,
    ClustersListComponent,
    ClusterConfigurationComponent,
    ResiliencyGroupsComponent,
    AddResiliencyGroupsAndNodesComponent,
    NodesComponent,
    NodeDetailsComponent,
    ResiliencyLandingPageComponent,
    NodesLandingPageComponent,
    CosServiceStatusComponent,
    MyDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ChartistModule,
    ChartsModule,
    NgxChartsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    PerfectScrollbarModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    CosNodesService,
    DonutChartService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },{
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, ChangeDetectionStrategy, OnInit, ViewChild } from '@angular/core';


import { Observable  } from 'rxjs/Observable';
import { of  } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';
import { MatSort, Sort } from '@angular/material';
import { MatPaginator, PageEvent } from '@angular/material';
import { fromMatSort, sortRows } from './datasource-utils';
import { fromMatPaginator, paginateRows } from './datasource-utils';
import { DonutChartService } from "../donut-chart.service";

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';

@Component({
  selector: 'app-cos-service-status',
  templateUrl: './cos-service-status.component.html',
  styleUrls: ['cos-service-status.component.scss']
})
export class CosServiceStatusComponent implements OnInit {

  constructor(private chart : DonutChartService) { }

  @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedRows$: Observable<ResiliencyGroup[]>;
  totalRows$: Observable<number>;

  ngOnInit() {
    const sortEvents$: Observable<Sort> = fromMatSort(this.sort);
    //const pageEvents$: Observable<PageEvent> = fromMatPaginator(this.paginator);

    const rows$ = of(resiliencyGroups);

    this.totalRows$ = rows$.pipe(map(rows => rows.length));
    this.displayedRows$ = rows$.pipe(sortRows(sortEvents$));

    this.chart.drawDiskHealthDonutChart('resiliency-chart-1');


  }
  ngAfterViewInit(){

    this.chart.drawDiskHealthDonutChart('resiliency-chart');
    this.chart.drawDiskHealthDonutChart('interfaces-chart');
    this.chart.drawDiskHealthDonutChart('disks-chart');

    this.chart.drawDiskHealthDonutChart('storages-chart');
    this.chart.drawDiskHealthDonutChart('services-chart');
    this.chart.drawDiskHealthDonutChart('fault-chart');

  }

}

export interface ResiliencyGroup {
  resiliencyGroupId: string;
  name: string;
  resiliencyStatus: string;
  interfaceStatus: string;
  disksStatus: string;
  storageStatus: string;
  faultStatus: string;
}

export const resiliencyGroups: ResiliencyGroup[] = [

  {
    'resiliencyGroupId': '1',
    'name': 'cluster1:1',
    'resiliencyStatus': 'normal',
    'interfaceStatus': 'normal',
    'disksStatus': 'normal',
    'storageStatus': 'normal',
    'faultStatus': 'normal'
  },{
    'resiliencyGroupId': '1',
    'name': 'cluster1:2',
    'resiliencyStatus': 'normal',
    'interfaceStatus': 'normal',
    'disksStatus': 'normal',
    'storageStatus': 'normal',
    'faultStatus': 'normal'
  },{
    'resiliencyGroupId': '1',
    'name': 'cluster1:3',
    'resiliencyStatus': 'normal',
    'interfaceStatus': 'normal',
    'disksStatus': 'normal',
    'storageStatus': 'normal',
    'faultStatus': 'normal'
  },{
    'resiliencyGroupId': '1',
    'name': 'cluster1:4',
    'resiliencyStatus': 'normal',
    'interfaceStatus': 'normal',
    'disksStatus': 'normal',
    'storageStatus': 'normal',
    'faultStatus': 'normal'
  },{
    'resiliencyGroupId': '1',
    'name': 'cluster1:5',
    'resiliencyStatus': 'normal',
    'interfaceStatus': 'normal',
    'disksStatus': 'normal',
    'storageStatus': 'normal',
    'faultStatus': 'normal'
  },{
    'resiliencyGroupId': '1',
    'name': 'cluster1:6',
    'resiliencyStatus': 'normal',
    'interfaceStatus': 'normal',
    'disksStatus': 'normal',
    'storageStatus': 'normal',
    'faultStatus': 'normal'
  },{
    'resiliencyGroupId': '1',
    'name': 'cluster1:7',
    'resiliencyStatus': 'normal',
    'interfaceStatus': 'normal',
    'disksStatus': 'normal',
    'storageStatus': 'normal',
    'faultStatus': 'normal'
  }
];


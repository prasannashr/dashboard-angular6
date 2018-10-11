import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';


import { CosNodesService } from "../cos-nodes.service";
import { DonutChartService } from "../../donut-chart.service";
@Component({
  selector: 'app-node-details',
  templateUrl: './node-details.component.html',
  styleUrls: ['./node-details.component.css']
})
export class NodeDetailsComponent implements  OnInit{

  constructor(private svc : CosNodesService, private chart : DonutChartService) {

  }

  displayedServiceColumns = ['name', 'status'];
  displayedInterfaceColumns = ['name', 'ip', 'status'];
  servicesData = this.svc.getCosNodeServices();
  nodeData = this.svc.getNodeResiliency();
  interfaceData = this.svc.getInterfaceData();
  disks = this.svc.getDisks();

  ngOnInit() {
    this.chart.drawDiskHealthDonutChart('donut-chart');
    this.chart.drawStoragePartitionPieChart();
  }


}

import { Injectable } from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';

declare var require: any;
const localData: any = require('./shared/data.json');

@Injectable({
  providedIn: 'root'
})
export class DonutChartService {

  disks = localData['disks'];
  storagePartition = localData['storagePartition'];

  getDisks(){
    return this.disks;
  }

  getStoragePartition(){
    return this.storagePartition;
  }


  drawDiskHealthDonutChart(svg_id) {
    let data = this.getDisks();
    let width: number;
    let height: number;

    let svg: any;

    let radius: number;

    let arc: any;
    let pie: any;
    let color: any;

    let g: any;

    svg = d3.select('#'+svg_id);

    width = +400;
    height = +200;
    radius = Math.min(width, height) / 2;

    color = d3Scale.scaleOrdinal()
      .range(['green', 'orange', 'red']);

    arc = d3Shape.arc()
      .outerRadius(radius - 10)
      .innerRadius(radius - 40);

    pie = d3Shape.pie()
      .sort(null)
      .value((d: any) => d.value);

    svg = d3.select('#'+svg_id)
      .append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');


    g = svg.selectAll('path')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => color(i));

    var legendItemSize = 16;
    var legendSpacing = 4;

    var legend = svg.selectAll('.legend')
      .data(color.domain())
      .enter()
      .append('g')
      .attr('class', 'legend')
      .attr('transform', (d, i) => {
        var height = legendItemSize + legendSpacing
        var offset = height * color.domain().length / 2
        var x = legendItemSize * -3.7;
        var y = (i * height) - offset
        return `translate(${x}, ${y})`
      });
    legend
      .append('text')
      .attr('x', legendItemSize + legendSpacing)
      .attr('y', legendItemSize - legendSpacing)
      .text((d) => { return data[d].value +" "+data[d].name })
      .style("fill",color);
  }



  drawStoragePartitionPieChart() {

    let margin = {top: 20, right: 20, bottom: 30, left: 50};
    let width: number;
    let height: number;
    let radius: number;

    let arc: any;
    let labelArc: any;
    let pie: any;
    let color: any;
    let svg: any;

      width = 450 - margin.left - margin.right;
      height = 250 - margin.top - margin.bottom;
      radius = Math.min(width, height) / 2;


    color = d3Scale.scaleOrdinal()
                    .range(['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56', '#d0743c', '#ff8c00']);
    arc = d3Shape.arc()
                  .outerRadius(radius - 10)
                  .innerRadius(0);
    labelArc = d3Shape.arc()
                      .outerRadius(radius - 40)
                      .innerRadius(radius - 40);
    pie = d3Shape.pie()
                  .sort(null)
                  .value((d: any) => d.value);
    svg = d3.select('#pie-chart')
            .append('g')
            .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    let g = svg.selectAll('.arc')
            .data(pie(this.getStoragePartition()))
            .enter().append('g')
            .attr('class', 'arc');
          g.append('path').attr('d', arc)
            .style('fill', (d: any) => color(d.data.name) );

  }

}

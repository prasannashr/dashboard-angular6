import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';

export interface Element {
  name: string;
  total: number;
  maintenance: number;
  inservice: number;
}

const ELEMENT_DATA: Element[] = [
  {total: 10, name: 'cluster-1:2', maintenance: 0, inservice: 10},
  {total: 18, name: 'cluster-1:3', maintenance: 8, inservice: 10},
  {total: 51, name: 'cluster-1:4', maintenance: 1, inservice: 50},
  {total: 34, name: 'cluster-1:5', maintenance: 9, inservice: 25},
  {total: 22, name: 'cluster-1:6', maintenance: 7, inservice: 15},
  {total: 66, name: 'cluster-1:7', maintenance: 6, inservice: 60},
  {total: 56, name: 'cluster-1:8', maintenance: 6, inservice: 50},
  {total: 100, name: 'cluster-1:9', maintenance: 0, inservice: 100},
  {total: 120, name: 'cluster-1:10', maintenance: 4, inservice: 116}
];
@Component({
  selector: 'app-resiliency-groups',
  templateUrl: './resiliency-groups.component.html',
  styleUrls: ['./resiliency-groups.component.css']
})
export class ResiliencyGroupsComponent {

  displayedColumns = [ 'name','total', 'maintenance', 'inservice','action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  clusters = ELEMENT_DATA;
  public show:boolean = true;
  @ViewChild(MatSort) sort: MatSort;

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  toggle() {
    this.show = !this.show;
  }

}

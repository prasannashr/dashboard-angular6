import { Component, OnInit,ViewChild } from '@angular/core';

import {MatTableDataSource, MatSort} from '@angular/material';

@Component({
  selector: 'app-clusters-list',
  templateUrl: './clusters-list.component.html',
  styleUrls: ['./clusters-list.component.css']
})
export class ClustersListComponent {

  displayedColumns = ['position', 'name', 'weight', 'symbol','action'];
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

export interface Element {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'cluster-1', weight: "Enabled", symbol: '100'},
  {position: 2, name: 'cluster-2', weight: "Enabled", symbol: '20'},
  {position: 3, name: 'cluster-3', weight: "Disabled", symbol: '80'},
  {position: 4, name: 'cluster-4', weight: "Enabled", symbol: '75'},
  {position: 5, name: 'cluster-5', weight: "Disabled", symbol: '4'},
  {position: 6, name: 'cluster-6', weight: "Enabled", symbol: '16'}
];

import { Component, ViewChild } from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';

export interface Element {
  name: string;
  maintenance: string;
  state: string;
}

const ELEMENT_DATA: Element[] = [
  {name: 'c3260-g3a', maintenance: '10.10.10.1', state: 'Inservice'},
  {name: 'c4260-g3a', maintenance: '20.10.10.1', state: 'Maintenance'},
  {name: 'c3260-g2a', maintenance: '10.20.10.1', state: 'Inservice'},
  { name: 'c6260-g3a', maintenance: '10.30.10.1', state: 'Inservice'},
  { name: 'c3260-g3a', maintenance: '113.10.10.1', state: 'Inservice'},
  { name: 'c3260-g3a', maintenance: '10.10.10.1', state: 'Inservice'},
  { name: 'c3260-g3a', maintenance: '198.10.10.1', state: 'Maintenance'},
  { name: 'd8260-g3a', maintenance: '10.10.10.1', state: 'inservice'},
  { name: 'c3260-g3a', maintenance: '10.10.10.1', state: 'inservice'},
  { name: 'e3260-g3a', maintenance: '10.10.10.1', state: 'inservice'},
  { name: 'c3260-g3a', maintenance: '10.10.10.1', state: 'inservice'},
  { name: 'c3260-g3a', maintenance: '10.10.10.1', state: 'inservice'},
  { name: 'c3260-g3a', maintenance: '10.10.10.1', state: 'Maintenance'},
  { name: 'c3260-g3a', maintenance: '10.10.10.1', state: 'inservice'},
  { name: 'c3260-g3a', maintenance: '10.10.10.1', state: 'inservice'},
  { name: 'c3260-g3a', maintenance: '10.10.10.1', state: 'inservice'},
  { name: 'c3260-g3a', maintenance: '10.10.10.1', state: 'Maintenance'},
  { name: 'c3260-g3a', maintenance: '10.10.10.1', state: 'Inservice'},
  { name: 'c3260-g3a', maintenance: '10.10.10.1', state: 'inservice'},
  { name: 'c3260-g3a', maintenance: '10.10.10.1', state: 'inservice'},
  { name: 'c3260-g3a', maintenance: '10.10.10.1', state: 'inservice'},
  { name: 'c3260-g3a', maintenance: '10.10.10.1', state: 'Inservice'},
];

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css']
})
export class NodesComponent {

  displayedColumns = [ 'name','maintenance', 'state','action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  nodes = ELEMENT_DATA;
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

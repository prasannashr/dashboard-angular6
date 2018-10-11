import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}
export interface Saperator {
  name: string;
  type?: string;
}


export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  saperator?: Saperator[];
}

const MENUITEMS = [
    {
        state: '',
        name: 'Dashboard',
        type: 'link',
        icon: 'content_copy'
    },
    {
      state: 'clusters',
      name: 'Clusters',
      type: 'link',
      icon: 'content_copy'
    }
];

@Injectable()

export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }

}

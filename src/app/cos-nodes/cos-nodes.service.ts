import { Injectable } from '@angular/core';


declare var require: any;
const localData: any = require('../shared/data.json');

@Injectable({
  providedIn: 'root'
})
export class CosNodesService {
  servicesData = localData['services'];
  nodeResiliency = localData['nodeResiliency'];
  interfaceData = localData['interfaces'];
  disks = localData['disks'];
  storagePartition = localData['storagePartition'];

  getCosNodeServices(){
    return this.servicesData;
  }
  getNodeResiliency(){
    return this.nodeResiliency;
  }

  getInterfaceData(){
    return this.interfaceData;
  }

  getDisks(){
    return this.disks;
  }

  getStoragePartition(){
    return this.storagePartition;
  }

}

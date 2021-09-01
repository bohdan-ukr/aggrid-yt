import { Component, OnInit } from '@angular/core';
import { IHeaderAngularComp } from 'ag-grid-angular';
import { IAfterGuiAttachedParams, IHeaderParams, IRowModel } from 'ag-grid-community';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements IHeaderAngularComp {
  params: IHeaderParams;
  value: boolean = false;

  constructor() { }


  agInit(params: IHeaderParams): void {
    this.params = params;
    params.api.addEventListener('selectionChanged', this.onSelectionChanged.bind(this));
  }

  onSelectionChanged($event) {
    const selectedRowCount = $event.api.getSelectedNodes().length;
    const rowModel: IRowModel = $event.api.getModel();
    const rowCount = rowModel.getRowCount();
    if (selectedRowCount === rowCount) {
      this.value = true;
    } else {
      this.value = false;
    }
  }

  onChange($event) {
    if ($event) {
      this.params.api.selectAll();
    } else {
      this.params.api.deselectAll();
    }
  }

  refresh(params: IHeaderParams): boolean {
    var state = false;
    return state;
  }

}

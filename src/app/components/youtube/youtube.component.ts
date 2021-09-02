import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { formatDate } from '@angular/common';
import { YtDataService } from 'src/app/services/yt-data.service';
import 'ag-grid-enterprise';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { GetMainMenuItemsParams, IRowModel, MenuItemDef } from 'ag-grid-community';
import { YouTubeDataResponseModel } from '../../models/ytdataresponse.models';


@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {

  gridApi: any;
  gridColumnApi: any;

  response: any;
  items: any;
  rowData: YouTubeDataResponseModel[];

  frameworkComponents;

  columnDefs = [
    {
      colId: 'checkbox',
      headerComponentFramework: CheckboxComponent,
      checkboxSelection: true,
      width: 50
    },
    {
      field: 'thumbnails',
      headerName: '',
      cellRenderer: this.defaultImageRenderer,
      width: 150
    },
    {
      field: 'title',
      headerName: 'Video Title',
      headerGroupComponent:
      'customHeaderGroupComponent',
      editable: true,
      sortable: true,
      cellRenderer: this.nameLinkRenderer,
      filter: true,
      flex: 2
    },
    {
      field: 'description',
      headerName: 'Description',
      sortable: true,
      filter: true,
      flex: 1
    },
    {
      field: 'publishedAt',
      headerName: 'Published on',
      cellRenderer: this.publishedDataFormat,
      sortable: true,
      filter: true,
      flex: 1
    }
  ];


  constructor(private YtData: YtDataService) {
    this.frameworkComponents = {
      customHeaderGroupComponent: CheckboxComponent,
    };
  }


  ngOnInit(): void {
    this.getYouTubeData();
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }


  getYouTubeData() {
    this.YtData.getData().pipe(map(val => {
      return val.items.map((item) => {
        return {
          videoId: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          publishedAt: item.snippet.publishedAt,
          defaultImage: item.snippet.thumbnails.default.url,
        };
      });
    })).subscribe((response: YouTubeDataResponseModel[]) => {
      this.rowData = response;
    });

  }


  defaultImageRenderer(params) {
    return `<img alt="${params.data.defaultImage}" src="${params.data.defaultImage}">`;
  }

  nameLinkRenderer(params) {
    return `<a target="_blank" href="https://www.youtube.com/watch?v=${params.data.videoId}">${params.data.title}</a>`;
  }

  publishedDataFormat(params) {
    return formatDate(params.data.publishedAt, 'yyyy-MM-dd', 'en-US');
  }


  getContextMenuItems(params) {
    if (params.column.getId() == 'title') {
      const result = [
        'copy',
        {
          name: 'Open in new window',
          checked: true,
          action() {
            window.open(`https://www.youtube.com/watch?v=${params.node.data.videoId}`, '_blank');
          },
        },
      ];
      return result;
    }
  }

  getMainMenuItems(params: GetMainMenuItemsParams): (string | MenuItemDef)[] {
    const selectedRowCount = params.api.getSelectedNodes().length;
    const rowModel: IRowModel = params.api.getModel();
    const rowCount = rowModel.getRowCount();
    const checkboxColumn = params.columnApi.getColumn('checkbox');
    const isCheckboxColumnVisible = checkboxColumn.isVisible();
    const mainMenuItems: MenuItemDef[] = [{
      name: '<button type="button">Selection mode</button>',
      action() {
        params.columnApi.setColumnVisible(checkboxColumn, !isCheckboxColumnVisible);
      },
    }];
    if (isCheckboxColumnVisible) {
      mainMenuItems.push({
        name: `Selected records count: ${selectedRowCount}`,
      });
    }
    mainMenuItems.push({
      name: `Total count: ${rowCount}`,
    });
    return mainMenuItems;
  }
}




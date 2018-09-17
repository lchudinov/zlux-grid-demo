import {
  AfterContentInit,
  Component,
  ViewChild
} from '@angular/core';
import { ZluxGridComponent } from '@zlux/grid';
import { ZluxPaginatorComponent } from '@zlux/widgets';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  @ViewChild('grid') grid: ZluxGridComponent;
  @ViewChild('paginator') paginator: ZluxPaginatorComponent;
  private rowsPerPage = 15;
  private readonly displayHints = {
    isCustomTemplating: true,
    // note: custom templating doesn't work without formatParameters
    formatParameters: {
      valueMapping: '0'
    }
  };
  columnMetaData: any = {
    columnMetaData: [
      {
        columnIdentifier: 'code',
        shortColumnLabel: 'messageCode',
        longColumnLabel: 'Message Code',
        rawDataType: 'string',
        defaultSortDirection: 'A',
        sortType: 'lexical',
        sortableColumn: true,
        displayHints: {...this.displayHints, defaultcolumnWidth: '170px'}
      },
      {
        columnIdentifier: 'text',
        shortColumnLabel: 'description',
        longColumnLabel: 'Description',
        rawDataType: 'string',
        defaultSortDirection: 'A',
        sortType: 'lexical',
        sortableColumn: true,
        displayHints: {...this.displayHints, defaultcolumnWidth: '320px'}
      },
      {
        columnIdentifier: 'date',
        shortColumnLabel: 'date',
        longColumnLabel: 'Date',
        rawDataType: 'string',
        defaultSortDirection: 'A',
        sortType: 'lexical',
        sortableColumn: true,
        displayHints: {...this.displayHints, defaultcolumnWidth: '100px'}
      },
      {
        columnIdentifier: 'workflow',
        shortColumnLabel: 'workflow',
        longColumnLabel: 'Corresponding Workflow',
        rawDataType: 'string',
        defaultSortDirection: 'A',
        sortType: 'lexical',
        sortableColumn: true,
        displayHints: {...this.displayHints, defaultcolumnWidth: '200px'}
      }
    ]
  };
  rows = [];
  rowsToDisplay = [];

  ngAfterContentInit() {
    this.paginator.changePage(0);
  }
  onPageChange(event: {first: number, rows: number}): void {
    console.log(`onPageChange ${JSON.stringify(event)}`);
    this.rowsPerPage = event.rows;
    this.rowsToDisplay= this.rows.slice(event.first, event.first + event.rows);
  }

  onRowsPerPageChange(newRowsPerPage: number): void {
    console.log(`new value for rows per page: ${newRowsPerPage}`);
    window.setTimeout(_ => this.onPageChange({ first: this.paginator.pageIndex * newRowsPerPage, rows: newRowsPerPage }));
  }

}

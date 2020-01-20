import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import{ DataService} from '../data.service'
@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  public display= [];
  spinner= true;
  Dab: MatTableDataSource<any>
  displayedColumns: string[] = ['Name', 'Location', 'Reason', 'Number', 'Date Requested'];
  @ViewChild(MatPaginator, {static:false}) paginator: MatPaginator;

  constructor(private _dataservice:DataService) { }

  ngOnInit() {
    this._dataservice.getHistory()
    .subscribe(data => {
      this.spinner= false;
      this.display = data;
      this.Dab = new MatTableDataSource(this.display)
      this.Dab.paginator = this.paginator

    })
  }

  }

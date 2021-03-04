import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { AlbunsService } from 'src/app/services/albuns.service';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  dataSource: any;
  displayedColumns: string[] = ['userId', 'id', 'title'];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  totalRows!: number;
  pageIndex: number = 1;
  pageSize: number = 5;

  constructor(private router: Router,
    private _albunsService: AlbunsService,
    private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Álbuns',
      icon: 'book',
      routeUrl: '/albuns'
    }
  }
  ngOnInit(): void {
    this.getAlbuns()
  }

  getAlbuns() {
    this._albunsService.getAlbuns(this.pageIndex, this.pageSize).subscribe((res) => {
      this.dataSource = res
    })
    this._albunsService.getAlbunsLength().subscribe((res) => { this.totalRows = res.length })
  }

  proximaPagina() {
    this.pageIndex = this.paginator.pageIndex + 1
    this.pageSize = this.paginator.pageSize
    this.getAlbuns()
  }
}

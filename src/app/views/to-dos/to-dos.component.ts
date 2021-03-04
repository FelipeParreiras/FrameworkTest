import { TodosService } from './../../services/todos.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {

  dataSource: any = [];
  filtro: any = 'todas'
  displayedColumns: string[] = ['userId', 'id', 'title', 'completed'];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  totalRows!: number;
  pageIndex: number = 1;
  pageSize: number = 5;

  constructor(private _todosService: TodosService,
    private headerService: HeaderService) {
    headerService.headerData = {
      title: 'TO-DOs',
      icon: 'offline_pin',
      routeUrl: '/todos'
    }
  }
  ngOnInit(): void {
    this.getTodos()
  }
  getTodos() {
    this._todosService.getTodos(this.filtro, this.pageIndex, this.pageSize).subscribe((res) => {
      this.dataSource = res
    }
    )
    this._todosService.getTodosLength(this.filtro).subscribe((res) => { this.totalRows = res.length })
  }
  proximaPagina() {
    this.pageIndex = this.paginator.pageIndex + 1
    this.pageSize = this.paginator.pageSize
    this.getTodos()
  }
}

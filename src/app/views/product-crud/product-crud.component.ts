import { ProductService } from './../../services/product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'
import { HeaderService } from 'src/app/services/header.service';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  dataSource: any;
  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  totalRows!: number;
  pageIndex: number = 1;
  pageSize: number = 5;

  constructor(private router: Router,
    private _productService: ProductService,
    private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Postagens',
      icon: 'description',
      routeUrl: '/products'
    }
  }
  ngOnInit(): void {
    this.getPosts()
  }

  getPosts() {
    this._productService.getPosts(this.pageIndex, this.pageSize).subscribe((res) => {
      this.dataSource = res
    })
  this._productService.getPostsLength().subscribe((res) => { this.totalRows = res.length })
}
proximaPagina() {
  this.pageIndex = this.paginator.pageIndex + 1
  this.pageSize = this.paginator.pageSize
  this.getPosts()
}
}

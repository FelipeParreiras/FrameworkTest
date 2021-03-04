import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ToDosComponent } from './views/to-dos/to-dos.component';
import { AlbumComponent } from './views/album/album.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    ToDosComponent,
    AlbumComponent,
    ProductCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatSelectModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }

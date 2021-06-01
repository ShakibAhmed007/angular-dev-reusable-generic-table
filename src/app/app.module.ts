import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BookListComponent } from './book-list/book-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { GenericTableComponent } from './generic-table/generic-table.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [BrowserModule, FormsModule, MatTableModule],
  declarations: [
    AppComponent,
    HelloComponent,
    BookListComponent,
    UserListComponent,
    GenericTableComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

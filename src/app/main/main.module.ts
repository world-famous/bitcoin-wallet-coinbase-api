import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { GraphComponent } from './graph/graph.component';
import { TableOrdersComponent } from './graph/table-orders/table-orders.component';
import { TableTradesComponent } from './graph/table-trades/table-trades.component';
import { ChartComponent } from './graph/chart/chart.component';
import { OrdersComponent } from './graph/orders/orders.component';
import { NavComponent } from './nav/nav.component';
import { DropdownComponent } from './dropdown/dropdown.component';


@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    MainComponent,
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    StatusBarComponent,
    SideBarComponent,
    GraphComponent,
    TableOrdersComponent,
    TableTradesComponent,
    ChartComponent,
    OrdersComponent,
    NavComponent,
    DropdownComponent,
  ]
})
export class MainModule { }

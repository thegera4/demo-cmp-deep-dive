import { Component } from '@angular/core';
import { TicketsComponent } from "./tickets/tickets.component";
import { TrafficComponent } from "./traffic/traffic.component";
import { ServerStatusComponent } from "./server-status/server-status.component";
import { DashboardItemComponent } from "./dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TicketsComponent, TrafficComponent, ServerStatusComponent, DashboardItemComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
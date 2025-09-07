import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  @Input({required: true}) ticket!: Ticket;
  detailsVisible: boolean = true;
  @Output() closeTicket = new EventEmitter();

  onToggleDetails(): void { this.detailsVisible = !this.detailsVisible; }

  onMarkAsCompleted(): void { this.closeTicket.emit(); }

}
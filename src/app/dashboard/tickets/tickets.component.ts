import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket/ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAddTicket(ticketData: { title: string, request: string }): void {
    const newTicket: Ticket = {
      id: 't' + (this.tickets.length + 1),
      title: ticketData.title,
      request: ticketData.request,
      status: 'open'
    };
    this.tickets.push(newTicket);
  }

  onCloseTicket(ticketId: string): void {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === ticketId) {
        return { ...ticket, status: 'closed' };
      }
      return ticket;
    });
  }

}
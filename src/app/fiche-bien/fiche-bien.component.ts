import { Component } from '@angular/core';

@Component({
  selector: 'app-fiche-bien',
  templateUrl: './fiche-bien.component.html',
  styleUrls: ['./fiche-bien.component.css']
})
export class FicheBienComponent {
  pricePerNight: number = 150; // Prix par nuit
  totalPrice: number = 0; // Prix total
  startDate: string = ''; // Date de début
  endDate: string = ''; // Date de fin
  numberOfTravelers: number = 1; // Nombre de voyageurs

  // Calculer le prix total
  calculateTotalPrice(): void {
    if (this.startDate && this.endDate) {
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);
      const timeDiff = end.getTime() - start.getTime();
      const days = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Nombre de jours

      if (days > 0) {
        this.totalPrice = days * this.pricePerNight * this.numberOfTravelers;
      } else {
        this.totalPrice = 0; // Si les dates sont invalides
      }
    } else {
      this.totalPrice = 0; // Si les dates ne sont pas sélectionnées
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = ['a.png', 'b.png', 'c.png', 'd.png', 'e.png', 'f.png', 'g.png', 'h.png', 'i.png', 'j.png', 'k.png', 'l.png', 'm.png', 'n.png', 'o.png', 'p.png', 'q.png', 'r.png', 's.png', 't.png', 'u.png', 'v.png'];
  cities = ['Paris', 'Lyon', 'Marseille', 'Bordeaux', 'Lille', 'Toulouse', 'Nice'];

  getRandomImage(): string {
    const randomIndex = Math.floor(Math.random() * this.images.length);
    return `assets/${this.images[randomIndex]}`;
  }

  getRandomCity(): string {
    const randomIndex = Math.floor(Math.random() * this.cities.length);
    return this.cities[randomIndex];
  }
}

import { Component, OnInit } from '@angular/core';

interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  location: string;
  likes: number;
  dislikes: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = ['a.png', 'b.png', 'c.png', 'd.png', 'e.png', 'f.png', 'g.png', 'h.png', 'i.png', 'j.png', 'k.png', 'l.png', 'm.png', 'n.png', 'o.png', 'p.png', 'q.png', 'r.png', 's.png', 't.png', 'u.png', 'v.png'];
  cities = ['Paris', 'Lyon', 'Marseille', 'Bordeaux', 'Lille', 'Toulouse', 'Nice'];

  properties: Property[] = [];

  ngOnInit(): void {
    this.generateProperties(8); // Par exemple, créer 8 propriétés
  }

  generateProperties(count: number): void {
    for (let i = 1; i <= count; i++) {
      const property: Property = {
        id: i.toString(),
        title: `<Propriété> #${i}`,
        description: `Une belle propriété située à ${this.getRandomCity()}.`,
        price: this.getRandomPrice(),
        image: this.getRandomImage(),
        location: this.getRandomCity(),
        likes: 0,
        dislikes: 0
      };
      this.properties.push(property);
    }
  }

  getRandomImage(): string {
    const randomIndex = Math.floor(Math.random() * this.images.length);
    return `assets/${this.images[randomIndex]}`;
  }

  getRandomCity(): string {
    const randomIndex = Math.floor(Math.random() * this.cities.length);
    return this.cities[randomIndex];
  }

  getRandomPrice(): number {
    return Math.floor(Math.random() * 151) + 50; // Prix entre 50 et 200 €
  }

  likeProperty(index: number): void {
    this.properties[index].likes++;
  }

  dislikeProperty(index: number): void {
    this.properties[index].dislikes++;
  }
}

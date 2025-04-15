import { Component, OnInit } from '@angular/core';

interface Property {
  title: string;
  location: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // Tableau de propriétés
  properties: Property[] = [
    {
      title: 'Appartement confortable',
      location: 'Paris',
      price: 50,
      image: 'assets/a.png'
    },
    {
      title: 'Maison avec jardin',
      location: 'Lyon',
      price: 120,
      image: 'assets/b.png'
    },
    {
      title: 'Studio moderne',
      location: 'Marseille',
      price: 75,
      image: 'assets/c.png'
    },
    {
      title: 'Appartement vue mer',
      location: 'Nice',
      price: 90,
      image: 'assets/d.png'
    },
    {
      title: 'Chalet montagne',
      location: 'Chamonix',
      price: 150,
      image: 'assets/e.png'
    },
    {
      title: 'Loft design',
      location: 'Bordeaux',
      price: 85,
      image: 'assets/f.png'
    },
    {
      title: 'Maison de campagne',
      location: 'Provence',
      price: 110,
      image: 'assets/g.png'
    },
    {
      title: 'Appartement centre-ville',
      location: 'Toulouse',
      price: 65,
      image: 'assets/h.png'
    }
  ];

  // Propriété courante (pour l'ajout/édition)
  currentProperty: Property = {
    title: '',
    location: '',
    price: 0,
    image: ''
  };

  // Flag pour savoir si on est en mode édition
  isEditing = false;
  
  // Index de la propriété en cours d'édition
  editIndex = -1;

  constructor() { }

  ngOnInit(): void {
  }

  // Ajouter ou mettre à jour une propriété
  saveProperty(): void {
    if (this.isEditing) {
      // Mise à jour d'une propriété existante
      this.properties[this.editIndex] = {...this.currentProperty};
    } else {
      // Ajout d'une nouvelle propriété
      this.properties.push({...this.currentProperty});
    }
    // Réinitialiser le formulaire
    this.resetForm();
  }

  // Préparer le formulaire pour édition
  editProperty(index: number): void {
    this.isEditing = true;
    this.editIndex = index;
    this.currentProperty = {...this.properties[index]};
  }

  // Supprimer une propriété
  deleteProperty(index: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette propriété ?')) {
      this.properties.splice(index, 1);
    }
  }

  // Réinitialiser le formulaire
  resetForm(): void {
    this.currentProperty = {
      title: '',
      location: '',
      price: 0,
      image: ''
    };
    this.isEditing = false;
    this.editIndex = -1;
  }
}

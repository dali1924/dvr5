import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Medecin } from '../model/medecin.model';
import { MedecinService } from '../service/medecin.service';
import { SearchFilterPipe } from '../search-filter-pipe';

@Component({
  selector: 'app-recherche-par-nom',
  imports: [FormsModule, DatePipe, SearchFilterPipe],
  templateUrl: './recherche-par-nom.html',
  styles: ``
})
export class RechercheParNom implements OnInit {
  nomMedecin!: string;
  medecins!: Medecin[];
  allMedecins!: Medecin[];
  searchTerm: string = '';

  constructor(private medecinService: MedecinService) { }

  ngOnInit(): void {
    this.medecins = this.medecinService.listeMedecins();
  }

  rechercherMedecins() {
    if (this.nomMedecin)
      this.medecins = this.medecinService.rechercherParNom(this.nomMedecin);
    else
      this.medecins = this.medecinService.listeMedecins();
  }

  onKeyUp(filterText: string) {
    this.medecins = this.allMedecins.filter(item =>
      item.nomMedecin.toLowerCase().includes(filterText.toLowerCase()));
  }
}
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Medecin } from '../model/medecin.model';
import { Specialite } from '../model/specialite.model';
import { MedecinService } from '../service/medecin.service';

@Component({
  selector: 'app-recherche-par-specialite',
  imports: [FormsModule, DatePipe],
  templateUrl: './recherche-par-specialite.html',
  styles: ``
})
export class RechercheParSpecialite implements OnInit {
  medecins!: Medecin[];
  idSpec!: number;
  specialites!: Specialite[];

  constructor(private medecinService: MedecinService) { }

  ngOnInit(): void {
    this.specialites = this.medecinService.listeSpecialites();
  }

  onChange() {
    this.medecins = this.medecinService.rechercherParSpecialite(this.idSpec);
  }
}
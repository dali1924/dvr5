import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Medecin } from '../model/medecin.model';
import { MedecinService } from '../service/medecin.service';

@Component({
  selector: 'app-medecins',
  imports: [DatePipe, RouterLink],
  templateUrl: './medecins.html',
  styleUrl: './medecins.css'
})
export class Medecins {
  medecins: Medecin[];

  constructor(private medecinService: MedecinService) {
    this.medecins = this.medecinService.listeMedecins();
  }

  supprimerMedecin(m: Medecin) {
    this.medecinService.supprimerMedecin(m);
  }
}
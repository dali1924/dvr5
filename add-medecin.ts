import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Medecin } from '../model/medecin.model';
import { Specialite } from '../model/specialite.model';
import { MedecinService } from '../service/medecin.service';

@Component({
  selector: 'app-add-medecin',
  imports: [FormsModule],
  templateUrl: './add-medecin.html',
  styleUrl: './add-medecin.css'
})
export class AddMedecin implements OnInit {
  newMedecin = new Medecin();
  specialites!: Specialite[];
  newIdSpec!: number;
  newSpecialite!: Specialite;

  constructor(private medecinService: MedecinService,
              private router: Router) { }

  ngOnInit() {
    this.specialites = this.medecinService.listeSpecialites();
  }

  addMedecin() {
    this.newSpecialite = this.medecinService.consulterSpecialite(this.newIdSpec);
    this.newMedecin.specialite = this.newSpecialite;
    this.medecinService.ajouterMedecin(this.newMedecin);
    this.router.navigate(['medecins']);
  }
}
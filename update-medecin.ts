import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Medecin } from '../model/medecin.model';
import { Specialite } from '../model/specialite.model';
import { MedecinService } from '../service/medecin.service';

@Component({
  selector: 'app-update-medecin',
  imports: [FormsModule, DatePipe],
  templateUrl: './update-medecin.html',
  styleUrl: './update-medecin.css'
})
export class UpdateMedecin implements OnInit {
  currentMedecin = new Medecin();
  specialites!: Specialite[];
  updatedSpecId!: number;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private medecinService: MedecinService) { }

  ngOnInit(): void {
    this.specialites = this.medecinService.listeSpecialites();
    this.currentMedecin = this.medecinService.consulterMedecin(
      this.activatedRoute.snapshot.params['id']);
    this.updatedSpecId = this.currentMedecin.specialite.idSpec;
  }

  updateMedecin() {
    this.currentMedecin.specialite =
      this.medecinService.consulterSpecialite(this.updatedSpecId);
    this.medecinService.updateMedecin(this.currentMedecin);
    this.router.navigate(['medecins']);
  }
}

import { Routes } from '@angular/router';
import { Medecins } from './medecins/medecins';
import { AddMedecin } from './add-medecin/add-medecin';
import { UpdateMedecin } from './update-medecin/update-medecin';
import { RechercheParSpecialite } from './recherche-par-specialite/recherche-par-specialite';
import { RechercheParNom } from './recherche-par-nom/recherche-par-nom';

export const routes: Routes = [
  { path: "medecins", component: Medecins },
  { path: "add-medecin", component: AddMedecin },
  { path: "updateMedecin/:id", component: UpdateMedecin },
  { path: "rechercheParSpecialite", component: RechercheParSpecialite },
  { path: "rechercheParNom", component: RechercheParNom },
  { path: "", redirectTo: "medecins", pathMatch: "full" }
];
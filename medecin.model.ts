import { Specialite } from "./specialite.model";

export class Medecin {
  idMedecin!: number;
  nomMedecin!: string;
  tarifMedecin!: number;
  dateEmbauche!: Date;
  specialite!: Specialite;
}
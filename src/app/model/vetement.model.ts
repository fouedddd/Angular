import { Boutique } from "./boutique.model";

export class Vetement {
    idVetement: number;
    nomVetement: string;
    prixVetement: number;
    quantiteVetement: number;
    typeVetement: string;
    boutique:Boutique;
}

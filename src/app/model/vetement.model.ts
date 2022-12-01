import { Boutique } from "./boutique.model";

export class Vetement {
    id_vetement: number;
    nom_vetement: string;
    prix_vetement: number;
    quantite_vetement: number;
    type_vetement: string;
    boutique:Boutique;
}

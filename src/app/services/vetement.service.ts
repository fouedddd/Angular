import { Injectable } from '@angular/core';
import { Boutique } from '../model/boutique.model';
import { Vetement } from '../model/vetement.model';

@Injectable({
  providedIn: 'root'
})
export class VetementService {

  private vetements: Vetement[]; //un tableau de Vetement
  private vetement : Vetement;
  private boutiques : Boutique[];
  private boutique : Boutique;
  constructor() {
    this.vetements = [
      {
        id_vetement: 1, nom_vetement: "PCpantalon ", prix_vetement: 3000.600, quantite_vetement
          : 5, type_vetement: "hiver",boutique :{id_boutique : 1,adresse:"nabeul",nom_bout : "strano"}
      },
      {
        id_vetement: 2, nom_vetement: "chemise", prix_vetement: 450, quantite_vetement
          : 2, type_vetement: "ete",boutique :{id_boutique : 1,adresse:"nabeul",nom_bout : "strano"}
      },
      {
        id_vetement: 3, nom_vetement: "chapaux", prix_vetement: 900.123, quantite_vetement
          : 10, type_vetement: "hiver",boutique :{id_boutique : 1,adresse:"nabeul",nom_bout : "strano"}
      }
    ];
  }
  listeVetements(): Vetement[] {
    return this.vetements;
  }
  ajouterVetement(vet: Vetement) {
    this.vetements.push(vet);
  }
  supprimerVetement(vet: Vetement) {
    //supprimer le vetement vet du tableau produits
    const index = this.vetements.indexOf(vet, 0);
    if (index > -1) {
      this.vetements.splice(index, 1);
    }
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.produits.splice(index, 1);
    }
    }); */
  }
  consulterVetement(id: number): Vetement {
    this.vetement = this.vetements.find(p => p.id_vetement == id);
    return this.vetement;

  }

  trierVetements(){
    this.vetements = this.vetements.sort((n1,n2) => {
    if (n1.id_vetement > n2.id_vetement) {
    return 1;
    }
    if (n1.id_vetement < n2.id_vetement) {
    return -1;
    }
    return 0;
    });
    }
    
  updateVetement(v:Vetement)
{
// console.log(v);
this.supprimerVetement(v);
this.ajouterVetement(v);
this.trierVetements();
}
listeBoutique():Boutique[] {
  return this.boutiques;
  }
  consulterBoutique(id:number): Boutique{
    return this.boutiques.find(bou => bou.id_boutique == id)!;
    }
  

}

import { Injectable } from '@angular/core';
import { Boutique } from '../model/boutique.model';
import { Vetement } from '../model/vetement.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class VetementService {

apiURL: string = 'http://localhost:8080/vetement/api';

  constructor(private http : HttpClient) {
   
  }
  listeVetements(): Observable<Vetement[]>  {
  
    return this.http.get<Vetement[]>(this.apiURL);
  }
  ajouterVetement( vets: Vetement):Observable<Vetement>{
    return this.http.post<Vetement>(this.apiURL, vets, httpOptions);
    }
    supprimerVetetement(id : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }
      consulterVetement(id: number): Observable<Vetement> {
        const url = `${this.apiURL}/${id}`;
        return this.http.get<Vetement>(url);
        }
        updateVetement(vets :Vetement) : Observable<Vetement>
{
return this.http.put<Vetement>(this.apiURL, vets, httpOptions);
}
listeBoutique():Observable<Boutique[]>{
  return this.http.get<Boutique[]>(this.apiURL+"/bou");
  }
      
    
}
  /*ajouterVetement(vet: Vetement) {
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
    }); 
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
  

}*/

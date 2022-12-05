import { Component, OnInit } from '@angular/core';
import { VetementService } from '../services/vetement.service';
import { Vetement } from '../model/vetement.model';

@Component({
  selector: 'app-vetements',
  templateUrl: './vetements.component.html',
  styleUrls: ['./vetements.component.css']
})
export class VetementsComponent implements OnInit {
  vetements : Vetement[]; //un tableau de chînes de caractères

  constructor(private vetementservice: VetementService ) {
   
    }
  ngOnInit(): void {
    this.vetementservice.listeVetements().subscribe(vets=>{
      console.log(vets)
      this.vetements=vets;
    })
  }
  chargerVetements(){
    this.vetementservice.listeVetements().subscribe(vets => {
    console.log(vets);
    this.vetements = vets;
    });
    }
    supprimerVetement(v: Vetement)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.vetementservice.supprimerVetetement(v.idVetement).subscribe(() => {
console.log("Vetement supprimé");
this.chargerVetements();
});
} 
  
 /* supprimerVetement(v: Vetement)
{
console.log(v);
let conf = confirm("Etes-vous sûr ?");
 if (conf)
this.vetementservice.supprimerVetement(v);
}*/
}

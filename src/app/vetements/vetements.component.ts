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
    this.vetements = vetementservice.listeVetements();
    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  supprimerVetement(v: Vetement)
{
//console.log(v);
let conf = confirm("Etes-vous sûr ?");
 if (conf)
this.vetementservice.supprimerVetement(v);
}
}

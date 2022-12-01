import { Component } from '@angular/core';
import { VetementService } from '../services/vetement.service';
import { Vetement } from '../model/vetement.model';
import { Boutique } from '../model/boutique.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-vetement',
  templateUrl: './add-vetement.component.html',
  styleUrls: ['./add-vetement.component.css']
})
export class AddVetementComponent {

boutique! : Boutique[];
newIdCat! : number;
newBoutique! :Boutique;
  newVetement = new Vetement();
  constructor(private vetementService: VetementService,private router :Router) { }
  addVetement(){
    this.newBoutique =
this.vetementService.consulterBoutique(this.newIdCat);
this.newVetement.boutique = this.newBoutique;



    // console.log(this.newProduit);
    this.vetementService.ajouterVetement(this.newVetement);
    this.router.navigate(['vetements']);
    }
    
}

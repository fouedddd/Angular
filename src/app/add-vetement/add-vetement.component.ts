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
newIdBou! : number;
newBoutique! :Boutique;
  newVetement = new Vetement();
  constructor(private vetementService: VetementService,private router :Router) { }

  ngOnInit(): void {
    this.vetementService.listeBoutique().
    subscribe(bou => {this.boutique = bou;
    console.log(bou);
    });
    }
    
  addVetement(){
    this.newVetement.boutique = this.boutique.find(bou => bou.idBoutique == this.newIdBou)!;
    this.vetementService.ajouterVetement(this.newVetement)
    .subscribe(vets => {
    console.log(vets);
    this.router.navigate(['vetements']);
    });
    }
    


    // console.log(this.newProduit);
   /*  this.vetementService.ajouterVetement(this.newVetement);
    this.router.navigate(['vetements']); */
    }
    


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VetementService } from '../services/vetement.service';
import { Vetement } from '../model/vetement.model';
import { Boutique } from '../model/boutique.model';

@Component({
  selector: 'app-update-vetement',
  templateUrl: './update-vetement.component.html',
  styleUrls: ['./update-vetement.component.css']
})
export class UpdateVetementComponent implements OnInit {
  currentVetement = new Vetement();
  boutiques! : Boutique[];
updatedBouId! : number;


  
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private vetementService: VetementService) { }


  ngOnInit() {
    // console.log(this.route.snapshot.params.id);
    this.boutiques = this.vetementService.listeBoutique();

    this.currentVetement = this.vetementService.consulterVetement(this.activatedRoute.snapshot.params['id']);
    console.log(this.currentVetement);

  }
  updateVetement()
{ //console.log(this.currentProduit);
  this.currentVetement.boutique=this.vetementService.consulterBoutique(this.updatedBouId);

this.vetementService.updateVetement(this.currentVetement);
this.router.navigate(['vetements']);
}
}

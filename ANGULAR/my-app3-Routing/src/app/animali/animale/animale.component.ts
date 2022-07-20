import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Animale } from '../animale.model';
import { AnimaliService } from '../animali.service';

@Component({
  selector: 'app-animale',
  templateUrl: './animale.component.html',
  styleUrls: ['./animale.component.css']
})
export class AnimaleComponent implements OnInit {

  animale: Animale;

  constructor(private route: ActivatedRoute, private animaliService: AnimaliService) { }

  ngOnInit(): void {

    const id = +this.route.snapshot.params['id']; //metto + davanti per trasformare la string in un number

    this.animale = this.animaliService.getAnimaleById(id);

    this.route.params
        .subscribe(
          (params: Params) => {
            this.animale = this.animaliService.getAnimaleById(+params['id'])
          }
        )

  }

}

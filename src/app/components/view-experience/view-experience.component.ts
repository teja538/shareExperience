import { Component, OnInit } from '@angular/core';
import { ServeExperienceService } from 'src/app/services/serve-experience.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-experience',
  templateUrl: './view-experience.component.html',
  styleUrls: ['./view-experience.component.css']
})
export class ViewExperienceComponent implements OnInit {

  currentExperience = null;
  message = '';

  constructor( 
    private serveExperienceService:ServeExperienceService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.message = '';
    this.getExperience(this.route.snapshot.paramMap.get('id'));
  }
  getExperience(id):void
  {
    this.serveExperienceService.get(id)
    .subscribe(
      data=>{
        this.currentExperience = data;
        console.log(data)
      },
      error => {
        console.log(error)
      }
    );
  }

}

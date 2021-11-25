import { Component, OnInit } from '@angular/core';
import { ServeExperienceService } from 'src/app/services/serve-experience.service'

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.css']
})
export class ExperienceListComponent implements OnInit {

  experiences: any;
  currentExperience = null; //noneed
  currentIndex = -1; //noneed
  campanyName = '';

  constructor(private serveExperienceService:ServeExperienceService) { }

  ngOnInit(): void {
    //this.removeAllExperiences();
    this.retrieveExperiences();
  }
  retrieveExperiences()
  {
    this.serveExperienceService.getAll()
    .subscribe(
      data=>{
        this.experiences=data;
        console.log(data);
      },
      error=>{
        console.log(error);
        
      });
  }

  refreshList():void{
    this.retrieveExperiences();
    this.currentExperience = null;
    this.currentIndex = -1;
  }

  setActiveExperience(experience,index):void{ //noneed
    this.currentExperience = experience;
    this.currentIndex = index;
  }

  // removeAllExperiences(): void {
  //   this.serveExperienceService.deleteAll()
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.retrieveExperiences();
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  searchCompanyName(): void {
    this.serveExperienceService.findByCompanyName(this.campanyName)
      .subscribe(
        data => {
          this.experiences = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


}

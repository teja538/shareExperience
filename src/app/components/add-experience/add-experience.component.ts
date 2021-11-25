import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ServeExperienceService } from 'src/app/services/serve-experience.service'

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {

  experience={
    "name":"",
    "branch":"",
    "yop":"",
    "email":"",
    "companyName":"",
    "verdict":"",
    "role":"",
    "package":"",
    "expDoc":"",
    "quesAsked":"",
    "suggestions":"",
    "usefulLinks":""
  };
  submitted = false;

  constructor(private serveExperienceService:ServeExperienceService ) { }

  ngOnInit(): void {
  }

  saveExperience():void{
    const data = {
      "name":this.experience.name,
    "branch":this.experience.branch,
    "yop":this.experience.yop,
    "email":this.experience.email,
    "companyName":this.experience.companyName,
    "verdict":this.experience.verdict,
    "role":this.experience.role,
    "package":this.experience.package,
    "expDoc":this.experience.expDoc,
    "quesAsked":this.experience.quesAsked,
    "suggestions":this.experience.suggestions,
    "usefulLinks":this.experience.usefulLinks
    };

    this.serveExperienceService.create(data)
    .subscribe(
      res => {
        console.log(res);
        this.submitted = true;
      },
      err => {
        console.log(err)
      }
    );
  }

  addBulletText(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
      this.experience.quesAsked += '• '
    }

    if (this.experience.quesAsked.substr(this.experience.quesAsked.length - 1) == '\n') {
      this.experience.quesAsked = this.experience.quesAsked.substring(0, this.experience.quesAsked.length - 1);
    }
  }

  mytextOnFocus() {
    this.experience.quesAsked += '• ';
  }

  // nextLine(event)
  // {
  //   //var keycode = (event.keyCode ? event.keyCode : event.which);
  //   if (this.experience.suggestions.substr(this.experience.suggestions.length - 1) == '\n') {
  //     this.experience.suggestions = this.experience.suggestions.substring(0, this.experience.suggestions.length - 1);
  //   }

  // }


  newExperience():void{
    this.submitted = false;
    this.experience = {
      "name":"",
    "branch":"",
    "yop":"",
    "email":"",
    "companyName":"",
    "verdict":"",
    "role":"",
    "package":"",
    "expDoc":"",
    "quesAsked":"",
    "suggestions":"",
    "usefulLinks":""
    }
  }


}

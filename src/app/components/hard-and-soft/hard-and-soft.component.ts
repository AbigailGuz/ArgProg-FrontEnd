import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hard-and-soft',
  templateUrl: './hard-and-soft.component.html',
  styleUrls: ['./hard-and-soft.component.css']
})

export class HardAndSoftComponent implements OnInit{
 skill: Skill[] = [];

 constructor(private skills: SkillService, private tokenService: TokenService){}
  isLogged = false;


ngOnInit(): void {
  this.cargarSkills();
  if(this.tokenService.getToken()){
    this.isLogged = true;
  } else{
    this.isLogged = false;
  }
  }

  cargarSkills(): void{
    this.skills.lista().subscribe(
      data => {
        this.skill = data;
      }

    )
  }

  delete(id: number){
    if(id != undefined){
      this.skills.delete(id).subscribe(
        data =>{
          this.cargarSkills();
        }, err=>{
          alert("No se pudo borrar la skills")
        }
      )
    }
  }
 }
 
  

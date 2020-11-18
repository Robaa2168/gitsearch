import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  repoitems: any[];
  repoName:string= "bootsrap";

  constructor(private DataService: DataService) { 
    
  }

  findRepo () {
    this.DataService.UpdateRepo(this.repoName);
    this.DataService.searchrepos().subscribe(repo => {
     
      this.repoitems = repo["items"];
      console.log(this.repoitems);
    })
  }

  ngOnInit() {
    this.findRepo()
  }

}
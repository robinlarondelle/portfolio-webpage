import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private projects: Project[]

  constructor() { 
    this.projects = []
  }

  ngOnInit() {
    const studentHouse: Project = {
      imagelink: "",
      githublink: "",
      name: "StudentHouse"
    }

    const ticketstore: Project = {
      imagelink: "",
      githublink: "",
      name: "ticketstore"
    }

    const brwHvtSvr: Project = {
      imagelink: "",
      githublink: "",
      name: "brwHvtSvr"
    }

    const brwHvtPage: Project = {
      imagelink: "",
      githublink: "",
      name: "brwHvtPage"
    }

    const kramse: Project = {
      imagelink: "",
      githublink: "",
      name: "kramse"
    }

    const algoritmenDatastructures: Project = {
      imagelink: "",
      githublink: "",
      name: "algoritmenDatastructures"
    }

    const cineApp: Project = {
      imagelink: "",
      githublink: "",
      name: "cineApp"
    }

    const handPickedAgencies: Project = {
      imagelink: "",
      githublink: "",
      name: "handPickedAgencies"
    }

    this.projects.push(
      studentHouse,
      ticketstore,
      brwHvtSvr,
      brwHvtPage,
      kramse,
      algoritmenDatastructures, 
      cineApp, 
      handPickedAgencies
    )
  }
}

import {Component, OnInit} from '@angular/core';
import {Project} from "../../model/project";
import {ProjectService} from "../../service/project/project.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {
  }

  ngOnInit(): void {
    this.getAllProject();
  }

  private getAllProject() {
    this.projectService.getAll().subscribe(projects => {
      this.projects = projects;
    }, error => console.log(error))
  }
}

import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor(private rout : Router) { }

  getBack(): void {
    this.rout.navigate([""]);
  }
  }

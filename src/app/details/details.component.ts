import { Component, OnInit } from '@angular/core';
import resume_json from '../../assets/resume.json';
import { Resume } from '../models/resume.js';

@Component({
  selector: 'cv-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  step = 0;
  open: boolean;
  resume: Resume;

  constructor() {
    this.resume = resume_json as Resume;
  }

  ngOnInit() {
  }

  setStep(index: number) {
    this.step = index;
    this.open = true;
  }

  closed() {
    this.open = false;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}

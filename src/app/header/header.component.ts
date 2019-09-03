import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4plugins_wordCloud from '@amcharts/amcharts4/plugins/wordCloud';

@Component({
  selector: 'cv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    const chart = am4core.create('asdf', am4plugins_wordCloud.WordCloud);
    const series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());

    series.maxCount = 40;
    series.labels.template.tooltipText = '{word}: {value}';
    series.fontFamily = 'Courier New';
    series.maxFontSize = am4core.percent(30);
    series.dataFields.word = 'tag';
    series.dataFields.value = 'count';
    series.heatRules.push({
      target: series.labels.template,
      property: 'fill',
      min: am4core.color('#0000CC'),
      max: am4core.color('#CC00CC'),
      dataField: 'value'
     });

    series.data = [{
      tag: 'javascript',
      count: '30'
    }, {
      tag: 'java',
      count: '10'
    }, {
      tag: 'c#',
      count: '20'
    }, {
      tag: 'android',
      count: '5'
    }, {
      tag: 'python',
      count: '1'
    }, {
      tag: 'jquery',
      count: '5'
    }, {
      tag: 'html',
      count: '10'
    }, {
      tag: 'c++',
      count: '1'
    }, {
      tag: 'css',
      count: '20'
    }, {
      tag: 'mysql',
      count: '10'
    }, {
      tag: 'asp.net',
      count: '10'
    }, {
      tag: 'c',
      count: '1'
    }, {
      tag: '.net',
      count: '15'
    }, {
      tag: 'node.js',
      count: '25'
    }, {
      tag: 'json',
      count: '2'
    }, {
      tag: 'regex',
      count: '5'
    }, {
      tag: 'ajax',
      count: '2'
    }, {
      tag: 'asp.net-mvc',
      count: '3'
    }, {
      tag: 'linux',
      count: '15'
    }, {
      tag: 'angular',
      count: '25'
    }, {
      tag: 'database',
      count: '2'
    }, {
      tag: 'wpf',
      count: '15'
    }, {
      tag: 'windows',
      count: '10'
    }, {
      tag: 'reactjs',
      count: '10'
    }, {
      tag: 'html5',
      count: '15'
    }, {
      tag: 'eclipse',
      count: '10'
    }, {
      tag: 'mongodb',
      count: '5'
    }, {
      tag: 'bash',
      count: '5'
    }, {
      tag: 'github',
      count: '40'
    }, {
      tag: 'algorithm',
      count: '5'
    }, {
      tag: 'python',
      count: '5'
    }, {
      tag: 'visual-studio',
      count: '10'
    }, {
      tag: 'typescript',
      count: '40'
    }, {
      tag: 'RESTful',
      count: '10'
    }, {
      tag: 'unit-testing',
      count: '30'
    }, {
      tag: 'VScode',
      count: '30'
    }, {
      tag: 'web-services',
      count: '5'
    }, {
      tag: 'google-chrome',
      count: '15'
    }, {
      tag: 'OOP',
      count: '35'
    }, {
      tag: 'RXjS',
      count: '40'
    }, {
      tag: 'NGRX',
      count: '30'
    }, {
      tag: 'redux',
      count: '20'
    }];
  }

}

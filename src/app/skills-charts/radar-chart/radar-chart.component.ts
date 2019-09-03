import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import skills_json from '../../../assets/skils.json';
import { Skills } from '../../models/skills';

@Component({
  selector: 'cv-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {

    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    /* Create chart instance */
    const chart = am4core.create('radar-chart', am4charts.RadarChart);

    /* Add data */
    chart.data = (skills_json as Skills).skills;

    /* Create axes */
    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis() as any);
    categoryAxis.dataFields.category = 'name';

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis() as any);
    valueAxis.renderer.axisFills.template.fill = chart.colors.getIndex(2);
    valueAxis.renderer.axisFills.template.fillOpacity = 0.05;

    /* Create and configure series */
    const series = chart.series.push(new am4charts.RadarSeries());
    series.dataFields.valueY = 'value';
    series.dataFields.categoryX = 'skill';
    series.name = 'Skills';
    series.strokeWidth = 3;

  }

}

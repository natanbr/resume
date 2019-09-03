import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

const FONT_SIZE = 15;

@Component({
  selector: 'cv-bars-chart',
  templateUrl: './bars-chart.component.html',
  styleUrls: ['./bars-chart.component.scss']
})
export class BarsChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Create chart instance
    const chart = am4core.create('bars-chart', am4charts.XYChart);

    // Add data
    chart.data = [{
      name: 'TS Angular',
      points: 2.5,
      color: chart.colors.next(),
      bullet: '../../assets/angular.png'
    }, {
      name: 'React',
      points: 1,
      color: chart.colors.next(),
      bullet: 'https://www.amcharts.com/lib/images/faces/C02.png'
    }];

    const categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'name';
    categoryAxis.renderer.grid.template.strokeOpacity = 0;
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.renderer.labels.template.dx = -40;
    categoryAxis.renderer.minWidth = 120;
    categoryAxis.renderer.tooltip.dx = -40;

    const valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.inside = true;
    valueAxis.renderer.labels.template.fillOpacity = 0.3;
    valueAxis.renderer.grid.template.strokeOpacity = 0;
    valueAxis.min = 0;
    valueAxis.cursorTooltipEnabled = false;
    valueAxis.renderer.baseGrid.strokeOpacity = 0;
    valueAxis.renderer.labels.template.dy = 20;

    // Do not crop bullets
    chart.maskBullets = false;

    // Remove padding
    chart.paddingBottom = 30;

    // Create series
    const series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueX = 'points';
    series.dataFields.categoryY = 'name';
    series.columns.template.propertyFields.fill = 'color';
    series.columns.template.propertyFields.stroke = 'color';
    series.tooltip.pointerOrientation = 'vertical';
    series.columnsContainer.zIndex = 100;
    series.columns.template.column.cornerRadiusTopLeft = 5;
    series.columns.template.column.cornerRadiusTopRight = 5;
    series.columns.template.tooltipHTML = '{categoryY}: <b>{valueX}</b> { valueX > 1 ? \'years\': \'year\' }';

    const columnTemplate = series.columns.template;
    columnTemplate.height = am4core.percent(2);
    columnTemplate.maxHeight = 10;
    columnTemplate.column.cornerRadius(60, 10, 60, 10);
    columnTemplate.strokeOpacity = 0;

    // Add bullets
    const bullet = series.bullets.push(new am4charts.Bullet());

    const image = bullet.createChild(am4core.Image);
    // image.horizontalCenter = 'middle';
    image.verticalCenter = 'top';
    image.dy = -FONT_SIZE;
    // image.y = am4core.percent(100);
    image.height = 20;
    image.width = 20;
    image.propertyFields.href = 'bullet';
    image.tooltipText = series.columns.template.tooltipText;
    image.propertyFields.fill = 'color';
    image.filters.push(new am4core.DropShadowFilter());

    // tslint:disable-next-line: max-line-length
    series.heatRules.push({ target: columnTemplate, property: 'fill', dataField: 'valueX', min: am4core.color('#e5dc36'), max: am4core.color('#5faa46') });
  }

}

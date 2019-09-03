import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MorePanelComponent } from './more-panel/more-panel.component';
import { DetailsComponent } from './details/details.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { DetailRowComponent } from './details/detail-row/detail-row.component';
import { HeaderComponent } from './header/header.component';
import { SkillsChartsComponent } from './skills-charts/skills-charts.component';
import { BarsChartComponent } from './skills-charts/bars-chart/bars-chart.component';
import { RadarChartComponent } from './skills-charts/radar-chart/radar-chart.component';
import { SankeyChartComponent } from './skills-charts/sankey-chart/sankey-chart.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatChipsModule
  ],
  declarations: [
    AppComponent,
    MorePanelComponent,
    DetailsComponent,
    DetailRowComponent,
    HeaderComponent,
    SkillsChartsComponent,
    BarsChartComponent,
    RadarChartComponent,
    SankeyChartComponent,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

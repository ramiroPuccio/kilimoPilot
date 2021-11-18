import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Chart } from "chart.js"

@Component({
  selector: 'app-water-chart',
  templateUrl: './water-chart.component.html',
  styleUrls: ['./water-chart.component.scss']
})
export class WaterChartComponent implements OnChanges {
  @Input() currentPlot :{"id":number,
  "name":string,
  "farm_name": string,
  "crop": string,
  "water_per_week": string,
  "rains",
  "irrigations", };
  @Input() riegoSugerido:string;
  
  constructor() {
   }
  
  ngOnChanges() { 
    this.currentPlot.water_per_week = this.currentPlot.water_per_week.toString();
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          label: 'label 1',
          data: [ (this.currentPlot.rains.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)),parseFloat(this.currentPlot.irrigations),parseFloat(this.riegoSugerido)],
          backgroundColor: [
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.4)',
            'rgba(255, 0, 0, 0.6)'
          ]
        }],
        labels: ['Precipitaciones '+ (this.currentPlot.rains.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)).toFixed(2) +' mm','Riegos Acumulados '+ this.currentPlot.irrigations +' mm','Riego Sugerido '+ this.riegoSugerido +' mm']
      },
      options: {
        responsive: true,
        legend: {position : 'bottom',align : 'start'},
      }
    })
  }

}
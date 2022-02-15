import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Chart } from "chart.js"
import { Plot } from '../plot.model';

@Component({
  selector: 'app-water-chart',
  templateUrl: './water-chart.component.html',
  styleUrls: ['./water-chart.component.scss']
})
export class WaterChartComponent implements OnChanges {
  @Input() currentPlot : Plot;
  @Input() riegoSugerido: string;
  
  constructor() {
   }
  
  ngOnChanges() { 
    
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          label: 'label 1',
          data: [ (this.currentPlot.rains.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)),parseFloat(this.currentPlot.irrigations),parseFloat(this.riegoSugerido)],
          backgroundColor: [
            'rgba(54, 162, 235, 0.7)',
            'rgba(0,255,0,0.7)',
            'rgba(255, 0, 0, 0.1)'
          ]
        }],
        labels: ['Precipitaciones '+ (this.currentPlot.rains.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)).toFixed(2) +' mm','Riegos Acumulados '+ this.currentPlot.irrigations +' mm','Riego Sugerido '+ this.riegoSugerido +' mm']
      },
      options: {
        responsive: true,
        legend: {position : 'bottom',align : 'start'},
        title: {
              display: true,
              text: 'Agua por semana ' + this.currentPlot.water_per_week + ' mm',
        }
      }
    })
  }

}
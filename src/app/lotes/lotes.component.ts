import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { LotesService } from 'src/app/lotes.service';
@Component({
  selector: 'app-lotes',
  templateUrl: './lotes.component.html',
  styleUrls: ['./lotes.component.scss']
})
export class LotesComponent{
plots = [];
currentPlot : 
{"id":number,
"name":string,
"farm_name": string,
"crop": string,
"water_per_week": string,
"rains",
"irrigations", };

precipitaciones:number;
riegoSugerido;
inputWater = 0 ;
  constructor(
    private lotesService: LotesService,
  ) { }

  ngOnInit() {
    this.plots = this.lotesService.list()   
  }
  selectPlot(id){
    this.currentPlot = this.plots[id-1]; 
    this.precipitaciones = (this.currentPlot.rains.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)).toFixed(2);
  }
  
  userInputWater(value, currentPlot){
    this.inputWater = value;
   this.riegoSugerido = (parseFloat(currentPlot.water_per_week)-this.precipitaciones-this.inputWater) > 0 ? (parseFloat(currentPlot.water_per_week)-this.precipitaciones-this.inputWater).toFixed(2) : 0;
    this.currentPlot.irrigations = this.inputWater; 
    
  }
  
}

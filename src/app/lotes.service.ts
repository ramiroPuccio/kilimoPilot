import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LotesService {
  list() {
    return [
      {
          "id": 1,
          "name": "A1",
          "farm_name": "Los cuervos",
          "crop": "Maiz",
          "water_per_week": "10.100",
          "rains": ["3","1.1", "0.7"],
          "irrigations": []
      },
      {
          "id": 2,
          "name": "A2",
          "farm_name": "Los cuervos",
          "crop": "Trigo",
          "water_per_week": "5.100",
          "rains": ["0.5","0.3","1.2"],
          "irrigations": []
      },
      {
        "id": 3,
        "name": "A3",
        "farm_name": "Los cuervos",
        "crop": "Soja",
        "water_per_week": "7.300",
        "rains": ["0.1","1.3","2.2"],
        "irrigations": []
    }
  ]
  }
  }
  


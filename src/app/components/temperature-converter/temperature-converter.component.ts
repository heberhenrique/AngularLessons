import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperature-converter.component.html',
  styleUrls: ['./temperature-converter.component.scss']
})

export class TemperatureConverterComponent implements OnInit {

  @Input() celcius: number = 0.0;
  @Input() fahrenheit: number = 0.0;

  constructor() { }

  ngOnInit(): void {
  }

  convertCelciusToFahrenheit(){
    //this.celcius = 
    console.log(this.celcius);
    this.fahrenheit = (this.celcius * (9/5)) + 32
    console.log("champs");
    console.log(this.fahrenheit);
  }

  convertFahrenheitToCelcius(){
    this.celcius = (this.fahrenheit - 32) * (5/9)
  }

}

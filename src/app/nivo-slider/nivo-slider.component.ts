import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-nivo-slider',
  templateUrl: './nivo-slider.component.html',
  styleUrls: ['./nivo-slider.component.css']
})
export class NivoSliderComponent implements OnInit, AfterViewInit {
  private _readyState: number;

  constructor() { }

  ngOnInit() {
    this.createNivoSliderScript();
  }

  ngAfterViewInit() {
    this._readyState = window.setInterval(this.nivoSlider, 50);
  }

  nivoSlider() {
    if ($.fn.nivoSlider) {
      $('#slider').nivoSlider({
        pauseTime: 1500,
        directionNav: false,
        controlNav: false,
        pauseOnHover: false
      });
      clearInterval(this._readyState);
    }
  }

  createNivoSliderScript() {
    if ($) {
      if (!document.getElementById('nivo-slider')) {
        const nivoSliderScript = document.createElement('script');
        nivoSliderScript.id = 'nivo-slider';
        nivoSliderScript.src = 'https://cdn.bootcss.com/jquery-nivoslider/3.2/jquery.nivo.slider.min.js';
        document.body.appendChild(nivoSliderScript);
      }
      if (!document.getElementById('nivo-slider-pack')) {
        const nivoSliderPackScript = document.createElement('script');
        nivoSliderPackScript.id = 'nivo-slider-pack';
        nivoSliderPackScript.src = 'https://cdn.bootcss.com/jquery-nivoslider/3.2/jquery.nivo.slider.pack.min.js';
        document.body.appendChild(nivoSliderPackScript);
      }
    }
  }
}

/**
 * Created by Chanaka Fernando on 1/22/2017.
 */
import { Component } from '@angular/core';

@Component({
  moduleId : module.id,
  selector: 'carousel',
  templateUrl:'carousel.component.html'
})
export class CarouselComponent  {
  private img1URL : String;
  private img2URL : String;
  private img3URL : String;
  private img4URL : String;
      constructor(){
        this.img1URL = "/app/img/img1.png";
        this.img2URL = "/app/img/img2.png";
        this.img3URL = "/app/img/img3.png";
        this.img4URL = "/app/img/img4.png";
      }



}


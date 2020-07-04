import { Component, OnInit } from "@angular/core";
import { SoilService, Soil } from "../soil.service";

@Component({
  selector: "app-soiltesting",
  templateUrl: "./soiltesting.page.html",
  styleUrls: ["./soiltesting.page.scss"],
})
export class SoiltestingPage implements OnInit {
  soilf: Soil[];
  constructor(private soilService: SoilService) {}

  ngOnInit() {
    this.soilService.getSoil().subscribe((res) => {
      this.soilf = res;
    });
  }
}

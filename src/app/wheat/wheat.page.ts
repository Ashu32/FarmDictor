import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
@Component({
  selector: "app-wheat",
  templateUrl: "./wheat.page.html",
  styleUrls: ["./wheat.page.scss"],
})
export class WheatPage implements OnInit {
  vidUrl: SafeResourceUrl;
  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit() {
    this.vidUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
      "https://www.youtube.com/embed/cau6hM7_ggM"
    );
  }
}

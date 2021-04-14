// tslint:disable-next-line:quotemark
import { Component } from "@angular/core";
// tslint:disable-next-line:quotemark
import { Satellite } from "./satellite";

@Component({
  // tslint:disable-next-line:quotemark
  selector: "app-root",
  // tslint:disable-next-line:quotemark
  templateUrl: "./app.component.html",
  // tslint:disable-next-line:quotemark
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  // tslint:disable-next-line:quotemark
  title = "orbit-report";

  sourceList: Satellite[];
  displayList: Satellite[];

  // constructor() {
  //   this.sourceList = [
  //     new Satellite("SiriusXM", "Communication", "2009-03-21", "LOW", true),
  //     new Satellite("Cat Scanner", "Imaging", "2012-01-05", "LOW", true),
  //     new Satellite("Weber Grill", "Space Debris", "1996-03-25", "HIGH", false),
  //     new Satellite("GPS 938", "Positioning", "2001-11-01", "HIGH", true),
  //     new Satellite("ISS", "Space Station", "1998-11-20", "LOW", true),
  //   ];
  //   // this.displayList = [];
  //  }
  constructor() {
    this.sourceList = [];
    const satellitesUrl =
      // tslint:disable-next-line:quotemark
      "https://handlers.education.launchcode.org/static/satellites.json";

    window.fetch(satellitesUrl).then(
      function(response) {
        response.json().then(
          function(data) {
            const fetchedSatellites = data.satellites;
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < fetchedSatellites.length; i++) {
              const satellite = new Satellite(
                fetchedSatellites[i].name,
                fetchedSatellites[i].type,
                fetchedSatellites[i].launchDate,
                fetchedSatellites[i].orbitType,
                fetchedSatellites[i].operational
              );
              this.sourceList.push(satellite);
            }
            // TODO: loop over satellites
            this.displayList = this.sourceList.slice(0);

            // TODO: create a Satellite object using
            // new Satellite(fetchedSatellites[i].name,
            // fetchedSatellites[i].type, fetchedSatellites[i].launchDate,
            //  fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
            // TODO: add the new Satellite object to sourceList using: this.sourceList.push(satellite);
          }.bind(this)
        );
      }.bind(this)
    );
  }
  search(searchTerm: string): void {
    const matchingSatellites: Satellite[] = [];
    searchTerm = searchTerm.toLowerCase();
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.sourceList.length; i++) {
      const name = this.sourceList[i].name.toLowerCase();
      const type = this.sourceList[i].type.toLowerCase();
      const orbitType = this.sourceList[i].orbitType.toLowerCase();
      if (name.indexOf(searchTerm) >= 0) {
        matchingSatellites.push(this.sourceList[i]);
      } else if (type.indexOf(searchTerm) >= 0) {
        matchingSatellites.push(this.sourceList[i]);
      } else if (orbitType.indexOf(searchTerm) >= 0) {
        matchingSatellites.push(this.sourceList[i]);
      }
    }
    this.displayList = matchingSatellites;
  }
}

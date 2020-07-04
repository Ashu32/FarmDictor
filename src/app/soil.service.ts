import { Injectable } from "@angular/core";

import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export interface Soil {
  N: string;
  K: string;
  P: string;
  ph: string;
  crop: string;
  fertilizer: string;
}
@Injectable({
  providedIn: "root",
})
export class SoilService {
  private soilCollection: AngularFirestoreCollection<Soil>;
  private soilf: Observable<Soil[]>;
  constructor(db: AngularFirestore) {
    this.soilCollection = db.collection<Soil>("soilf");
    this.soilf = this.soilCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
  getSoil() {
    return this.soilf;
  }
  getSid(id) {
    return this.soilCollection.doc<Soil>(id).valueChanges();
  }
}

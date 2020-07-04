import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SoiltestingPage } from "./soiltesting.page";

const routes: Routes = [
  {
    path: "",
    component: SoiltestingPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoiltestingPageRoutingModule {}

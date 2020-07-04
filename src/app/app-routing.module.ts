import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "soiltesting",
    loadChildren: () =>
      import("./soiltesting/soiltesting.module").then(
        (m) => m.SoiltestingPageModule
      ),
  },
  {
    path: "weather",
    loadChildren: () =>
      import("./weather/weather.module").then((m) => m.WeatherPageModule),
  },
  {
    path: "cropinfo",
    loadChildren: () =>
      import("./cropinfo/cropinfo.module").then((m) => m.CropinfoPageModule),
  },
  {
    path: "rice",
    loadChildren: () =>
      import("./rice/rice.module").then((m) => m.RicePageModule),
  },
  {
    path: "wheat",
    loadChildren: () =>
      import("./wheat/wheat.module").then((m) => m.WheatPageModule),
  },
  {
    path: "maize",
    loadChildren: () =>
      import("./maize/maize.module").then((m) => m.MaizePageModule),
  },
  {
    path: "sugarcane",
    loadChildren: () =>
      import("./sugarcane/sugarcane.module").then((m) => m.SugarcanePageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

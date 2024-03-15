import { Home } from "./pages/Home";
import { UploadGrowth } from "./pages/UploadGrowth";
import { MeasureGrowth } from "./pages/MeasureGrowth";
import { NotFound } from "./pages/NotFound";
import { UploadImprovement } from "./pages/UploadImprovement";

export const routesConfig = [
  {
    path: "/",
    component: Home,
    title: "Home",
    about:
      "Main Page of Gnathiometer, lets you decide between Measure Growth and Improvement",
  },
  {
    path: "/upload-growth",
    component: UploadGrowth,
    title: "Upload Growth",
    about:
      "Provides instructions and the ability to upload patient image for measuring growth",
  },
  {
    path: "/upload-improvement",
    component: UploadImprovement,
    title: "Upload Improvement",
    about:
      "Provides instructions and the ability to upload patient image for measuring improvement",
  },
  {
    path: "/measure-growth",
    component: MeasureGrowth,
    title: "Measure Growth",
    about:
      "Allows you to manipulate the image (rotation, scaling) to accurately measure the amount of forward growth",
  },
  {
    path: "*",
    component: NotFound,
    title: "Not Found",
    about: "",
  },
];

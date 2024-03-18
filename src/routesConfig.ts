import { UploadGrowth } from "./pages/UploadGrowth";
import { NotFound } from "./pages/NotFound";
import { Measure } from "./components/Measure";

export const routesConfig = [
  {
    path: "/",
    component: UploadGrowth,
    title: "Upload Growth",
    about:
      "Provides instructions and the ability to upload patient image for measuring growth",
  },
  {
    path: "/measure-growth",
    component: Measure,
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

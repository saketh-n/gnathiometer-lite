/// <reference types="react-scripts" />

// This is necessary to allow me to import images
// and pass image urls as parameters to components
declare module "*.png" {
  const value: string;
  export default value;
}

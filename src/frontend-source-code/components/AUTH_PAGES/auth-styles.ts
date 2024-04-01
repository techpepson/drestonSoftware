//Style definitions for the auth pages
import { AuthPosition } from "./auth-export";

export const authPosition: AuthPosition = {
  flexPosition: `flex justify-around gap-10`, //Style definition for flex-row
  colFlex: `flex flex-col gap-5 mt-5`, //style definition for flex-col
  widthDefinition: `text-wrap max-w-[45ch] text-center`, //style definition to reduce container width
  xlText: `text-xl`, //styling for xl sizes
  shadow: `shadow-2xl`, // styling to apply shadow to elements
  cursor: `cursor-pointer`, //Set the cursor type to pointer
  rawFlex: `flex`, //Define a raw flex with no direction
};

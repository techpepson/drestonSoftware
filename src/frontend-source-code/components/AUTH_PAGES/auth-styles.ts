//Style definitions for the auth pages
import { AuthPosition } from "./auth-export";

export const authPosition: AuthPosition = {
  flexPosition: `md:flex justify-around gap-10 max-md:flex max-md:flex-col`, //Style definition for flex-row
  colFlex: `flex flex-col gap-5 mt-5`, //style definition for flex-col
  widthDefinition: `text-wrap max-w-[45ch] text-center`, //style definition to reduce container width
  xlText: `text-xl`, //styling for xl sizes
  shadow: `shadow-2xl`, // styling to apply shadow to elements
  cursor: `cursor-pointer`, //Set the cursor type to pointer
  rawFlex: `flex items-center gap-1`, //Define a raw flex with no direction
  defaultBg: `bg-[#e7cd49]`,
  genHeading: `max-sm:text-xl max-md:text-2xl max-lg:text-3xl lg:text-4xl`,
  placeholderColor: `placeholder-purple-500`,
  btnBg: `bg-[#e6f1f7]`,
};

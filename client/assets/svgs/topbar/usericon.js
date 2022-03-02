import React from "react";
import { SvgXml } from "react-native-svg";
export default function backArrowSvgComponent() {
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18">
  <path id="Icon_material-person" data-name="Icon material-person" d="M15,15a4.5,4.5,0,1,0-4.5-4.5A4.5,4.5,0,0,0,15,15Zm0,2.25c-3,0-9,1.507-9,4.5V24H24V21.75C24,18.757,18,17.25,15,17.25Z" transform="translate(-6 -6)" fill="#85acd6"/>
</svg>

`;
  const SvgImage = () => <SvgXml xml={svgMarkup} width="21px" />;

  return <SvgImage />;
}

import React from "react";
import { SvgXml } from "react-native-svg";
export default function backArrowSvgComponent() {
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="14.075" height="16.086" viewBox="0 0 14.075 16.086">
  <path id="Icon_awesome-play" data-name="Icon awesome-play" d="M13.334,6.747,2.275.209A1.5,1.5,0,0,0,0,1.506V14.579a1.507,1.507,0,0,0,2.275,1.3L13.334,9.342a1.506,1.506,0,0,0,0-2.6Z" transform="translate(0 -0.002)" fill="#4b6ef6"/>
</svg>



`;
  const SvgImage = () => <SvgXml xml={svgMarkup} width="32px" />;

  return <SvgImage />;
}

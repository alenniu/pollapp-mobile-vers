import React from "react";
import { SvgXml } from "react-native-svg";
export default function backArrowSvgComponent() {
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="35.793" height="48.741" viewBox="0 0 35.793 48.741">
  <g id="Group_34" data-name="Group 34" transform="translate(-28 -229.531)">
    <path id="Path_1554" data-name="Path 1554" d="M1855.987,618.2l-17.9,31.511,17.9,17.23,17.9-17.23Z" transform="translate(-1810.09 -388.668)" fill="#fc5959"/>
    <path id="Path_1555" data-name="Path 1555" d="M1855.987,618.2v10.411l-9.2,11.2-8.7,1.358Z" transform="translate(-1810.09 -388.668)" fill="#aa1817"/>
    <path id="Path_1556" data-name="Path 1556" d="M1855.987,908.64v-7.016l-9.2-6.9-8.7,1.358Z" transform="translate(-1810.09 -630.367)" fill="#c11b1b"/>
    <path id="Path_1557" data-name="Path 1557" d="M1993,618.2v10.411l9.2,11.2,8.7,1.358Z" transform="translate(-1947.104 -388.668)" fill="#fc8181"/>
    <path id="Path_1558" data-name="Path 1558" d="M1993,908.64v-7.016l9.2-6.9,8.7,1.358Z" transform="translate(-1947.104 -630.367)" fill="#e54141"/>
    <path id="Path_1625" data-name="Path 1625" d="M1.7.08C2.72.276,3.61.772,3.69,1.187s-.68.592-1.7.4S.086.891.006.476.686-.116,1.7.08Z" transform="translate(48.476 261.214) rotate(-45)" fill="#fc8181"/>
    <path id="Path_1626" data-name="Path 1626" d="M1.108.052C1.771.18,2.35.5,2.4.772s-.442.386-1.1.258S.056.58,0,.31.446-.076,1.108.052Z" transform="translate(46.296 263.577) rotate(-45)" fill="#fc8181"/>
  </g>
</svg>


`;
  const SvgImage = () => <SvgXml xml={svgMarkup} width="32px" />;

  return <SvgImage />;
}

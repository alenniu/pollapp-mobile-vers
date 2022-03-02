import React from "react";
import { SvgXml } from "react-native-svg";
export default function backArrowSvgComponent() {
  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="21" height="21" viewBox="0 0 21 21">
  <image id="_11" data-name="11" width="21" height="21" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABP1JREFUeNrsWj1s00AUdi2kjlhIsFU4YmMAZ0QMtWFADIh0BolGzIh0YmwyMjWIGZEB5kZiYiGhEuqYwMCKK1ZAXjvB98JLZIztnH1/CeJJlqPWie/73nfv5+42HIt2Y/zKw62D68G78H7j4dfjLj4PX2xdm5oag2sJuI/rAB+/4NrHFfO/tnFNmAgjdsY0cAa8W/BIyPd9kHAX97ZuNbgGPf6SPb4r+LWA1dBZWwUIeHxuZV4+SKkhVj3GDcvA59ZrXLo0YIUUWULPgYT+yhJQA3iagDHuI4FnxyrV4Fqc43UtVBkbNix5PGsRFOAIKkCpGtwV8nhoQw1nLHlcpXkymcJdkTkeK4wNLWUxAKDpRx9o9DgB76EPGPDAX7JHZW3IakhqEwDwh7i1dANP/xEk0BQ75CpQ1hImYViXAJ89EuoCfvn103RM6X2+96TLRHT5745uNeQScP3tC/LC+w+3HvZBRIcH42kCni2J2yBiChICdoBWNRQRMGLPz/Ls5uamU1OaWeAhA1+mKmNqKCLgZ7YGZzWIDqYucBNqoAWXnSoE/FF1QQ1eyWBUAP+rAQIJfQVqGHMzNRaZAj/LBpSjBtXAc8kHEXENNSyAtyZvfI47ybB5p59LAMD7S9rSxVyCGujZQCPwMjXQklqnAvB00I1AwLioEvQFBkP1wZfT01OPwAN4C9eEmxkd4BclL94zoiwCYHsEJKeKJGAR/h99//YtBvjSCtaVHNAc7GNFAUq45AUJHZ7PTVykClJhQxS4qvWAqUQnp0QNx0dHHqkBVxvAHUHgcRkBYcV5adPCOVAA74o2a5j/sdIVoRWxbRtLYglk6K0za3kEnBX9MuqBqcHgV5buaj+fR0Cwps4MbUyBtTcZAqYrophY5nmZKZCkcrI1o/6AS11RO1lGwDpGdd/GFEj+uRiATrCK9z/KFCCKrM7ZgdI0uG4pMJHtRf6nQQXy81dAAcrSYFDj5TYJmMehq6JfSHeCeQSsa2PjmZ4C45SU9tY5Jbo1gEfnL1zYwdVCBRbwImWzRlemsgz2Koy/lIBtAeCUcmjlhVZlJ7QSQ+UorsiwGgbO79VpqfS9TAHDHODZfcJ9kDAxpAYil97RwLvaN2/fdh79+OTzO6cqCSB2GwDdLgGezR461TDbE2DgewCeAHiXxzXZungxRHRv8jOVOseNTClMPzoAaHohbTo8rhFhZ3t6GNCUd4FltthpHM/I6wBOoL2ScZHq2l9PTsq27noYV7eQADJeXa0DvPBltIbvVNtizwL3HbGzSTOlPD93pc849pcR4CpqMPKsTmxIS70LqXsAX+Vs0my/AN8ZYVoMRGKDm1MpUeBrpCKsjBXFBtXAsxZybAg4NvSL0mDpISkMXOXBpXRsCFK/Sxue5C2ngtSr2JBjA70zzpbCS0+KgoR5UFF1YOqveagJeDb6NxEbkkoKyBCxy8WPEjWQNAGcpKrzGN4imOaBr1QKY8ADhUXOvIPU5fVFTAHwbhF4skpHZXn+RFCD7MmxqS2PK+kG+XiJCjX4pj0upQANapAlIObCZ2BjSUxGDbEC4G0Ab8iAl1KApBpObHm8dhqskC5FGqAeqjRSzMgWcKUK0JQptALXpgBBNURQgFOiAEqTz3QCN0JAioisGogA+nyY09OTx8eOITOyM1SQKYIM8AjAI5PgjSkgRw1DKIBK4G3THs/aLwEGAAcuqGTbgEe8AAAAAElFTkSuQmCC"/>
</svg>
`;
  const SvgImage = () => <SvgXml xml={svgMarkup} width="21px" />;

  return <SvgImage />;
}

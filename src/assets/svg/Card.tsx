import * as React from 'react';
import Svg, {Rect, Line} from 'react-native-svg';
const Card = (props: any) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect
      x={1}
      y={7}
      width={38}
      height={25}
      rx={6}
      stroke="#D5D5DC"
      strokeWidth={2}
    />
    <Line y1={17} x2={40} y2={17} stroke="#D5D5DC" strokeWidth={2} />
  </Svg>
);
export default Card;

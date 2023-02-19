import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Chevron = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M15 18L9 12L15 6"
      stroke={props.stroke ?? '#171725'}
      strokeWidth={2}
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Chevron;

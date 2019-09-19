import icomoonWOFF from '../fonts/icomoon.woff';
import icomoonTTF from '../fonts/icomoon.ttf';
import styled from 'styled-components';

const Icon = styled.div`
@font-face {
  font-family: 'Made-icomoon';
  src: url('${icomoonWOFF}'); /* IE9 Compat Modes */
  src: local('Made-icomoon'),
       url('${icomoonWOFF}') format('woff'), /* Modern Browsers */
       url('${icomoonTTF}') format('truetype'), /* Safari, Android, iOS */
}

font-family: Made-icomoon;
font-size: 0;

&:disabled {
  cursor: not-allowed;
  opacity: 0.4;
}
&:before {
  font-size: 1rem;
  line-height: 30px;
  content: '\\${p => p.characterCode}';
}

${p => p.extraStyles};
`;

export default Icon;

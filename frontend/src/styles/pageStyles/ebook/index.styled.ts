import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
`;

export const Line = styled.div`
  width: 5rem;
  height: 100rem;
  background-color: var(--BG_GRAY3) !important;
`;

export const LeftArrow = styled(Image)`
  width: 1.5rem;
  height: 3.3476rem;
  position: absolute;
  top: 310px;
  left: -100px;
  cursor: pointer;
`;

export const RightArrow = styled(LeftArrow)`
  width: 1.5rem;
  height: 3.3476rem;
  left: 1080px;
`;

import styled from 'styled-components';

const Paragraph = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
`;

export default Paragraph;

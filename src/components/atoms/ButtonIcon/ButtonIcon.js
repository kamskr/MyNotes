import styled from 'styled-components';

const ButtonIcon = styled.button`
  width: 67px;
  height: 67px;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-size: 40%;
  background-position: center;
  background-color: ${({ active }) => (active ? 'white' : 'transparent')};
  border: none;
`;

export default ButtonIcon;

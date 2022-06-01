import styled from 'styled-components';

const Ul = styled.ul`
  width: 100%;
  margin: 2rem;
  overflow-y: auto;

  //Scroll Bar
  ::-webkit-scrollbar {
    width: 1rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
export default Ul;

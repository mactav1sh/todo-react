import { FaDiceD20 } from 'react-icons/fa';
import PSpecial from '../styled/Header';

const Header = () => {
  return (
    <PSpecial>
      To-Do{' '}
      <span>
        <FaDiceD20 />
      </span>
    </PSpecial>
  );
};

export default Header;

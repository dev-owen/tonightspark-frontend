import * as $ from './style';
import { useRecoilState } from 'recoil';
import { creatorHashState } from '../../state/creatorHashState';
import { useLocation } from 'react-router';
import Logo from '../Logo';
import Divider from '../Divider';

const Sidebar = () => {
  const location = useLocation()
  const [hash, setHash] = useRecoilState(creatorHashState);
  const zepLink = `https://zep.us/play/${hash}`

  return (
    <$.Wrapper>
      <$.Top>
        <$.LogoWrapper>
          <Logo />
        </$.LogoWrapper>
        <Divider width="220px" height="1px" margin="40px 0 32px 0" />
        <$.MenuLinkList>
          <$.MenuLink to={'/home'} current={location.pathname === '/home'}>Participant Insight</$.MenuLink>
          <$.MenuLink to={'/home/hour'} current={location.pathname === '/home/hour'}>Participation by Hour</$.MenuLink>
          <$.MenuLink to={'/home/area'} current={location.pathname === '/home/area'}>Area Information</$.MenuLink>
        </$.MenuLinkList>
      </$.Top>
      <$.Bottom>
        <a href={zepLink}>
          <p>ZEP 접속링크 :</p>
          <p>{zepLink}</p>
        </a>
        <Divider width="220px" height="1px" margin="28px 0 28px 0" />
        <p className='copyright'>All rights reserved ⓒ TonightSpark</p>
      </$.Bottom>
    </$.Wrapper>
  );
};

export default Sidebar;

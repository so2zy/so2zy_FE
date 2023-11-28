import { theme } from '@styles/theme';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { regionModalOpen } from '@recoil/regionModal';
import RegionModal from './regionModal';

const regionSelectBtn = () => {
  const [modalOpen, setModalOpen] = useRecoilState<boolean>(regionModalOpen);
  const onHandleClick = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <StyledWrapper onClick={onHandleClick}>
      <StyledRegionText>지역 선택</StyledRegionText>
      <RegionModal isOpen={modalOpen} />
    </StyledWrapper>
  );
};

export default regionSelectBtn;

const StyledWrapper = styled.button`
  width: 10rem;
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.75rem;
  margin: 1.4rem auto 1rem;
  background-color: ${theme.colors.blue};
  line-height: 1.1rem;
  cursor: pointer;
`;

const StyledRegionText = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  color: #fff;
  margin: auto;
`;

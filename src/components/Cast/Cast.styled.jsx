import styled from 'styled-components';

export const CastWrapper = styled.div`
`;

export const CastList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const WikiLink = styled.a`
  //для перехода на Википедию и отсутствия конфликта
`;

export const CastItem = styled.li`
  width: 200px;
  overflow: hidden;

  p:not(:last-child) {
        margin-top: ${p => p.theme.spacing(2.5)};
    margin-bottom: ${p => p.theme.spacing(2.5)};

  }

  &:hover img {
    filter: grayscale(1);
    transition: 300ms ease-in-out;
  }
`;

export const ActorsImg = styled.img`
  height: 300px;
  filter: grayscale(0);
    border: 3px  ${p => p.theme.colors.bernred};
margin: 15px 15px;
 

`;
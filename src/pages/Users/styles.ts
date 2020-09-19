import styled, { css } from 'styled-components';

import { ArrowForward } from '@material-ui/icons';

export const Header = styled.header`  
  display: flex;
  align-items: center;
  justify-content: space-between;

  > a {
    color: #fff;
    font-size: 12px;
    background: #019637;
    padding: 15px 20px;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    opacity: 1;
    transition: opacity 0.2s;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Table = styled.table`
  margin-top: 25px;
`

export const TableHead = styled.thead`
  border-bottom: 4px solid #103a53;

  tr {
    height: 50px;

    th {
      text-align: left;
      padding-left: 15px; 
      font-size: 12px;
      color: #6b6b6b;
    }
  }

`
export const TableBody = styled.tbody`
  tr {
    height: 50px;

    td {
      text-align: left;
      padding-left: 15px; 
      font-weight: bold;
    }
  }
`
const IconCSS = css`
  width: 22px;
  height: 22px;
`

export const ArrowForwardIcon = styled(ArrowForward)`
  ${IconCSS}
  transition: opacity 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
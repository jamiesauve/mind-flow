import React from 'react';
import styled from 'styled-components'

import TableOfContentsMenu from '../Components/TableOfContentsMenu'
import TableOfContentsList from '../Components/TableOfContentsList'

const This = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 400px;
  background-color: #CCD;
`

const TableOfContents = props => {
  return (
    <This className = "TableOfContents">
      <TableOfContentsMenu>
              
      </TableOfContentsMenu>

      <TableOfContentsList>
        
      </TableOfContentsList>
    </This>
  )
};

export default TableOfContents;
import React, { useState } from 'react';
import styled from 'styled-components'
import { Box } from 'grommet'

import TableOfContentsMenu from '../Components/TableOfContentsMenu'
import TableOfContentsList from '../Components/TableOfContentsList'

const This = styled.div`
  display: flex;
  flex-direction: column;

  width: 400px;

  border-right: 1px solid #0df;
`

const TableOfContents = props => {
  const [isExpanded, setExpanded] = useState(true);
  return (
    <This className = "TableOfContents">
        <TableOfContentsMenu>
          Table Of Contents Menu
        </TableOfContentsMenu>

        <TableOfContentsList>
          Table Of Contents List
        </TableOfContentsList>
    </This>
  )
};

export default TableOfContents;
import React from 'react';
import styled from 'styled-components'

const This = styled.div`
  z-index: 10;

  height: 125px;
  
  padding: 10px;

  border-bottom: 1px solid #0fd;
  
  background-color: #444;
  font-size: 20px;
`

const TableOfContentsMenu = props => {
  return (
    <This>
      {props.children}
    </This>
  )
};

export default TableOfContentsMenu
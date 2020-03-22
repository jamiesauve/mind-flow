import React from 'react';
import styled from 'styled-components'

const This = styled.div`
  display: flex;
  flex-direction: row;

  height: 125px;

  padding: 10px;

  border-bottom: 1px solid #0fd;
  
  background-color: #333;
  font-size: 20px;
`

const PageMenu = props => {
  return (
    <This>
      Page Menu
    </This>
  )
};

export default PageMenu;
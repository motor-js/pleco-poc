import React from "react";
import styled from 'styled-components'
import { Box, SmartHeading, Sidebar, useSidebar } from "@motor-js/core";
import { Filter as FilterIcon } from "@styled-icons/fa-solid";
import FilterContent from './FilterContent'

const Logo = require("../images/plecologonew.svg");

const StyledFilterIcon = styled(FilterIcon)`
  color: white;

  &:hover {
    color: #F7F7F7;
    cursor: pointer;
  }
`

const HeaderContent = () => {

  const {isOpen, toggle} = useSidebar();

  return (
    <Box
      gridArea="header"
      backgroundColor="brand"
      direction="row"
      align="center"
      padding="14px 30px"
      elevation='0px 0px 9px 3px rgba(41,41,41,.25)'
    >
      <div style={{ marginRight: 'auto' }}>
        <SmartHeading size='large' color='white' type='appName' margin='0px'/>
      </div>
      <a /*href="https://plecosystems.com/"*/>
        <img src={Logo} style={{ width: "60%" }} alt={"logo"} />
      </a>
      <StyledFilterIcon size={18} onClick={toggle}/> 
      <Sidebar 
        isOpen={isOpen}
        onClose={toggle}
        onOpen={() => console.log('OPEN')}
        right
        overlayBackground='black'
        type='reveal'
        containerId='anchor'
        header={<h4>Filters</h4>}
      >
        <FilterContent />
      </Sidebar>
    </Box>
  );
};

export default HeaderContent;

// components/SettingsPanel.js
import React from 'react';
import { SFlexCol } from './container/FlexContainer';
import styled from 'styled-components';
import { SHeadingRightPanel } from './styled/SHeading';

const SSettingsPanel = styled(SFlexCol)`
    
    height: 500px;
    width: 100%;

    padding: 20px;
`




export const SettingsPanel = () => {
  return (
    <SSettingsPanel>
      <SHeadingRightPanel>
        Settings
      </SHeadingRightPanel>
    </SSettingsPanel>
  )
}
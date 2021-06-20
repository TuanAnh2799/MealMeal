import styled from 'styled-components';
import { SafeAreaView, StatusBar } from 'react-native';
import React from 'react';

export const SafeArea = styled(SafeAreaView)`
    flex: 1;
    marginTop: ${StatusBar.currentHeight}px;
`;
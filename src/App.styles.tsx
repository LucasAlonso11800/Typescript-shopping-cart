import styled from 'styled-components';
import { IconButton } from '@material-ui/core';

export const Wrapper = styled.main`
    margin: 2em;
`;

export const StyledButton = styled(IconButton)`
    position: fixed;
    z-index: 100;
    right: 20px;
    top: 20px;
    box-shadow: 0px 0px 5px 1px #000
`;
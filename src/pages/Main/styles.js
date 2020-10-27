import styled from 'styled-components';
import { Container } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

export const Block = styled( Container )`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
`;

export const Spinner = styled(CircularProgress)`
    margin-top: 50%;
    transform: translateY(-50%);
`;

export const Image = styled.img`
    width: 100%;
`;

export const Title = styled.h1`
    
`;

export const Description = styled.p`

`;


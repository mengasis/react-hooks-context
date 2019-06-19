import React from 'react';
import styled from '@emotion/styled/macro'

const Container = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
max-width: 300px;
`;

const Button = styled.button`
width: 70px;
    height: 70px;
    border-radius: 12px;
    font-size: 2rem;
    background: #673AB7;
    color: #fff;
`;


const Counter = props => {
    return (
        <Container>
            <Button>+</Button>
            <Button>-</Button>
        </Container>
    );
};


export default Counter;

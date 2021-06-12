import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    border: 1px solid lightblue;
    border-radius: 1em;
    height: 100%;

    button {
        border-radius: 0 0 1em 1em;
    }
`;

export const Img = styled.img`
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
`;

export const ItemInfo = styled.div`
    padding: 1rem;
    height: 100%
`;

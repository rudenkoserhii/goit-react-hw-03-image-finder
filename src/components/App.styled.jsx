import styled from 'styled-components';

export const Wrap = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${p => p.theme.space[4]}px;
`;
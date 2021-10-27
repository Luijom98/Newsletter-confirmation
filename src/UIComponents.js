import styled from 'styled-components';

const UIComponents = () => {
    return (
        <>
            <Circle />
            <Circle2 />
        </>
    );
};

const Circle = styled.div`
 border-radius: 50%;
 height: 200px;
 width: 200px;
 background: Linear-gradient(to right, #ff5e62, #ff9966);
 position: absolute;
 top: 60%;
 Left: 70%;
 z-index: 1;
`;

const Circle2 = styled(Circle)`
height: 150px;
 width: 150px;
 top: -45%;
 left: -10%;
`;
export default UIComponents;
import React from 'react';
import { styled } from 'styled-components';

const Section = styled.section`
	position: relative;
	width: 100%;
	height: 600px;
	border-bottom: 2px solid #ccc;
	box-sizing: border-box;
	overflow: hidden;
`;

const TodoBody = ({ children }) => {
	return <Section>{children}</Section>;
};

export default TodoBody;

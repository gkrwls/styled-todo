import React from 'react';
import { styled } from 'styled-components';
import TodoItem from './TodoItem';

const ListContainer = styled.ul`
	position: absolute;
	right: -17px;
	width: calc(100% + 17px);
	height: 500px;
	overflow-y: scroll;
`;

const TodoList = ({ todos, fnDel, fnChk }) => {
	return (
		<ListContainer>
			{todos.map((todo) => (
				<TodoItem todo={todo} key={todo.id} fnDel={fnDel} fnChk={fnChk}></TodoItem>
			))}
		</ListContainer>
	);
};

export default TodoList;

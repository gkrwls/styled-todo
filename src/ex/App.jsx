import React, { useRef, useState } from 'react';
import { createGlobalStyle, css, styled } from 'styled-components';
import TodoHead from './components/TodoHead';
import TodoBody from './components/TodoBody';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';

const GlobalStyle = createGlobalStyle`
    *{margin: 0;padding: 0;}
    ul,li,ol{list-style:none;}
    .sr-only{position: absolute; text-indent: -9999px;}
    button{cursor:pointer;}
    body{font-size: 12px;}
    `;

const TodoContainer = styled.div`
	position: relative;
	width: 400px;
	margin: 30px auto;
	border: 1px solid #e2e2e2;
`;

const TodoPlus = styled.button`
	position: absolute;
	left: 50%;
	bottom: 0;
	transform: translate(-50%, 50%);
	width: 48px;
	height: 48px;
	color: #fff;
	font-size: 32px;
	background-color: #1f589f;
	border: none;
	border-radius: 50%;
	transition: all 0.2s;

	${(props) =>
		props.active === 'true' &&
		css`
			background-color: #2e84ed;
			transform: translate(-50%, 50%) rotate(45deg);
		`}
`;

const initialData = [
	{ id: 1, title: '리액트 복습 완전정복', done: false },
	{ id: 2, title: '방청소 - 물걸레질 포함', done: false },
	{ id: 3, title: '포트폴리오 계획서 작성', done: true },
];

const App = () => {
	const [todos, setTodos] = useState(initialData);
	const nextId = useRef(4);

	//추가
	const fnAdd = (plan) => {
		// alert(plan);

		setTodos((prevTodos) => {
			return [
				...prevTodos,
				{
					id: nextId.current,
					title: plan,
					done: false,
				},
			];
		});

		nextId.current++;
	};

	//삭제
	const fnDel = (id) => {
		// alert('id =' + id);
		setTodos((prevTodos) =>
			prevTodos.filter((todo) => {
				return todo.id !== id;
			})
		);
	};

	//체크
	const fnChk = (id) => {
		setTodos((prevTodos) => {
			return prevTodos.map((todo) =>
				todo.id !== id
					? todo
					: {
							...todo,
							done: !todo.done,
					  }
			);
		});
	};

	const [active, setActive] = useState('true');
	const $plan = useRef(null);

	return (
		<div>
			<GlobalStyle />

			<TodoContainer>
				<TodoHead>오늘할일</TodoHead>

				<TodoBody>
					<TodoList todos={todos} fnDel={fnDel} fnChk={fnChk}></TodoList>
					<TodoInsert fnAdd={fnAdd} active={active} $plan={$plan}></TodoInsert>
				</TodoBody>
				<TodoPlus
					active={`${active}`}
					onClick={() => {
						setActive((prev) => !prev);
						$plan.current.focus();
					}}
				>
					+
				</TodoPlus>
			</TodoContainer>
		</div>
	);
};

export default App;

import React, { useState } from 'react';
import { styled } from 'styled-components';

const Form = styled.form`
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	padding: 20px;
	box-sizing: border-box;

	> input {
		background: none;
		border: none;
		outline: none;

		width: 100%;
		height: 50px;
		font-size: 16px;
		text-indent: 10px;
		background-color: #fff;
		border: 1px solid #ccc;
	}
`;

const TodoInsert = ({ fnAdd, active, $plan }) => {
	const [plan, setPlan] = useState('');

	return (
		<Form
			active={`${active}`}
			onSubmit={(evt) => {
				evt.preventDefault();
				fnAdd(plan);
				setPlan('');
			}}
		>
			<input
				ref={$plan}
				type="text"
				id="plan"
				placeholder="할 일 입력 후 엔터키를 누르세요~!"
				autoComplete="off"
				autoFocus
				value={plan}
				onChange={(evt) => {
					setPlan(evt.target.value);
				}}
			/>
		</Form>
	);
};

export default TodoInsert;

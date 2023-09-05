import { styled } from 'styled-components';

const Header = styled.header`
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: #fff;
	background-color: ${(props) => props.bgc};
	border: 1px solid ${(props) => props.bgc};
	border-radius: 10px 10px 0 0;
`;

const Title = styled.h1`
	height: 150px;
	font-size: 30px;
	line-height: 150px;
`;

const DateTime = styled.p`
	font-size: 16px;
	text-align: right;
`;

const Time = styled.time`
	display: block;
`;

const Day = styled.span`
	display: block;
	margin-top: 8px;
`;

const now = new Date();

const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();

const day = now.getDay();
let dayName = '';
if (day === 0) {
	dayName = '일요일';
} else if (day === 1) {
	dayName = '월요일';
} else if (day === 2) {
	dayName = '화요일';
} else if (day === 3) {
	dayName = '수요일';
} else if (day === 4) {
	dayName = '목요일';
} else if (day === 5) {
	dayName = '금요일';
} else if (day === 6) {
	dayName = '토요일';
}

const TodoHead = ({ children }) => {
	return (
		<Header bgc="#1f589f">
			<Title>{children}</Title>

			<DateTime>
				<Time>
					{year}년 {month}월 {date}일
				</Time>

				<Day>{dayName}</Day>
			</DateTime>
		</Header>
	);
};

export default TodoHead;

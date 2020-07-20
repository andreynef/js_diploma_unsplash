import React from 'react';
import Comment from './Comment/Comment.js';
import './CommentList.css';

const CommentList = props => {//функциональный компонент с единственными получаемыми аргументами props. Типа глупый компонент который тупо принимает приказ и выполняет его(принял аргументы и использовал их не меняя ничего)
	
	// arr.forEach((item,index) => {//перебирается существующий массив и
	// 	item.id = index + 1;//добавляется Id к каждому итему(новый ключ к каждому обьекту).
	// });
	
	const allItems = props.itemsArr.map((item,i)=>{//создание нового массива на основе старого используя его существующие данные и добавления новых (метод трансформации массива "map(item,index,array)")

		return (
			<Comment 
				key={i+1}//установление ключа который так нужен элементу массива
				id={i+1}//явное дублирование id ибо key не будет отображаться в аргументах (т.к. он чисто для реакта).
				date={item.date}//значение ключа date каждого перебираемого обьекта назначается как date.
				text={item.text}
				name={item.name}
				handleDelete={props.handleDelete.bind(this,i)}//привязать ClickAction к каждому элементу в массиве с индексом i (который каждый раз разный при переборе массива)
			/>
		);
	});

	return (
		<ul className='list'>
			{allItems}
		</ul>
	)
}

export default CommentList;
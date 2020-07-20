import React, { Component } from 'react';
import Input from './Input/Input.js'
import TextArea from './TextArea/TextArea.js'
import './Form.css'

const Form = props =>{//dumb component
    
  return (
		<form
			onSubmit={props.handleSubmit}
		>
			<Input
				handleChange = {props.handleChange}//отдается через пропсы метод базы
				inputValue={props.inputValue} //отдается через пропсы значение базы
			/>
			<br />
			<TextArea 
				handleChange = {props.handleChange}//отдается через пропсы метод базы
				textAreaValue={props.textAreaValue}//отдается через пропсы значение базы
			/>
			<button 
				type="submit"
				className ="button"
			>
				Добавить комментарий
			</button>
		</form>
  );
}

export default Form;
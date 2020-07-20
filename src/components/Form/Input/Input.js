import React from 'react';
import './Input.css'

const Input = props =>{//dumb component
	return (
		<label className="label">*Введите свое имя
			<input
				className="input"
				placeholder="мое имя"
				type="text" 
				onChange={props.handleChange}//при любом изменении поля используется значение из пропсов
				value={props.inputValue}//вводимые значения берутся из базы а не у сами себы как было по умолчанию
				autoFocus
				required
			/>
		</label>
	)
}

export default Input;
import React from 'react';
import './TextArea.css'

const TextArea = props =>{//dumb component
	return (
		<label className="label">*Введите свой комментарий
			<textarea 
				className="textArea"
				name='js-textContent' // обязательный атрибут для textarea. Использую для обределения ключа в общем методе handleChange.
				type="text" 
				placeholder="комментарий" 
				value={props.textAreaValue}//значение в поле зависят только от приходящих пропсов
				onChange={props.handleChange}//при любом изменении поля используется значение из пропсов
				required
				>
			</textarea>
		</label>
	);
}

export default TextArea;
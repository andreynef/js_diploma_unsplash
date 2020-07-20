import React from 'react';
import './Comment.css'

const Comment = props =>{//dumb component
  return (
    <li 
			className="listItem"
			id={props.id}
		>
			<div className="listHeader">
				<div className="listHeader__name">{props.name}</div>
				<button 
					type="button"
					className="listHeader__cross"   
					aria-label="удалить"
					onClick={props.handleDelete}
					>
				</button>
			</div>
			<div className="listItem__text">{props.text}</div>
			<div className="listItem__date">{props.date}</div>
		</li>
  );
}

export default Comment
import React, { Component } from 'react';
import CommentList from './components/CommentList/CommentList.js';
import Form from './components/Form/Form.js';
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {// установка начального пустого состояния
      items: [
      ],
      formName:'',
      formText:'',
      formDate:''
    };
    this.handleChange = this.handleChange.bind(this);//привязка методов к именно этому компоненту App
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = ()=>{//заводской метод, срабатывающий после метода render и указывающий что именно сделать после изначальной отрисовки.
    this.setState({// установить состояние при условии
      items: localStorage.commentItems //есть ли запись в локале? 
      ? JSON.parse(localStorage.getItem('commentItems'))// считать массив в JSON формате('text','text') из localeStorage а если его там нет то просто установить пустой массив
      : this.state.items//если нет, то просто оставить как есть. Можно написать просто items вместо this.state.items. 
    })
  }

  updateLocalStorage(newSet) {
    localStorage.setItem('commentItems', JSON.stringify(newSet))
  }

  handleChange(event) {//при любом изменении полей идет обновление состояния
    const objKey = event.target.name === 'js-textContent' ? 'formText' : 'formName';//условие определяющее какой ключ менять
    const targetValue = event.target.value// какую инфу записывать в значение
    this.setState({//обновить состояние с добавлением изменений
			[objKey]: targetValue,
    });
  }

  handleSubmit(event) {
    event.preventDefault();//сброс отправки формы и открытия дефолтной нов страницы
    const itemsArr = this.state.items;//считываем состояние базы
		const submittedName = this.state.formName;//считываем данные на отправку из базы
		const submittedText = this.state.formText;//считываем данные на отправку из базы
    const submittedDate = new Date().toLocaleString('ru');//определяем нынешнее время
    const newItem = {//создаем объект с этими свежими данными
      name: submittedName, 
      text: submittedText, 
      date: submittedDate,
    };
    itemsArr.push(newItem);//засовываем этот новый объект в общее состояние (в конец)
    this.setState(itemsArr);//устанавливаем новое состояние базы
    this.updateLocalStorage(itemsArr); //записываем свежий массив в локал в формате('text','text'), тобишь в формате JSON    
		this.setState({//обновляем состояние на пустые поля
      formName:'', 
      formText:'', 
      formDate:''
    });
  }

//   addToList() {
//     this.setState(prevState => ({
//         list: prevState.list.concat(this.state.text),
//         text: ''
//     }))
// }

// removeItem(item) {
//   const item = getItem(this.state.list, item.id) // Method to get item in list through comparison (IE: find some item with item.id), it has to return ITEM and INDEX in array
//   const newlist = [].concat(list) // Clone array with concat or slice(0)
//   newlist.splice(item.index, 1);
//   this.setState({list: newlist});       
// }
  
  handleDelete = chosenItem => {//атрибут приходит с кнопки удалить
    debugger;
    alert(chosenItem.target);
    let itemsArr = this.state.items;//считываем состояние 
    itemsArr.splice(chosenItem, 1);//удаляем выбранный итем методом массива splice(начиная с chosenItem в количестве 1 шт) 
    this.setState({items: itemsArr});//обновляем состояние
    this.updateLocalStorage(itemsArr); //записываем массив в локал в формате('text','text'), тобишь в формате JSON

    arr.forEach((item,index) => {//перебирается существующий массив и
      if(item.name === '7') {//если в элементе(обьект) есть св-во с этим значением 
        arr.splice(index,1);//то у себя же и удалить этот элемент(обьект) 
      }
    });
  };

  render() {
    return (
      <div className='centralContainer'>
        <section className='sectionList'>
					<h1 className='titleList'> Список комментариев </h1>
          <CommentList
            itemsArr={this.state.items}//создаем свои атрибуты и передаем их в другой файл (CommentList.js). 
            handleDelete={this.handleDelete} 
          />
        </section>
        <section className="sectionForm">
			    <h2 className="titleForm">Форма</h2>
            <Form 
              textAreaValue={this.state.formText} 
              inputValue={this.state.formName}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
        </section>
      </div>
    );
  }
}

export default App
// componentDidMount() {
// 	this.timerID = setInterval(
// 		() => this.tick(),
// 		1000
// 	);
// }

// componentWillUnmount() {
// 	clearInterval(this.timerID);
// }
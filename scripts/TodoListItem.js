class TodoListItem {
  #template = document.querySelector('#todolist-item-template').content;
  #data;
  #card;
  #todoList;

  constructor(data, todoList) {
    this.#data = data;
    this.#todoList = todoList;
  }

  #onDelete = () => {
    if(this.#card) {
      this.#card.remove();
    }
  }

  #addListeners = () => {
    this.#card.querySelector('.todolist-item__del').addEventListener('click', this.#onDelete)
    this.#card.querySelector('.todolist-item__copy').addEventListener('click', () => {
      const card = new TodoListItem(this.#data, this.#todoList).getCard();
      this.#todoList.addCard(card)
    })
  }

  #createCard = () => {
    this.#card = this.#template.cloneNode(true).children[0];
    this.#card.querySelector('.todolist-item__text').textContent = this.#data.text

    this.#addListeners()
  }

  getCard = () => {
    if(!this.#card) {
      this.#createCard()
    }

    return this.#card
  }
}


export default TodoListItem
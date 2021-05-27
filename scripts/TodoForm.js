class TodoForm {
  #onAddItem;

  constructor(formSelector, onAddItem) {
    this.#onAddItem = onAddItem

    document.querySelector(formSelector).addEventListener('submit', this.#submitHandler)
  }

  #submitHandler = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target)); // { text: 'название карточки' }

    this.#onAddItem(data);
    e.target.reset()
  }
}

export default TodoForm
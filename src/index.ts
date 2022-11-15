interface OptionsPopup {
	title: string;
	description: string;
}

class Popup {

	// Тут декларируются переменные, которые будут использоваться в классе
	private popupNode: HTMLDivElement;
	private options: OptionsPopup;

	constructor(options: OptionsPopup) {
		this.options = options;
		this.onInit();
	}

	/**
	 * Вызывается при создании экземпляра класса Popup
	 */
	onInit(): void {
		this.initVars();
		this.appendPopupNodeInBody();
	}

	/**
	 * Создание переменных в классе, в объекте this
	 */
	initVars(): void {
		this.popupNode = this.createPopupNode();
	}

	/**
	 * Добавить popupNode в body
	 */
	appendPopupNodeInBody(): void {
		// document.body - это узел из дерева, тег body, в самом JavaScript уже есть доступ к тегу body, его не надо искать с помощью document.querySelector('body')
		document.body.append(this.popupNode);
	}

	createPopupNode() {
		const popupNode = document.createElement('div');

		popupNode.classList.add('popup');
		popupNode.innerHTML = `
			<div class="popup__body">
				<button class="popup__close">Close</button>
				<div class="popup__content">
						<div class="popup__title">${this.options.title}</div>
						<div class="popup__description">${this.options.description}</div>
				</div>
			</div>
		`;

		return popupNode;
	}


}

// Это создание экземпляра класса Popup
const popup = new Popup({
	title: 'Day 07',
	description: 'Those frameworks though—they can be a pain to work with and you might not need a CSS framework at all if you could just solve your layout woes.'
}); // popup - экземпляр класса Popup





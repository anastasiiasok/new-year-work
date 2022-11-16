interface OptionsPopup {
	title?: string;
	description?: string;
}

interface PopupNodes {
	popupNode: HTMLDivElement;
	popupCloseNode: HTMLButtonElement;
	popupBodyNode: HTMLDivElement;
	popupContentNode: HTMLDivElement;
	popupTitleNode: HTMLHeadingElement;
	popupDescriptionNode: HTMLParagraphElement;
}



class Popup {

	// Тут декларируются переменные, которые будут использоваться в классе
	private nodes: PopupNodes;
	private options: OptionsPopup;
	private activeClassPopup: string = 'popup_open';
	private activeClassBody: string = 'body_overflow-hidden';

	constructor(options: OptionsPopup) {
		this.options = options;
		this.onInit();
	}

	/**
	 * Вызывается при создании экземпляра класса Popup
	 */
	private onInit(): void {
		this.initVars();
		this.initAddEventListeners();
		this.appendPopupNodeInBody();

	}

	/**
	 * Создание переменных в классе, в объекте this
	 */
	 private initVars(): void {
		const popupNode = this.createPopupNode();
		const popupCloseNode = popupNode.querySelector('.popup__close');
		const popupBodyNode = popupNode.querySelector('.popup__body');
		const popupContentNode = popupNode.querySelector('.popup__content');
		const popupTitleNode = popupNode.querySelector('.popup__title');
		const popupDescriptionNode = popupNode.querySelector('.popup__description');


		this.nodes = {
			popupNode: popupNode,
			popupCloseNode: popupCloseNode as HTMLButtonElement,
			popupBodyNode: popupBodyNode as HTMLDivElement,
			popupContentNode: popupContentNode as HTMLDivElement,
			popupTitleNode: popupTitleNode as HTMLHeadingElement,
			popupDescriptionNode: popupDescriptionNode as HTMLParagraphElement
		};
	}

	private initAddEventListeners(): void {

		this.nodes.popupCloseNode.addEventListener('click', this.popupCloseClickHandler);

	}

	private popupCloseClickHandler = () => {
		this.close();
	};

	/**
	 * Добавить popupNode в body
	 */
	 private appendPopupNodeInBody(): void {
		// document.body - это узел из дерева, тег body, в самом JavaScript уже есть доступ к тегу body, его не надо искать с помощью document.querySelector('body')
		document.body.append(this.nodes.popupNode);
	}

	private createPopupNode(): HTMLDivElement {
		const popupNode = document.createElement('div');

		popupNode.classList.add('popup');
		popupNode.innerHTML = `
			<button class="popup__close">Close</button>
			<div class="popup__body">
				<div class="popup__content">
						<h1 class="popup__title">${this.options.title || ''}</h1>
						<p class="popup__description">${this.options.description || ''}</p>
				</div>
			</div>
		`;

		return popupNode;
	}

	public open(): void {
		this.nodes.popupNode.classList.add(this.activeClassPopup);
		document.body.classList.add(this.activeClassBody);
	}

	public close(): void {
		this.nodes.popupNode.classList.remove(this.activeClassPopup);
		document.body.classList.remove(this.activeClassBody);
	}

	public edit(options: OptionsPopup): void {
		this.options = options;

		const popupTitleNode = this.nodes.popupNode.querySelector('.popup__title');
		const popupDescriptionNode = this.nodes.popupNode.querySelector('.popup__description');

		if (popupTitleNode !== null && this.options.title !== undefined) {
			popupTitleNode.innerHTML = this.options.title;
		}

		if (popupDescriptionNode !== null && this.options.description !== undefined) {
			popupDescriptionNode.innerHTML = this.options.description;
		}

	}


}

// Это создание экземпляра класса Popup
const popup = new Popup({
	title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perspiciatis tempora adipisci doloremque, impedit voluptatum explicabo ipsa corporis temporibus omnis totam fugit aut quaerat minus porro, pariatur fuga nemo deserunt.',
	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perspiciatis tempora adipisci doloremque, impedit voluptatum explicabo ipsa corporis temporibus omnis totam fugit aut quaerat minus porro, pariatur fuga nemo deserunt.'
}); // popup - экземпляр класса Popup
console.log(popup);


popup.open();

// console.log(popup);





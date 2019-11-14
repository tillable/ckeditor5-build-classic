import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class CustomParagraph extends Plugin {
	static get pluginName() {
		return 'CustomParagraph';
	}

	init() {
		const editor = this.editor;

		editor.conversion.elementToElement( { model: 'paragraph', view: 'div' } );
	}
}

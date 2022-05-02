/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
	useBlockProps,
	RichText,
	InspectorControls,
	PanelColorSettings,
} from "@wordpress/block-editor";

import {
	PanelBody,
	PanelRow,
	TextControl,
	RangeControl,
	RadioControl,
	__experimentalUnitControl as UnitControl,
	__experimentalInputControl as InputControl,
} from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();

	const { fieldLabel, textFieldLabelColor, textFieldBGColor, textFieldColor } =
		attributes;

	const onChangeTextFieldLabel = (newLabel) => {
		setAttributes({
			fieldLabel: newLabel === undefined ? "Text Field Label" : newLabel,
		});
	};

	const onChangeTextFieldLabelColor = (newTextFieldLabelColor) => {
		setAttributes({ textFieldLabelColor: newTextFieldLabelColor });
	};

	const onChangeTextFieldColor = (newTextFieldColor) => {
		setAttributes({ textFieldColor: newTextFieldColor });
	};

	const onChangeTextFieldBGColor = (newTextFieldBGColor) => {
		setAttributes({ textFieldBGColor: newTextFieldBGColor });
	};

	const SSCB_CF = "forged-contact-form";
	const SSCB_CF_group = `${SSCB_CF}__group`;
	const SSCB_CF_label = `${SSCB_CF_group}-label`;
	const SSCB_CF_input = `${SSCB_CF_group}-input`;

	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={__("Color Settings", "my-contact-form-block")}
					initialOpen={false}
					colorSettings={[
						{
							value: textFieldLabelColor,
							onChange: onChangeTextFieldLabelColor,
							label: __("Name label color", "my-contact-form-block"),
						},
						{
							value: textFieldColor,
							onChange: onChangeTextFieldColor,
							label: __("Text Field color", "my-contact-form-block"),
						},
						{
							value: textFieldBGColor,
							onChange: onChangeTextFieldBGColor,
							label: __("Text Field Background Color", "my-contact-form-block"),
						},
					]}
				/>
			</InspectorControls>
			<div {...blockProps} className={SSCB_CF_group}>
				<RichText
					tagName="label"
					className={SSCB_CF_label + " name-label"}
					value={fieldLabel}
					forHtml="name"
					allowedFormats={["core/bold", "core/italic"]}
					onChange={onChangeTextFieldLabel}
					placeholder={__("Name Label", "custom-contact-form")}
					style={{ color: textFieldLabelColor }}
				/>
				<input
					className={SSCB_CF_input}
					type="text"
					id="name"
					name="name"
					style={{ backgroundColor: textFieldBGColor, color: textFieldColor }}
				/>
			</div>
		</>
	);
}

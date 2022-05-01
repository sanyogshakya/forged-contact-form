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
	InnerBlocks,
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
	const {
		formId,
		nameLabel,
		emailLabel,
		messageLabel,
		messageRows,
		buttonText,
		buttonBackgroundColor,
		buttonTextColor,
		nameLabelColor,
		emailLabelColor,
		messageLabelColor,
		nameBackground,
		emailBackground,
		messageBackground,
		formBackgroundColor,
		nameTextColor,
		emailTextColor,
		messageTextColor,
		formMaxWidth,
		formMaxWidthUnit,
		formMinWidth,
		formMinWidthUnit,
		buttonWidth,
	} = attributes;
	const blockProps = useBlockProps();

	const uniqid = (prefix = "", random = false) => {
		const sec = Date.now() * 1000 + Math.random() * 1000;
		const id = sec.toString(16).replace(/\./g, "").padEnd(14, "0");
		return `${prefix}${id}${
			random ? `.${Math.trunc(Math.random() * 100000000)}` : ""
		}`;
	};

	if (formId === undefined || formId === "") {
		setAttributes({ formId: uniqid });
	}

	const SSCB_CF = "forged-contact-form";
	const SSCB_CF_group = `${SSCB_CF}__group`;
	const SSCB_CF_label = `${SSCB_CF_group}-label`;
	const SSCB_CF_input = `${SSCB_CF_group}-input`;
	const SSCB_CF_textarea = `${SSCB_CF_group}-textarea`;
	const SSCB_CF_button = `${SSCB_CF_group}-button`;

	const onChangeNameLabelText = (newNameLabel) => {
		setAttributes({
			nameLabel: newNameLabel === undefined ? "Name" : newNameLabel,
		});
	};

	const onChangeEmailLabelText = (newEmailLabel) => {
		setAttributes({
			emailLabel: newEmailLabel === undefined ? "Email" : newEmailLabel,
		});
	};

	const onChangeMessageLabelText = (newMessageLabel) => {
		setAttributes({
			messageLabel: newMessageLabel === undefined ? "Message" : newMessageLabel,
		});
	};

	const onChangeMessageRows = (newMessageRows) => {
		setAttributes({
			messageRows: newMessageRows === undefined ? 5 : newMessageRows,
		});
	};

	const onChangeButtonText = (newButtonText) => {
		setAttributes({ buttonText: newButtonText });
	};

	const onChangeButtonBackgroundColor = (newButtonBackgroundColor) => {
		setAttributes({ buttonBackgroundColor: newButtonBackgroundColor });
	};

	const onChangeButtonTextColor = (newButtonTextColor) => {
		setAttributes({ buttonTextColor: newButtonTextColor });
	};

	const onChangeNameLabelColor = (newNameLabelColor) => {
		setAttributes({ nameLabelColor: newNameLabelColor });
	};

	const onChangeEmailLabelColor = (newEmailLabelColor) => {
		setAttributes({ emailLabelColor: newEmailLabelColor });
	};

	const onChangeMessageLabelColor = (newMessageLabelColor) => {
		setAttributes({ messageLabelColor: newMessageLabelColor });
	};

	const onChangeNameTextColor = (newNameTextColor) => {
		setAttributes({ nameTextColor: newNameTextColor });
	};

	const onChangeEmailTextColor = (newEmailTextColor) => {
		setAttributes({ emailTextColor: newEmailTextColor });
	};

	const onChangeMessageTextColor = (newMessageTextColor) => {
		setAttributes({ messageTextColor: newMessageTextColor });
	};

	const onChangeNameBackground = (newNameBackground) => {
		setAttributes({ nameBackground: newNameBackground });
	};

	const onChangeEmailBackground = (newEmailBackground) => {
		setAttributes({ emailBackground: newEmailBackground });
	};

	const onChangeMessageBackground = (newMessageBackground) => {
		setAttributes({ messageBackground: newMessageBackground });
	};

	const onChangeFormBackgroundColor = (newFormBackgroundColor) => {
		setAttributes({ formBackgroundColor: newFormBackgroundColor });
	};

	const onChangeFormMaxWidth = (newFormMaxWidth) => {
		setAttributes({ formMaxWidth: newFormMaxWidth });
	};

	const onChangeFormMaxWidthUnit = (newFormMaxWidthUnit) => {
		setAttributes({ formMaxWidthUnit: newFormMaxWidthUnit });
	};

	const onChangeFormMinWidth = (newFormMinWidth) => {
		setAttributes({ formMinWidth: newFormMinWidth });
	};

	const onChangeFormMinWidthUnit = (newFormMinWidthUnit) => {
		setAttributes({ formMinWidthUnit: newFormMinWidthUnit });
	};

	const onChangeButtonWidth = (newButtonWidth) => {
		setAttributes({ buttonWidth: newButtonWidth });
	};

	const formWidthUnits = [
		{ value: "px", label: "px", default: 600 },
		{ value: "%", label: "%", default: 100 },
	];

	const ALLOWED_BLOCKS = ["create-block/forged-contact-form-text-block"];

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__("Field Settings", "custom-contact-form-block")}
					initialOpen={true}
				>
					<PanelRow>
						<UnitControl
							label={__("Form max-width", "custom-contact-form-block")}
							value={formMaxWidth}
							units={formWidthUnits}
							onChange={onChangeFormMaxWidth}
							onUnitChange={onChangeFormMaxWidthUnit}
						/>
						<UnitControl
							label={__("Form min-width", "custom-contact-form-block")}
							value={formMinWidth}
							units={formWidthUnits}
							onChange={onChangeFormMinWidth}
							onUnitChange={onChangeFormMinWidthUnit}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={__("Text of Send button", "custom-contact-form-block")}
							value={buttonText}
							onChange={onChangeButtonText}
							help={__("Add the text for Send button")}
						/>
					</PanelRow>
					<PanelRow>
						<RadioControl
							label={__("Button Width")}
							selected={buttonWidth}
							options={[
								{ label: "25%", value: "25%" },
								{ label: "50%", value: "50%" },
								{ label: "75%", value: "75%" },
								{ label: "100%", value: "100%" },
							]}
							onChange={onChangeButtonWidth}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl
							label={__("Message Size", "custom-contact-form-block")}
							min={1}
							max={50}
							value={messageRows}
							onChange={onChangeMessageRows}
							help={__("Change Message textarea height. Default is 5.")}
						/>
					</PanelRow>
				</PanelBody>
				<PanelColorSettings
					title={__("Color Settings", "my-contact-form-block")}
					initialOpen={false}
					colorSettings={[
						{
							value: buttonTextColor,
							onChange: onChangeButtonTextColor,
							label: __("Button text", "my-contact-form-block"),
						},
						{
							value: buttonBackgroundColor,
							onChange: onChangeButtonBackgroundColor,
							label: __("Button background", "my-contact-form-block"),
						},
						{
							value: nameLabelColor,
							onChange: onChangeNameLabelColor,
							label: __("Name label color", "my-contact-form-block"),
						},
						{
							value: emailLabelColor,
							onChange: onChangeEmailLabelColor,
							label: __("Email label color", "my-contact-form-block"),
						},
						{
							value: messageLabelColor,
							onChange: onChangeMessageLabelColor,
							label: __("Message label color", "my-contact-form-block"),
						},
						{
							value: nameTextColor,
							onChange: onChangeNameTextColor,
							label: __("Name text color", "my-contact-form-block"),
						},
						{
							value: emailTextColor,
							onChange: onChangeEmailTextColor,
							label: __("Email text color", "my-contact-form-block"),
						},
						{
							value: messageTextColor,
							onChange: onChangeMessageTextColor,
							label: __("Message text color", "my-contact-form-block"),
						},
						{
							value: nameBackground,
							onChange: onChangeNameBackground,
							label: __("Name field Background Color", "my-contact-form-block"),
						},
						{
							value: emailBackground,
							onChange: onChangeEmailBackground,
							label: __(
								"Email field Background Color",
								"my-contact-form-block"
							),
						},
						{
							value: messageBackground,
							onChange: onChangeMessageBackground,
							label: __(
								"Message field Background Color",
								"my-contact-form-block"
							),
						},
						{
							value: formBackgroundColor,
							onChange: onChangeFormBackgroundColor,
							label: __("Form Background Color", "my-contact-form-block"),
						},
					]}
				/>
			</InspectorControls>
			<div
				{...blockProps}
				style={{ maxWidth: formMaxWidth, minWidth: formMinWidth }}
			>
				<form
					className={SSCB_CF + "--editor"}
					id={formId}
					style={{ backgroundColor: formBackgroundColor }}
				>
					<div className={SSCB_CF_group}>
						<RichText
							tagName="label"
							className={SSCB_CF_label + " name-label"}
							value={nameLabel}
							forHtml="name"
							allowedFormats={["core/bold", "core/italic"]}
							onChange={onChangeNameLabelText}
							placeholder={__("Name Label", "custom-contact-form")}
							style={{ color: nameLabelColor }}
						/>
						<input
							className={SSCB_CF_input}
							type="text"
							id="name"
							name="name"
							style={{ backgroundColor: nameBackground, color: nameTextColor }}
						/>
					</div>
					<div className={SSCB_CF_group}>
						<RichText
							tagName="label"
							className={SSCB_CF_label + " email-label"}
							value={emailLabel}
							forHtml="email"
							allowedFormats={["core/bold", "core/italic"]}
							onChange={onChangeEmailLabelText}
							placeholder={__("Email Label", "custom-contact-form")}
							style={{ color: emailLabelColor }}
						/>
						<input
							className={SSCB_CF_input}
							type="email"
							id="email"
							name="email"
							style={{
								backgroundColor: emailBackground,
								color: emailTextColor,
							}}
						/>
					</div>
					<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
					<div className={SSCB_CF_group}>
						<RichText
							tagName="label"
							className={SSCB_CF_label + " message-label"}
							value={messageLabel}
							forHtml="message"
							allowedFormats={["core/bold", "core/italic"]}
							onChange={onChangeMessageLabelText}
							placeholder={__("Message Label", "custom-contact-form")}
							style={{ color: messageLabelColor }}
						/>
						<textarea
							className={SSCB_CF_textarea}
							rows={messageRows}
							id="message"
							name="message"
							style={{
								backgroundColor: messageBackground,
								color: messageTextColor,
							}}
						></textarea>
					</div>
					{/* <button type="submit" className={SSCB_CF_button} style={ { backgroundColor: buttonBackgroundColor, color: buttonTextColor , width: buttonWidth } } disabled>{buttonText}</button> */}
					<RichText
						className={SSCB_CF_button + " wp-block-button__link"}
						value={buttonText}
						forHtml="message"
						allowedFormats={["core/bold", "core/italic"]}
						onChange={onChangeButtonText}
						placeholder={__("Submit", "custom-contact-form")}
						style={{
							backgroundColor: buttonBackgroundColor,
							color: buttonTextColor,
							width: buttonWidth,
						}}
					/>
				</form>
			</div>
		</>
	);
}

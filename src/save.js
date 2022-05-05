/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( { attributes } ) {
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

	const blockProps = useBlockProps.save();

	const SSCB_CF = "forged-contact-form";
	const SSCB_CF_group = `${SSCB_CF}__group`;
	const SSCB_CF_label = `${SSCB_CF_group}-label`;
	const SSCB_CF_input = `${SSCB_CF_group}-input`;
	const SSCB_CF_textarea = `${SSCB_CF_group}-textarea`;
	const SSCB_CF_button = `${SSCB_CF_group}-button`;

	return (
		<div
			{...blockProps}
			style={{ maxWidth: formMaxWidth, minWidth: formMinWidth }}
		>
			<form
				className={SSCB_CF}
				id={formId}
				style={{ backgroundColor: formBackgroundColor }}
			>
				<div className={SSCB_CF_group}>
					<RichText.Content
						tagName="label"
						className={SSCB_CF_label + " name-label"}
						value={nameLabel}
						forHtml="name"
						style={{ color: nameLabelColor }}
					/>
					<input
						className={SSCB_CF_input + ' ' + SSCB_CF_input+'_name'}
						type="text"
						id="name"
						name="name"
						style={{ backgroundColor: nameBackground, color: nameTextColor }}
						required
					/>
				</div>
				<div className={SSCB_CF_group}>
					<RichText.Content
						tagName="label"
						className={SSCB_CF_label + " email-label"}
						value={emailLabel}
						forHtml="email"
						style={{ color: emailLabelColor }}
					/>
					<input
						className={SSCB_CF_input + ' ' + SSCB_CF_input+'_email'}
						type="email"
						id="email"
						name="email"
						style={{
							backgroundColor: emailBackground,
							color: emailTextColor,
						}}
						required
					/>
				</div>
				<div className={SSCB_CF_group}>
					<RichText.Content
						tagName="label"
						className={SSCB_CF_label + " message-label"}
						value={messageLabel}
						forHtml="message"
						style={{ color: messageLabelColor }}
					/>
					<textarea
						className={SSCB_CF_textarea + ' ' + SSCB_CF_input+'_message'}
						rows={messageRows}
						id="message"
						name="message"
						style={{
							backgroundColor: messageBackground,
							color: messageTextColor,
						}}
						required
					></textarea>
				</div>
				<div className={SSCB_CF_group + ' forged-contact-form__button-group'}>
					<button type="submit" className={SSCB_CF_button + " wp-block-button__link"} style={ { backgroundColor: buttonBackgroundColor, color: buttonTextColor , width: buttonWidth } }>
						{buttonText}
					</button>
				</div>
			</form>
			<div className="forged-contact-form__submit-overlay">
				<svg  id="forged-checkmark-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
				<ellipse style="paint-order: stroke; stroke: rgb(0, 255, 0); fill: rgba(216, 216, 216, 0); stroke-linecap: round; stroke-width: 45px;" cx="250" cy="250" rx="225.597" ry="225.597" bxOrigin="0.499352 0.499352"/>
  <path style="stroke: rgb(0, 255, 0); paint-order: stroke; fill: rgba(216, 216, 216, 0); stroke-linecap: square; stroke-width: 45px; stroke-linejoin: round;" d="M 144 256.824 L 218.686 331.496 L 218.686 332.151 L 351 200" bxOrigin="0.213609 0.499034"/>
</svg>
			</div>
		</div>
	);
}

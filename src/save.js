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
				<button type="submit" className={SSCB_CF_button + " wp-block-button__link"} style={ { backgroundColor: buttonBackgroundColor, color: buttonTextColor , width: buttonWidth } }>
					{buttonText}
					<svg version="1.1" id="forged-checkmark-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve" width="154px" >
<g>
	<path d="M474.045,173.813c-4.201,1.371-6.494,5.888-5.123,10.088c7.571,23.199,11.411,47.457,11.411,72.1
		c0,62.014-24.149,120.315-68,164.166s-102.153,68-164.167,68s-120.316-24.149-164.167-68S16,318.014,16,256
		S40.149,135.684,84,91.833s102.153-68,164.167-68c32.889,0,64.668,6.734,94.455,20.017c28.781,12.834,54.287,31.108,75.81,54.315
		c3.004,3.239,8.066,3.431,11.306,0.425c3.24-3.004,3.43-8.065,0.426-11.306c-23-24.799-50.26-44.328-81.024-58.047
		C317.287,15.035,283.316,7.833,248.167,7.833c-66.288,0-128.608,25.813-175.48,72.687C25.814,127.392,0,189.712,0,256
		c0,66.287,25.814,128.607,72.687,175.479c46.872,46.873,109.192,72.687,175.48,72.687s128.608-25.813,175.48-72.687
		c46.873-46.872,72.687-109.192,72.687-175.479c0-26.332-4.105-52.26-12.201-77.064
		C482.762,174.736,478.245,172.445,474.045,173.813z"/>
	<path d="M504.969,83.262c-4.532-4.538-10.563-7.037-16.98-7.037s-12.448,2.499-16.978,7.034l-7.161,7.161
		c-3.124,3.124-3.124,8.189,0,11.313c3.124,3.123,8.19,3.124,11.314-0.001l7.164-7.164c1.51-1.512,3.52-2.344,5.66-2.344
		s4.15,0.832,5.664,2.348c1.514,1.514,2.348,3.524,2.348,5.663s-0.834,4.149-2.348,5.663L217.802,381.75
		c-1.51,1.512-3.52,2.344-5.66,2.344s-4.15-0.832-5.664-2.348L98.747,274.015c-1.514-1.514-2.348-3.524-2.348-5.663
		c0-2.138,0.834-4.149,2.351-5.667c1.51-1.512,3.52-2.344,5.66-2.344s4.15,0.832,5.664,2.348l96.411,96.411
		c1.5,1.5,3.535,2.343,5.657,2.343s4.157-0.843,5.657-2.343l234.849-234.849c3.125-3.125,3.125-8.189,0-11.314
		c-3.124-3.123-8.189-3.123-11.313,0L212.142,342.129l-90.75-90.751c-4.533-4.538-10.563-7.037-16.98-7.037
		s-12.448,2.499-16.978,7.034c-4.536,4.536-7.034,10.565-7.034,16.977c0,6.412,2.498,12.441,7.034,16.978l107.728,107.728
		c4.532,4.538,10.563,7.037,16.98,7.037c6.417,0,12.448-2.499,16.977-7.033l275.847-275.848c4.536-4.536,7.034-10.565,7.034-16.978
		S509.502,87.794,504.969,83.262z"/>
</g>
</svg>
				</button>
			</form>
		</div>
	);
}

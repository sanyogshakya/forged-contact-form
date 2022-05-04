/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");



/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */



/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

function Edit(_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;
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
    buttonWidth
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();

  const uniqid = function () {
    let prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    let random = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    const sec = Date.now() * 1000 + Math.random() * 1000;
    const id = sec.toString(16).replace(/\./g, "").padEnd(14, "0");
    return `${prefix}${id}${random ? `.${Math.trunc(Math.random() * 100000000)}` : ""}`;
  };

  if (formId === undefined || formId === "") {
    const newFormID = 'forged-contact-form__' + uniqid();
    setAttributes({
      formId: newFormID
    });
  }

  const SSCB_CF = "forged-contact-form";
  const SSCB_CF_group = `${SSCB_CF}__group`;
  const SSCB_CF_label = `${SSCB_CF_group}-label`;
  const SSCB_CF_input = `${SSCB_CF_group}-input`;
  const SSCB_CF_textarea = `${SSCB_CF_group}-textarea`;
  const SSCB_CF_button = `${SSCB_CF_group}-button`;

  const onChangeNameLabelText = newNameLabel => {
    setAttributes({
      nameLabel: newNameLabel === undefined ? "Name" : newNameLabel
    });
  };

  const onChangeEmailLabelText = newEmailLabel => {
    setAttributes({
      emailLabel: newEmailLabel === undefined ? "Email" : newEmailLabel
    });
  };

  const onChangeMessageLabelText = newMessageLabel => {
    setAttributes({
      messageLabel: newMessageLabel === undefined ? "Message" : newMessageLabel
    });
  };

  const onChangeMessageRows = newMessageRows => {
    setAttributes({
      messageRows: newMessageRows === undefined ? 5 : newMessageRows
    });
  };

  const onChangeButtonText = newButtonText => {
    setAttributes({
      buttonText: newButtonText
    });
  };

  const onChangeButtonBackgroundColor = newButtonBackgroundColor => {
    setAttributes({
      buttonBackgroundColor: newButtonBackgroundColor
    });
  };

  const onChangeButtonTextColor = newButtonTextColor => {
    setAttributes({
      buttonTextColor: newButtonTextColor
    });
  };

  const onChangeNameLabelColor = newNameLabelColor => {
    setAttributes({
      nameLabelColor: newNameLabelColor
    });
  };

  const onChangeEmailLabelColor = newEmailLabelColor => {
    setAttributes({
      emailLabelColor: newEmailLabelColor
    });
  };

  const onChangeMessageLabelColor = newMessageLabelColor => {
    setAttributes({
      messageLabelColor: newMessageLabelColor
    });
  };

  const onChangeNameTextColor = newNameTextColor => {
    setAttributes({
      nameTextColor: newNameTextColor
    });
  };

  const onChangeEmailTextColor = newEmailTextColor => {
    setAttributes({
      emailTextColor: newEmailTextColor
    });
  };

  const onChangeMessageTextColor = newMessageTextColor => {
    setAttributes({
      messageTextColor: newMessageTextColor
    });
  };

  const onChangeNameBackground = newNameBackground => {
    setAttributes({
      nameBackground: newNameBackground
    });
  };

  const onChangeEmailBackground = newEmailBackground => {
    setAttributes({
      emailBackground: newEmailBackground
    });
  };

  const onChangeMessageBackground = newMessageBackground => {
    setAttributes({
      messageBackground: newMessageBackground
    });
  };

  const onChangeFormBackgroundColor = newFormBackgroundColor => {
    setAttributes({
      formBackgroundColor: newFormBackgroundColor
    });
  };

  const onChangeFormMaxWidth = newFormMaxWidth => {
    setAttributes({
      formMaxWidth: newFormMaxWidth
    });
  };

  const onChangeFormMaxWidthUnit = newFormMaxWidthUnit => {
    setAttributes({
      formMaxWidthUnit: newFormMaxWidthUnit
    });
  };

  const onChangeFormMinWidth = newFormMinWidth => {
    setAttributes({
      formMinWidth: newFormMinWidth
    });
  };

  const onChangeFormMinWidthUnit = newFormMinWidthUnit => {
    setAttributes({
      formMinWidthUnit: newFormMinWidthUnit
    });
  };

  const onChangeButtonWidth = newButtonWidth => {
    setAttributes({
      buttonWidth: newButtonWidth
    });
  };

  const formWidthUnits = [{
    value: "px",
    label: "px",
    default: 600
  }, {
    value: "%",
    label: "%",
    default: 100
  }];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Field Settings", "custom-contact-form-block"),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Form max-width", "custom-contact-form-block"),
    value: formMaxWidth,
    units: formWidthUnits,
    onChange: onChangeFormMaxWidth,
    onUnitChange: onChangeFormMaxWidthUnit
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Form min-width", "custom-contact-form-block"),
    value: formMinWidth,
    units: formWidthUnits,
    onChange: onChangeFormMinWidth,
    onUnitChange: onChangeFormMinWidthUnit
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Text of Send button", "custom-contact-form-block"),
    value: buttonText,
    onChange: onChangeButtonText,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Add the text for Send button")
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Button Width"),
    selected: buttonWidth,
    options: [{
      label: "25%",
      value: "25%"
    }, {
      label: "50%",
      value: "50%"
    }, {
      label: "75%",
      value: "75%"
    }, {
      label: "100%",
      value: "100%"
    }],
    onChange: onChangeButtonWidth
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Message Size", "custom-contact-form-block"),
    min: 1,
    max: 50,
    value: messageRows,
    onChange: onChangeMessageRows,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Change Message textarea height. Default is 5.")
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Color Settings", "my-contact-form-block"),
    initialOpen: false,
    colorSettings: [{
      value: buttonTextColor,
      onChange: onChangeButtonTextColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Button text", "my-contact-form-block")
    }, {
      value: buttonBackgroundColor,
      onChange: onChangeButtonBackgroundColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Button background", "my-contact-form-block")
    }, {
      value: nameLabelColor,
      onChange: onChangeNameLabelColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Name label color", "my-contact-form-block")
    }, {
      value: emailLabelColor,
      onChange: onChangeEmailLabelColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Email label color", "my-contact-form-block")
    }, {
      value: messageLabelColor,
      onChange: onChangeMessageLabelColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Message label color", "my-contact-form-block")
    }, {
      value: nameTextColor,
      onChange: onChangeNameTextColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Name text color", "my-contact-form-block")
    }, {
      value: emailTextColor,
      onChange: onChangeEmailTextColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Email text color", "my-contact-form-block")
    }, {
      value: messageTextColor,
      onChange: onChangeMessageTextColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Message text color", "my-contact-form-block")
    }, {
      value: nameBackground,
      onChange: onChangeNameBackground,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Name field Background Color", "my-contact-form-block")
    }, {
      value: emailBackground,
      onChange: onChangeEmailBackground,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Email field Background Color", "my-contact-form-block")
    }, {
      value: messageBackground,
      onChange: onChangeMessageBackground,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Message field Background Color", "my-contact-form-block")
    }, {
      value: formBackgroundColor,
      onChange: onChangeFormBackgroundColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Form Background Color", "my-contact-form-block")
    }]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, {
    style: {
      maxWidth: formMaxWidth,
      minWidth: formMinWidth
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("form", {
    className: SSCB_CF + "--editor",
    id: formId,
    style: {
      backgroundColor: formBackgroundColor
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: SSCB_CF_group
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: "label",
    className: SSCB_CF_label + " name-label",
    value: nameLabel,
    forHtml: "name",
    allowedFormats: ["core/bold", "core/italic"],
    onChange: onChangeNameLabelText,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Name Label", "custom-contact-form"),
    style: {
      color: nameLabelColor
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
    className: SSCB_CF_input,
    type: "text",
    id: "name",
    name: "name",
    style: {
      backgroundColor: nameBackground,
      color: nameTextColor
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: SSCB_CF_group
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: "label",
    className: SSCB_CF_label + " email-label",
    value: emailLabel,
    forHtml: "email",
    allowedFormats: ["core/bold", "core/italic"],
    onChange: onChangeEmailLabelText,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Email Label", "custom-contact-form"),
    style: {
      color: emailLabelColor
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
    className: SSCB_CF_input,
    type: "email",
    id: "email",
    name: "email",
    style: {
      backgroundColor: emailBackground,
      color: emailTextColor
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: SSCB_CF_group
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: "label",
    className: SSCB_CF_label + " message-label",
    value: messageLabel,
    forHtml: "message",
    allowedFormats: ["core/bold", "core/italic"],
    onChange: onChangeMessageLabelText,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Message Label", "custom-contact-form"),
    style: {
      color: messageLabelColor
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("textarea", {
    className: SSCB_CF_textarea,
    rows: messageRows,
    id: "message",
    name: "message",
    style: {
      backgroundColor: messageBackground,
      color: messageTextColor
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    className: SSCB_CF_button + " wp-block-button__link",
    value: buttonText,
    allowedFormats: ["core/bold", "core/italic"],
    onChange: onChangeButtonText,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Submit", "custom-contact-form"),
    style: {
      backgroundColor: buttonBackgroundColor,
      color: buttonTextColor,
      width: buttonWidth
    }
  }))));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('create-block/forged-contact-form', {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);



/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */



/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save(_ref) {
  let {
    attributes
  } = _ref;
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
    buttonWidth
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save();
  const SSCB_CF = "forged-contact-form";
  const SSCB_CF_group = `${SSCB_CF}__group`;
  const SSCB_CF_label = `${SSCB_CF_group}-label`;
  const SSCB_CF_input = `${SSCB_CF_group}-input`;
  const SSCB_CF_textarea = `${SSCB_CF_group}-textarea`;
  const SSCB_CF_button = `${SSCB_CF_group}-button`;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, {
    style: {
      maxWidth: formMaxWidth,
      minWidth: formMinWidth
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("form", {
    className: SSCB_CF,
    id: formId,
    style: {
      backgroundColor: formBackgroundColor
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: SSCB_CF_group
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
    tagName: "label",
    className: SSCB_CF_label + " name-label",
    value: nameLabel,
    forHtml: "name",
    style: {
      color: nameLabelColor
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
    className: SSCB_CF_input + ' ' + SSCB_CF_input + '_name',
    type: "text",
    id: "name",
    name: "name",
    style: {
      backgroundColor: nameBackground,
      color: nameTextColor
    },
    required: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: SSCB_CF_group
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
    tagName: "label",
    className: SSCB_CF_label + " email-label",
    value: emailLabel,
    forHtml: "email",
    style: {
      color: emailLabelColor
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
    className: SSCB_CF_input + ' ' + SSCB_CF_input + '_email',
    type: "email",
    id: "email",
    name: "email",
    style: {
      backgroundColor: emailBackground,
      color: emailTextColor
    },
    required: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: SSCB_CF_group
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
    tagName: "label",
    className: SSCB_CF_label + " message-label",
    value: messageLabel,
    forHtml: "message",
    style: {
      color: messageLabelColor
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("textarea", {
    className: SSCB_CF_textarea + ' ' + SSCB_CF_input + '_message',
    rows: messageRows,
    id: "message",
    name: "message",
    style: {
      backgroundColor: messageBackground,
      color: messageTextColor
    },
    required: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
    type: "submit",
    className: SSCB_CF_button + " wp-block-button__link",
    style: {
      backgroundColor: buttonBackgroundColor,
      color: buttonTextColor,
      width: buttonWidth
    }
  }, buttonText, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    version: "1.1",
    id: "forged-checkmark-svg",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve",
    width: "154px"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M474.045,173.813c-4.201,1.371-6.494,5.888-5.123,10.088c7.571,23.199,11.411,47.457,11.411,72.1\r c0,62.014-24.149,120.315-68,164.166s-102.153,68-164.167,68s-120.316-24.149-164.167-68S16,318.014,16,256\r S40.149,135.684,84,91.833s102.153-68,164.167-68c32.889,0,64.668,6.734,94.455,20.017c28.781,12.834,54.287,31.108,75.81,54.315\r c3.004,3.239,8.066,3.431,11.306,0.425c3.24-3.004,3.43-8.065,0.426-11.306c-23-24.799-50.26-44.328-81.024-58.047\r C317.287,15.035,283.316,7.833,248.167,7.833c-66.288,0-128.608,25.813-175.48,72.687C25.814,127.392,0,189.712,0,256\r c0,66.287,25.814,128.607,72.687,175.479c46.872,46.873,109.192,72.687,175.48,72.687s128.608-25.813,175.48-72.687\r c46.873-46.872,72.687-109.192,72.687-175.479c0-26.332-4.105-52.26-12.201-77.064\r C482.762,174.736,478.245,172.445,474.045,173.813z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M504.969,83.262c-4.532-4.538-10.563-7.037-16.98-7.037s-12.448,2.499-16.978,7.034l-7.161,7.161\r c-3.124,3.124-3.124,8.189,0,11.313c3.124,3.123,8.19,3.124,11.314-0.001l7.164-7.164c1.51-1.512,3.52-2.344,5.66-2.344\r s4.15,0.832,5.664,2.348c1.514,1.514,2.348,3.524,2.348,5.663s-0.834,4.149-2.348,5.663L217.802,381.75\r c-1.51,1.512-3.52,2.344-5.66,2.344s-4.15-0.832-5.664-2.348L98.747,274.015c-1.514-1.514-2.348-3.524-2.348-5.663\r c0-2.138,0.834-4.149,2.351-5.667c1.51-1.512,3.52-2.344,5.66-2.344s4.15,0.832,5.664,2.348l96.411,96.411\r c1.5,1.5,3.535,2.343,5.657,2.343s4.157-0.843,5.657-2.343l234.849-234.849c3.125-3.125,3.125-8.189,0-11.314\r c-3.124-3.123-8.189-3.123-11.313,0L212.142,342.129l-90.75-90.751c-4.533-4.538-10.563-7.037-16.98-7.037\r s-12.448,2.499-16.978,7.034c-4.536,4.536-7.034,10.565-7.034,16.977c0,6.412,2.498,12.441,7.034,16.978l107.728,107.728\r c4.532,4.538,10.563,7.037,16.98,7.037c6.417,0,12.448-2.499,16.977-7.033l275.847-275.848c4.536-4.536,7.034-10.565,7.034-16.978\r S509.502,87.794,504.969,83.262z"
  }))))));
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkforged_contact_form"] = self["webpackChunkforged_contact_form"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
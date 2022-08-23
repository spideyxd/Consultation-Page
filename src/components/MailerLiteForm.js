import React from 'react'

const MailerLiteForm = () => {
  return (
    <>
    <>
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        '@import url("https://groot.mailerlite.com/assets/plugins/groot/modules/includes/groot_fonts/import.css?version=1661181");'
    }}
  />
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "\n    /* LOADER */\n    .ml-form-embedSubmitLoad {\n      display: inline-block;\n      width: 20px;\n      height: 20px;\n    }\n\n    .g-recaptcha {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    transform-origin: 0 0;\n    -webkit-transform-origin: 0 0;\n    height: ;\n    }\n\n    .sr-only {\n      position: absolute;\n      width: 1px;\n      height: 1px;\n      padding: 0;\n      margin: -1px;\n      overflow: hidden;\n      clip: rect(0,0,0,0);\n      border: 0;\n    }\n\n    .ml-form-embedSubmitLoad:after {\n      content: \" \";\n      display: block;\n      width: 11px;\n      height: 11px;\n      margin: 1px;\n      border-radius: 50%;\n      border: 4px solid #fff;\n    border-color: #ffffff #ffffff #ffffff transparent;\n    animation: ml-form-embedSubmitLoad 1.2s linear infinite;\n    }\n    @keyframes ml-form-embedSubmitLoad {\n      0% {\n      transform: rotate(0deg);\n      }\n      100% {\n      transform: rotate(360deg);\n      }\n    }\n      #mlb2-1208653.ml-form-embedContainer {\n        box-sizing: border-box;\n        display: table;\n        margin: 0 auto;\n        position: static;\n        width: 100% !important;\n      }\n      #mlb2-1208653.ml-form-embedContainer h4,\n      #mlb2-1208653.ml-form-embedContainer p,\n      #mlb2-1208653.ml-form-embedContainer span,\n      #mlb2-1208653.ml-form-embedContainer button {\n        text-transform: none !important;\n        letter-spacing: normal !important;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper {\n        background-color: #f5efa4;\n        \n        border-width: 0px;\n        border-color: transparent;\n        border-radius: 4px;\n        border-style: solid;\n        box-sizing: border-box;\n        display: inline-block !important;\n        margin: 0;\n        padding: 0;\n        position: relative;\n              }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper.embedPopup,\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper.embedDefault { width: 400px; }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper.embedForm { max-width: 400px; width: 100%; }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-align-left { text-align: left; }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-align-center { text-align: center; }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-align-default { display: table-cell !important; vertical-align: middle !important; text-align: center !important; }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-align-right { text-align: right; }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedHeader img {\n        border-top-left-radius: 4px;\n        border-top-right-radius: 4px;\n        height: auto;\n        margin: 0 auto !important;\n        max-width: 100%;\n        width: undefinedpx;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody,\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody {\n        padding: 20px 20px 0 20px;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody.ml-form-embedBodyHorizontal {\n        padding-bottom: 0;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent,\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent {\n        text-align: left;\n        margin: 0 0 20px 0;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent h4,\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent h4 {\n        color: #000000;\n        font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n        font-size: 30px;\n        font-weight: 400;\n        margin: 0 0 10px 0;\n        text-align: left;\n        word-break: break-word;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p,\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p {\n        color: #000000;\n        font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n        font-size: 14px;\n        font-weight: 400;\n        line-height: 20px;\n        margin: 0 0 10px 0;\n        text-align: left;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ul,\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ol,\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ul,\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ol {\n        color: #000000;\n        font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n        font-size: 14px;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ol ol,\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ol ol {\n        list-style-type: lower-alpha;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ol ol ol,\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ol ol ol {\n        list-style-type: lower-roman;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p a,\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p a {\n        color: #000000;\n        text-decoration: underline;\n      }\n\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-block-form .ml-field-group {\n        text-align: left!important;\n      }\n\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-block-form .ml-field-group label {\n        margin-bottom: 5px;\n        color: #333333;\n        font-size: 14px;\n        font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n        font-weight: bold; font-style: normal; text-decoration: none;;\n        display: inline-block;\n        line-height: 20px;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p:last-child,\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p:last-child {\n        margin: 0;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody form {\n        margin: 0;\n        width: 100%;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent,\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow {\n        margin: 0 0 20px 0;\n        width: 100%;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow {\n        float: left;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent.horozintalForm {\n        margin: 0;\n        padding: 0 0 20px 0;\n        width: 100%;\n        height: auto;\n        float: left;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow {\n        margin: 0 0 10px 0;\n        width: 100%;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow.ml-last-item {\n        margin: 0;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow.ml-formfieldHorizintal {\n        margin: 0;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input {\n        background-color: #ffffff !important;\n        color: #333333 !important;\n        border-color: #cccccc;\n        border-radius: 4px !important;\n        border-style: solid !important;\n        border-width: 1px !important;\n        font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n        font-size: 14px !important;\n        height: auto;\n        line-height: 21px !important;\n        margin-bottom: 0;\n        margin-top: 0;\n        margin-left: 0;\n        margin-right: 0;\n        padding: 10px 10px !important;\n        width: 100% !important;\n        box-sizing: border-box !important;\n        max-width: 100% !important;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input::-webkit-input-placeholder,\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input::-webkit-input-placeholder { color: #333333; }\n\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input::-moz-placeholder,\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input::-moz-placeholder { color: #333333; }\n\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input:-ms-input-placeholder,\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input:-ms-input-placeholder { color: #333333; }\n\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input:-moz-placeholder,\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input:-moz-placeholder { color: #333333; }\n\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow textarea, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow textarea {\n        background-color: #ffffff !important;\n        color: #333333 !important;\n        border-color: #cccccc;\n        border-radius: 4px !important;\n        border-style: solid !important;\n        border-width: 1px !important;\n        font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n        font-size: 14px !important;\n        height: auto;\n        line-height: 21px !important;\n        margin-bottom: 0;\n        margin-top: 0;\n        padding: 10px 10px !important;\n        width: 100% !important;\n        box-sizing: border-box !important;\n        max-width: 100% !important;\n      }\n\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label::before, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label::before, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::before, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::before, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before {\n          border-color: #cccccc!important;\n          background-color: #ffffff!important;\n      }\n\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input.custom-control-input[type=\"checkbox\"]{\n        box-sizing: border-box;\n        padding: 0;\n        position: absolute;\n        z-index: -1;\n        opacity: 0;\n        margin-top: 5px;\n        margin-left: -1.5rem;\n        overflow: visible;\n      }\n\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::before, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::before, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before {\n        border-radius: 4px!important;\n      }\n\n\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type=checkbox]:checked~.label-description::after, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox input[type=checkbox]:checked~.label-description::after, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-input:checked~.custom-control-label::after, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-input:checked~.custom-control-label::after, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox input[type=checkbox]:checked~.label-description::after {\n        background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e\");\n      }\n\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input:checked~.custom-control-label::after, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input:checked~.custom-control-label::after {\n        background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\");\n      }\n\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input:checked~.custom-control-label::before, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-input:checked~.custom-control-label::before, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-input:checked~.custom-control-label::before, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-input:checked~.custom-control-label::before, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox input[type=checkbox]:checked~.label-description::before, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox input[type=checkbox]:checked~.label-description::before, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type=checkbox]:checked~.label-description::before  {\n          border-color: #8f550d!important;\n          background-color: #8f550d!important;\n          color: #ffffff!important;\n      }\n\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label::before, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label::before, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label::after, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label::after, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::before, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::after, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::before, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::after {\n           top: 2px;\n           box-sizing: border-box;\n      }\n\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::after, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after {\n           top: 0px!important;\n           box-sizing: border-box!important;\n      }\n\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after {\n        top: 0px!important;\n           box-sizing: border-box!important;\n      }\n\n       #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::after {\n            top: 0px!important;\n            box-sizing: border-box!important;\n            position: absolute;\n            left: -1.5rem;\n            display: block;\n            width: 1rem;\n            height: 1rem;\n            content: \"\";\n       }\n\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before {\n        top: 0px!important;\n        box-sizing: border-box!important;\n      }\n\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-control-label::before {\n          position: absolute;\n          top: 4px;\n          left: -1.5rem;\n          display: block;\n          width: 16px;\n          height: 16px;\n          pointer-events: none;\n          content: \"\";\n          background-color: #ffffff;\n          border: #adb5bd solid 1px;\n          border-radius: 50%;\n      }\n\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-control-label::after {\n          position: absolute;\n          top: 2px!important;\n          left: -1.5rem;\n          display: block;\n          width: 1rem;\n          height: 1rem;\n          content: \"\";\n      }\n\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before {\n          position: absolute;\n          top: 4px;\n          left: -1.5rem;\n          display: block;\n          width: 16px;\n          height: 16px;\n          pointer-events: none;\n          content: \"\";\n          background-color: #ffffff;\n          border: #adb5bd solid 1px;\n          border-radius: 50%;\n      }\n\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::after {\n          position: absolute;\n          top: 0px!important;\n          left: -1.5rem;\n          display: block;\n          width: 1rem;\n          height: 1rem;\n          content: \"\";\n      }\n\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after {\n          position: absolute;\n          top: 0px!important;\n          left: -1.5rem;\n          display: block;\n          width: 1rem;\n          height: 1rem;\n          content: \"\";\n      }\n\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-radio .custom-control-label::after {\n          background: no-repeat 50%/50% 50%;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-checkbox .custom-control-label::after, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::after, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::after, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after {\n          background: no-repeat 50%/50% 50%;\n      }\n\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-control, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-control {\n        position: relative;\n        display: block;\n        min-height: 1.5rem;\n        padding-left: 1.5rem;\n      }\n\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-input, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-input, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-input {\n          position: absolute;\n          z-index: -1;\n          opacity: 0;\n          box-sizing: border-box;\n          padding: 0;\n      }\n\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label {\n          color: #000000;\n          font-size: 12px!important;\n          font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n          line-height: 22px;\n          margin-bottom: 0;\n          position: relative;\n          vertical-align: top;\n          font-style: normal;\n          font-weight: 700;\n      }\n\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-select, #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-select {\n        background-color: #ffffff !important;\n        color: #333333 !important;\n        border-color: #cccccc;\n        border-radius: 4px !important;\n        border-style: solid !important;\n        border-width: 1px !important;\n        font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n        font-size: 14px !important;\n        line-height: 20px !important;\n        margin-bottom: 0;\n        margin-top: 0;\n        padding: 10px 28px 10px 12px !important;\n        width: 100% !important;\n        box-sizing: border-box !important;\n        max-width: 100% !important;\n        height: auto;\n        display: inline-block;\n        vertical-align: middle;\n        background: url('https://cdn.mailerlite.com/images/default/dropdown.svg') no-repeat right .75rem center/8px 10px;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n      }\n\n\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow {\n        height: auto;\n        width: 100%;\n        float: left;\n      }\n      .ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal { width: 70%; float: left; }\n      .ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-button-horizontal { width: 30%; float: left; }\n      .ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-button-horizontal.labelsOn { padding-top: 25px;  }\n      .ml-form-formContent.horozintalForm .ml-form-horizontalRow .horizontal-fields { box-sizing: border-box; float: left; padding-right: 10px;  }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input {\n        background-color: #ffffff;\n        color: #333333;\n        border-color: #cccccc;\n        border-radius: 4px;\n        border-style: solid;\n        border-width: 1px;\n        font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n        font-size: 14px;\n        line-height: 20px;\n        margin-bottom: 0;\n        margin-top: 0;\n        padding: 10px 10px;\n        width: 100%;\n        box-sizing: border-box;\n        overflow-y: initial;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow button {\n        background-color: #8f550d !important;\n        border-color: #8f550d;\n        border-style: solid;\n        border-width: 1px;\n        border-radius: 4px;\n        box-shadow: none;\n        color: #ffffff !important;\n        cursor: pointer;\n        font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n        font-size: 14px !important;\n        font-weight: 700;\n        line-height: 20px;\n        margin: 0 !important;\n        padding: 10px !important;\n        width: 100%;\n        height: auto;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow button:hover {\n        background-color: #333333 !important;\n        border-color: #333333 !important;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type=\"checkbox\"] {\n        box-sizing: border-box;\n        padding: 0;\n        position: absolute;\n        z-index: -1;\n        opacity: 0;\n        margin-top: 5px;\n        margin-left: -1.5rem;\n        overflow: visible;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description {\n        color: #000000;\n        display: block;\n        font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n        font-size: 12px;\n        text-align: left;\n        margin-bottom: 0;\n        position: relative;\n        vertical-align: top;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label {\n        font-weight: normal;\n        margin: 0;\n        padding: 0;\n        position: relative;\n        display: block;\n        min-height: 24px;\n        padding-left: 24px;\n\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label a {\n        color: #000000;\n        text-decoration: underline;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label p {\n        color: #000000 !important;\n        font-family: 'Open Sans', Arial, Helvetica, sans-serif !important;\n        font-size: 12px !important;\n        font-weight: normal !important;\n        line-height: 18px !important;\n        padding: 0 !important;\n        margin: 0 5px 0 0 !important;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label p:last-child {\n        margin: 0;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit {\n        margin: 0 0 20px 0;\n        float: left;\n        width: 100%;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button {\n        background-color: #8f550d !important;\n        border: none !important;\n        border-radius: 4px !important;\n        box-shadow: none !important;\n        color: #ffffff !important;\n        cursor: pointer;\n        font-family: 'Open Sans', Arial, Helvetica, sans-serif !important;\n        font-size: 14px !important;\n        font-weight: 700 !important;\n        line-height: 21px !important;\n        height: auto;\n        padding: 10px !important;\n        width: 100% !important;\n        box-sizing: border-box !important;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button.loading {\n        display: none;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button:hover {\n        background-color: #333333 !important;\n      }\n      .ml-subscribe-close {\n        width: 30px;\n        height: 30px;\n        background: url('https://cdn.mailerlite.com/images/default/modal_close.png') no-repeat;\n        background-size: 30px;\n        cursor: pointer;\n        margin-top: -10px;\n        margin-right: -10px;\n        position: absolute;\n        top: 0;\n        right: 0;\n      }\n      .ml-error input, .ml-error textarea, .ml-error select {\n        border-color: red!important;\n      }\n\n      .ml-error .custom-checkbox-radio-list {\n        border: 1px solid red !important;\n        border-radius: 4px;\n        padding: 10px;\n      }\n\n      .ml-error .label-description,\n      .ml-error .label-description p,\n      .ml-error .label-description p a,\n      .ml-error label:first-child {\n        color: #ff0000 !important;\n      }\n\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow.ml-error .label-description p,\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow.ml-error .label-description p:first-letter {\n        color: #ff0000 !important;\n      }\n            @media only screen and (max-width: 400px){\n\n        .ml-form-embedWrapper.embedDefault, .ml-form-embedWrapper.embedPopup { width: 100%!important; }\n        .ml-form-formContent.horozintalForm { float: left!important; }\n        .ml-form-formContent.horozintalForm .ml-form-horizontalRow { height: auto!important; width: 100%!important; float: left!important; }\n        .ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal { width: 100%!important; }\n        .ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal > div { padding-right: 0px!important; padding-bottom: 10px; }\n        .ml-form-formContent.horozintalForm .ml-button-horizontal { width: 100%!important; }\n        .ml-form-formContent.horozintalForm .ml-button-horizontal.labelsOn { padding-top: 0px!important; }\n\n      }\n    "
    }}
  />
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions { text-align: left; float: left; width: 100%; }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent {\n        margin: 0 0 15px 0;\n        text-align: left;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent.horizontal {\n        margin: 0 0 15px 0;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent h4 {\n        color: #000000;\n        font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n        font-size: 12px;\n        font-weight: 700;\n        line-height: 18px;\n        margin: 0 0 10px 0;\n        word-break: break-word;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent p {\n        color: #000000;\n        font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n        font-size: 12px;\n        line-height: 18px;\n        margin: 0 0 10px 0;\n      }\n\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent.privacy-policy p {\n        color: #000000;\n        font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n        font-size: 12px;\n        line-height: 22px;\n        margin: 0 0 10px 0;\n      }\n\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent.privacy-policy p a {\n        color: #000000;\n      }\n\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent.privacy-policy p:last-child {\n        margin: 0;\n      }\n\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent p a {\n        color: #000000;\n        text-decoration: underline;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent p:last-child { margin: 0 0 15px 0; }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptions {\n        margin: 0;\n        padding: 0;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox {\n        margin: 0 0 10px 0;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox:last-child {\n        margin: 0;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox label {\n        font-weight: normal;\n        margin: 0;\n        padding: 0;\n        position: relative;\n        display: block;\n        min-height: 24px;\n        padding-left: 24px;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description {\n        color: #000000;\n        font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n        font-size: 12px;\n        line-height: 18px;\n        text-align: left;\n        margin-bottom: 0;\n        position: relative;\n        vertical-align: top;\n        font-style: normal;\n        font-weight: 700;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .description {\n        color: #000000;\n        font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n        font-size: 12px;\n        font-style: italic;\n        font-weight: 400;\n        line-height: 18px;\n        margin: 5px 0 0 0;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox input[type=\"checkbox\"] {\n        box-sizing: border-box;\n        padding: 0;\n        position: absolute;\n        z-index: -1;\n        opacity: 0;\n        margin-top: 5px;\n        margin-left: -1.5rem;\n        overflow: visible;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedMailerLite-GDPR {\n        padding-bottom: 20px;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedMailerLite-GDPR p {\n        color: #000000;\n        font-family: 'Open Sans', Arial, Helvetica, sans-serif;\n        font-size: 10px;\n        line-height: 14px;\n        margin: 0;\n        padding: 0;\n      }\n      #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedMailerLite-GDPR p a {\n        color: #000000;\n        text-decoration: underline;\n\n      }\n      @media (max-width: 768px) {\n        #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent p {\n          font-size: 12px !important;\n          line-height: 18px !important;\n        }\n        #mlb2-1208653.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedMailerLite-GDPR p {\n          font-size: 10px !important;\n          line-height: 14px !important;\n        }\n      }\n    "
    }}
  />
  <div
    id="mlb2-1208653"
    className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-1208653"
  >
    <div className="ml-form-align-center ">
      <div className="ml-form-embedWrapper embedForm">
        <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
          <div className="ml-form-embedContent" style={{}}>
            <h4>Submit your details</h4>
            <p>
              Please enter the accurate details for&nbsp;most precise readings!
            </p>
          </div>
          <form
            className="ml-block-form"
            action="https://assets.mailerlite.com/jsonp/59094/forms/64155240661780202/subscribe"
            data-code=""
            method="post"
            target="_blank"
          >
            <div className="ml-form-formContent">
              <div className="ml-form-fieldRow ">
                <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                  <label>Email</label>
                  {/* input */}
                  <input
                    aria-label="email"
                    aria-required="true"
                    type="email"
                    className="form-control"
                    data-inputmask=""
                    name="fields[email]"
                    placeholder=""
                    autoComplete="email"
                    required
                  />
                  {/* /input */}
                  {/* textarea */}
                  {/* /textarea */}
                  {/* select */}
                  {/* /select */}
                  {/* checkboxes */}
                  {/* /checkboxes */}
                  {/* radio */}
                  {/* /radio */}
                  {/* countries */}
                  {/* /countries */}
                </div>
              </div>
              <div className="ml-form-fieldRow ">
                <div className="ml-field-group ml-field-phone ml-validate-required">
                  <label>Phone</label>
                  {/* input */}
                  <input
                    aria-label="phone"
                    aria-required="true"
                    type="number"
                    className="form-control"
                    data-inputmask=""
                    name="fields[phone]"
                    placeholder=""
                    autoComplete=""
                    required
                  />
                  {/* /input */}
                  {/* textarea */}
                  {/* /textarea */}
                  {/* select */}
                  {/* /select */}
                  {/* checkboxes */}
                  {/* /checkboxes */}
                  {/* radio */}
                  {/* /radio */}
                  {/* countries */}
                  {/* /countries */}
                </div>
              </div>
             
              <div className="ml-form-fieldRow ">
                <div className="ml-field-group ml-field-last_name ml-validate-required">
                  <label>Birth (date and time) - 24 hour format</label>
                  {/* input */}
                  <input
                    aria-label="last_name"
                    aria-required="true"
                    type="datetime-local"
                    className="form-control"
                    data-inputmask=""
                    name="fields[last_name]"
                    placeholder=""
                    autoComplete="" required
                  />
                  {/* /input */}
                  {/* textarea */}
                  {/* /textarea */}
                  {/* select */}
                  {/* /select */}
                  {/* checkboxes */}
                  {/* /checkboxes */}
                  {/* radio */}
                  {/* /radio */}
                  {/* countries */}
                  {/* /countries */}
                </div>
              </div>
              <div className="ml-form-fieldRow ">
                <div className="ml-field-group ml-field-country ml-validate-required">
                  <label>Country</label>
                  {/* input */}
                  {/* /input */}
                  {/* textarea */}
                  {/* /textarea */}
                  {/* select */}
                  {/* /select */}
                  {/* checkboxes */}
                  {/* /checkboxes */}
                  {/* radio */}
                  {/* /radio */}
                  {/* countries */}
                  <select
                    className="custom-select"
                    name="fields[country]"
                    aria-label="country"
                    aria-required="true"
                    required
                  >
                    <option value="">-</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="American Samoa">American Samoa</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antigua & Barbuda">
                      Antigua &amp; Barbuda
                    </option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Aruba">Aruba</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bermuda">Bermuda</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bonaire">Bonaire</option>
                    <option value="Bosnia & Herzegovina">
                      Bosnia &amp; Herzegovina
                    </option>
                    <option value="Botswana">Botswana</option>
                    <option value="Brazil">Brazil</option>
                    <option value="British Indian Ocean Ter">
                      British Indian Ocean Ter
                    </option>
                    <option value="Brunei">Brunei</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Canary Islands">Canary Islands</option>
                    <option value="Cape Verde">Cape Verde</option>
                    <option value="Cayman Islands">Cayman Islands</option>
                    <option value="Central African Republic">
                      Central African Republic
                    </option>
                    <option value="Chad">Chad</option>
                    <option value="Channel Islands">Channel Islands</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Christmas Island">Christmas Island</option>
                    <option value="Cocos Island">Cocos Island</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo">Congo</option>
                    <option value="Cook Islands">Cook Islands</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Ivory Coast">Ivory Coast</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Curacao">Curacao</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">
                      Dominican Republic
                    </option>
                    <option value="East Timor">East Timor</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Falkland Islands">Falkland Islands</option>
                    <option value="Faroe Islands">Faroe Islands</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="French Guiana">French Guiana</option>
                    <option value="French Polynesia">French Polynesia</option>
                    <option value="French Southern Ter">
                      French Southern Ter
                    </option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Gibraltar">Gibraltar</option>
                    <option value="Great Britain">Great Britain</option>
                    <option value="Greece">Greece</option>
                    <option value="Greenland">Greenland</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guadeloupe">Guadeloupe</option>
                    <option value="Guam">Guam</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Hawaii">Hawaii</option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="India">India</option>
                    <option value="Iran">Iran</option>
                    <option value="Iraq">Iraq</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Isle of Man">Isle of Man</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Korea North">Korea North</option>
                    <option value="Korea South">Korea South</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Laos">Laos</option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libya">Libya</option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Macau">Macau</option>
                    <option value="Macedonia">Macedonia</option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Marshall Islands">Marshall Islands</option>
                    <option value="Martinique">Martinique</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Mayotte">Mayotte</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Midway Islands">Midway Islands</option>
                    <option value="Moldova">Moldova</option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherland Antilles">
                      Netherland Antilles
                    </option>
                    <option value="Netherlands">
                      Netherlands (Holland, Europe)
                    </option>
                    <option value="Nevis">Nevis</option>
                    <option value="New Caledonia">New Caledonia</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Niue">Niue</option>
                    <option value="Norfolk Island">Norfolk Island</option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau Island">Palau Island</option>
                    <option value="Palestine">Palestine</option>
                    <option value="Panama">Panama</option>
                    <option value="Papua New Guinea">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Pitcairn Island">Pitcairn Island</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Puerto Rico">Puerto Rico</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Republic of Montenegro">
                      Republic of Montenegro
                    </option>
                    <option value="Republic of Serbia">
                      Republic of Serbia
                    </option>
                    <option value="Reunion">Reunion</option>
                    <option value="Romania">Romania</option>
                    <option value="Russia">Russia</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="St Barthelemy">St Barthelemy</option>
                    <option value="St Eustatius">St Eustatius</option>
                    <option value="St Helena">St Helena</option>
                    <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                    <option value="St Lucia">St Lucia</option>
                    <option value="St Maarten">St Maarten</option>
                    <option value="St Pierre & Miquelon">
                      St Pierre &amp; Miquelon
                    </option>
                    <option value="St Vincent & Grenadines">
                      St Vincent &amp; Grenadines
                    </option>
                    <option value="Saipan">Saipan</option>
                    <option value="Samoa">Samoa</option>
                    <option value="Samoa American">Samoa American</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Sao Tome & Principe">
                      Sao Tome &amp; Principe
                    </option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Slovakia">Slovakia</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Spain">Spain</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Swaziland">Swaziland</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syria">Syria</option>
                    <option value="Tahiti">Tahiti</option>
                    <option value="Taiwan">Taiwan</option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Togo">Togo</option>
                    <option value="Tokelau">Tokelau</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad & Tobago">
                      Trinidad &amp; Tobago
                    </option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Turks & Caicos Is">
                      Turks &amp; Caicos Is
                    </option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Uganda">Uganda</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">
                      United Arab Emirates
                    </option>
                    <option value="United States of America">
                      United States of America
                    </option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Vatican City State">
                      Vatican City State
                    </option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Virgin Islands (Brit)">
                      Virgin Islands (Brit)
                    </option>
                    <option value="Virgin Islands (USA)">
                      Virgin Islands (USA)
                    </option>
                    <option value="Wake Island">Wake Island</option>
                    <option value="Wallis and Futuna Islands">
                      Wallis and Futuna Islands
                    </option>
                    <option value="Yemen">Yemen</option>
                    <option value="Zaire">Zaire</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                  </select>
                  {/* /countries */}
                </div>
              </div>
              <div className="ml-form-fieldRow ">
                <div className="ml-field-group ml-field-state ml-validate-required">
                  <label>State</label>
                  {/* input */}
                  <input
                    aria-label="state"
                    aria-required="true"
                    type="text"
                    className="form-control"
                    data-inputmask=""
                    name="fields[state]"
                    placeholder=""
                    autoComplete=""
                  />
                  {/* /input */}
                  {/* textarea */}
                  {/* /textarea */}
                  {/* select */}
                  {/* /select */}
                  {/* checkboxes */}
                  {/* /checkboxes */}
                  {/* radio */}
                  {/* /radio */}
                  {/* countries */}
                  {/* /countries */}
                </div>
              </div>
              <div className="ml-form-fieldRow ml-last-item">
                <div className="ml-field-group ml-field-city ml-validate-required">
                  <label>City</label>
                  {/* input */}
                  <input
                    aria-label="city"
                    aria-required="true"
                    type="text"
                    className="form-control"
                    data-inputmask=""
                    name="fields[city]"
                    placeholder=""
                    autoComplete="" required
                  />
                  {/* /input */}
                  {/* textarea */}
                  {/* /textarea */}
                  {/* select */}
                  {/* /select */}
                  {/* checkboxes */}
                  {/* /checkboxes */}
                  {/* radio */}
                  {/* /radio */}
                  {/* countries */}
                  {/* /countries */}
                </div>
              </div>
            </div>
            {/* Privacy policy */}
            <div className="ml-form-embedPermissions" style={{}}>
              <div className="ml-form-embedPermissionsContent default privacy-policy">
                <p>
                  You can unsubscribe anytime. For more details, review our
                  Privacy Policy.
                </p>
              </div>
            </div>
            {/* /Privacy policy */}
            <div className="ml-form-checkboxRow ml-validate-required">
              <label className="checkbox">
                <input type="checkbox" />
                <div className="label-description">
                  <p>Opt in to receive news and updates.</p>
                </div>
              </label>
            </div>
            <div
              className="ml-form-recaptcha ml-validate-required"
              style={{ float: "left" }}
            >
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n  .ml-form-recaptcha {\n    margin-bottom: 20px;\n  }\n\n  .ml-form-recaptcha.ml-error iframe {\n    border: solid 1px #ff0000;\n  }\n\n  @media screen and (max-width: 480px) {\n    .ml-form-recaptcha {\n      width: 220px!important\n    }\n    .g-recaptcha {\n      transform: scale(0.78);\n      -webkit-transform: scale(0.78);\n      transform-origin: 0 0;\n      -webkit-transform-origin: 0 0;\n    }\n  }\n"
                }}
              />
              <div
                className="g-recaptcha"
                data-sitekey="6Lf1KHQUAAAAAFNKEX1hdSWCS3mRMv4FlFaNslaD"
              />
            </div>
            <input type="hidden" name="ml-submit" defaultValue={1} />
            <div className="ml-form-embedSubmit">
              <button type="submit" className="primary">
                Submit
              </button>
              <button
                disabled="disabled"
                style={{ display: "none" }}
                type="button"
                className="loading"
              >
                <div className="ml-form-embedSubmitLoad" />
                <span className="sr-only">Loading...</span>
              </button>
            </div>
            <input type="hidden" name="anticsrf" defaultValue="true" />
          </form>
        </div>
        <div
          className="ml-form-successBody row-success"
          style={{ display: "none" }}
        >
          <div className="ml-form-successContent">
            <h4>Thank you!</h4>
            <p>
              You have successfully submitted your details. Please proceed with
              the next steps.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  </>
  
  )
}

export default MailerLiteForm
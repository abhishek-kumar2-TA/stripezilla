"use strict";(self.webpackChunkstorybook_web_component=self.webpackChunkstorybook_web_component||[]).push([[923],{"./src/notification/alert.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeAndAccessibility:()=>CodeAndAccessibility,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/lit/index.js"),_stripezilla_web_components_button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/ui/dist/button/index.js"),_stripezilla_web_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/ui/dist/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Notification/ta-alert",component:"ta-alert",parameters:{controls:{expanded:!0}},argTypes:{id:{description:"Mandatory - unique id for testing",table:{defaultValue:{summary:""}},control:"text"},visible:{description:"Determines if the notification is visible",table:{defaultValue:{summary:"false"}},control:!1},title:{description:"The title of the notification",table:{defaultValue:{summary:""}},control:"text"},variant:{options:[_stripezilla_web_components__WEBPACK_IMPORTED_MODULE_2__.t7.Error,_stripezilla_web_components__WEBPACK_IMPORTED_MODULE_2__.t7.Info,_stripezilla_web_components__WEBPACK_IMPORTED_MODULE_2__.t7.Success,_stripezilla_web_components__WEBPACK_IMPORTED_MODULE_2__.t7.Warning],description:"The style variant of the notification",table:{defaultValue:{summary:_stripezilla_web_components__WEBPACK_IMPORTED_MODULE_2__.t7.Error}},control:{type:"select"}},onClose:{description:"Triggered when the close button is clicked",table:{category:"Custom Events"},control:!1}}},CodeAndAccessibility=(args=>{let isVisible=args.visible||!1;return lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <ta-grid-container .showSideMargin="${!1}">
      <ta-grid-column
        ><ta-button
          id="toggle-button"
          .variant="${_stripezilla_web_components_button__WEBPACK_IMPORTED_MODULE_1__.Ak.Primary}"
          .size="${_stripezilla_web_components_button__WEBPACK_IMPORTED_MODULE_1__.Mp.Default}"
          @click="${()=>{isVisible=!isVisible;document.getElementById(args.id).visible=isVisible}}">
          Toggle Notification
        </ta-button>

        <ta-alert
          id="${args.id}"
          .visible="${isVisible}"
          .title="${args.title}"
          .variant="${args.variant}"
          @onClose="${()=>{isVisible=!1;document.getElementById(args.id).visible=isVisible}}">
          <p>This is a notification message.</p>
        </ta-alert></ta-grid-column
      >
      <ta-grid-column>
        <div class="story-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
      </ta-grid-column>
      <ta-grid-column>
        <div class="story-description">${"\nThe ta-notification component is used to display alerts or messages to the user. It supports different variants (info, error, success and warning) and visibility control. The component includes a close button to dismiss the notification.\n"}</div>
      </ta-grid-column>
    </ta-grid-container>
  `}).bind({});CodeAndAccessibility.args={id:"test-notification",visible:!1,title:"This is a notification",variant:"error"};const __namedExportsOrder=["CodeAndAccessibility"];CodeAndAccessibility.parameters={...CodeAndAccessibility.parameters,docs:{...CodeAndAccessibility.parameters?.docs,source:{originalSource:'args => {\n  let isVisible = args.visible || false;\n  const toggleNotification = () => {\n    isVisible = !isVisible;\n    const alertNotification = document.getElementById(args.id) as AlertComponentWC;\n    alertNotification.visible = isVisible;\n  };\n  const onCloseHandler = () => {\n    isVisible = false;\n    const alertNotification = document.getElementById(args.id) as AlertComponentWC;\n    alertNotification.visible = isVisible;\n  };\n  return html`\n    <ta-grid-container .showSideMargin="${false}">\n      <ta-grid-column\n        ><ta-button\n          id="toggle-button"\n          .variant="${ButtonVariant.Primary}"\n          .size="${ButtonSize.Default}"\n          @click="${toggleNotification}">\n          Toggle Notification\n        </ta-button>\n\n        <ta-alert\n          id="${args.id}"\n          .visible="${isVisible}"\n          .title="${args.title}"\n          .variant="${args.variant}"\n          @onClose="${onCloseHandler}">\n          <p>This is a notification message.</p>\n        </ta-alert></ta-grid-column\n      >\n      <ta-grid-column>\n        <div class="story-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>\n      </ta-grid-column>\n      <ta-grid-column>\n        <div class="story-description">${description}</div>\n      </ta-grid-column>\n    </ta-grid-container>\n  `;\n}',...CodeAndAccessibility.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=notification-alert-stories.a1dbc676.iframe.bundle.js.map
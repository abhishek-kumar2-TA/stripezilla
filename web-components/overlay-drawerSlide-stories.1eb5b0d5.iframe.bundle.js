"use strict";(self.webpackChunkstorybook_web_component=self.webpackChunkstorybook_web_component||[]).push([[476],{"./src/overlay/drawerSlide.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeAndAccessibility:()=>CodeAndAccessibility,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _stripezilla_web_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/ui/dist/index.js"),lit__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/lit/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Overlay/Drawer/ta-drawer-slide",component:"ta-drawer-slide",parameters:{controls:{expanded:!0}},argTypes:{id:{description:"Mandatory - unique id for testing",table:{defaultValue:{summary:""}},control:"text"},title:{description:"Mandatory - title to be displayed on the drawer",table:{defaultValue:{summary:""}},control:"text"},validate:{description:"functional property of type `() => boolean | Promise<boolean>`. When available this will be executed and only if return is true, next slide or submit action will happen.",control:!1}}},CodeAndAccessibility=(args=>{const drawerCloseHandler=()=>{document.querySelector("ta-drawer").removeAttribute("visible");const drawerActivateButton=document.getElementById("activate-drawer");drawerActivateButton&&drawerActivateButton.focus()};return lit__WEBPACK_IMPORTED_MODULE_1__.qy`
    <ta-grid-container .showSideMargin="${!1}">
      <ta-grid-column style="gap: 10px">
        <ta-button
          id="activate-drawer"
          @click="${()=>{document.querySelector("ta-drawer").setAttribute("visible","true")}}"
          variant="${_stripezilla_web_components__WEBPACK_IMPORTED_MODULE_0__.Ak.Secondary}"
          >Show drawer</ta-button
        >
        <ta-drawer
          id="ta-drawer-id"
          @onClose="${drawerCloseHandler}"
          @onSubmit="${drawerCloseHandler}">
          <ta-drawer-slide id="${args.id}" title="${args.title}">Slide content </ta-drawer-slide>
        </ta-drawer>
      </ta-grid-column>
      <ta-grid-column>
        <div class="story-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
      </ta-grid-column>
      <ta-grid-column>
        <div class="story-description">${"One or more ta-drawer-slide must be the immediate children of drawer to display the slides accurately."}</div>
      </ta-grid-column>
    </ta-grid-container>
  `}).bind({});CodeAndAccessibility.args={id:"test-drawer-slide",title:"Slide title"};const __namedExportsOrder=["CodeAndAccessibility"];CodeAndAccessibility.parameters={...CodeAndAccessibility.parameters,docs:{...CodeAndAccessibility.parameters?.docs,source:{originalSource:'args => {\n  const drawerOpenHandler = () => {\n    const drawer = document.querySelector(\'ta-drawer\') as HTMLElement;\n    drawer.setAttribute(\'visible\', \'true\');\n  };\n  const drawerCloseHandler = () => {\n    const drawer = document.querySelector(\'ta-drawer\') as HTMLElement;\n    drawer.removeAttribute(\'visible\');\n    const drawerActivateButton = document.getElementById(\'activate-drawer\');\n    if (drawerActivateButton) {\n      drawerActivateButton.focus();\n    }\n  };\n  return html`\n    <ta-grid-container .showSideMargin="${false}">\n      <ta-grid-column style="gap: 10px">\n        <ta-button\n          id="activate-drawer"\n          @click="${drawerOpenHandler}"\n          variant="${ButtonVariant.Secondary}"\n          >Show drawer</ta-button\n        >\n        <ta-drawer\n          id="ta-drawer-id"\n          @onClose="${drawerCloseHandler}"\n          @onSubmit="${drawerCloseHandler}">\n          <ta-drawer-slide id="${args.id}" title="${args.title}">Slide content </ta-drawer-slide>\n        </ta-drawer>\n      </ta-grid-column>\n      <ta-grid-column>\n        <div class="story-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>\n      </ta-grid-column>\n      <ta-grid-column>\n        <div class="story-description">${description}</div>\n      </ta-grid-column>\n    </ta-grid-container>\n  `;\n}',...CodeAndAccessibility.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=overlay-drawerSlide-stories.1eb5b0d5.iframe.bundle.js.map
"use strict";(self.webpackChunkstorybook_web_component=self.webpackChunkstorybook_web_component||[]).push([[413],{"./src/overlay/drawer.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeAndAccessibility:()=>CodeAndAccessibility,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _stripezilla_web_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/ui/dist/index.js"),lit__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/lit/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Overlay/Drawer/ta-drawer",component:"ta-drawer",parameters:{controls:{expanded:!0}},argTypes:{id:{description:"Mandatory - unique id for testing",table:{defaultValue:{summary:""}},control:"text"},visible:{description:"Controls the visibility of the drawer",table:{defaultValue:{summary:"false"}},control:!1},onClose:{description:"Task to perform on close of the drawer.",table:{category:"Custom Events"},control:!1},onSubmit:{description:"Task to perform on submit of the drawer. If the current slide has validate property then its outcome (true/false) will decide if onSubmit will be executed or not.",table:{category:"Custom Events"},control:!1},goToStep:{description:"Multi-step only method - This method is available to programmaticaly navigate to a particular slide",table:{category:"Methods"},control:!1}}},CodeAndAccessibility=(args=>{const drawerOpenHandler=drawerId=>{document.getElementById(drawerId).setAttribute("visible","true")},drawerCloseHandler=(drawerId,drawerOpenerId)=>{document.getElementById(drawerId).removeAttribute("visible");const drawerActivateButton=document.getElementById(drawerOpenerId);drawerActivateButton&&drawerActivateButton.focus()},slide1Validator=singleOrMultiDrawer=>{const idSuffix="single"===singleOrMultiDrawer?"":"-2",taskName=document.getElementById(`create-task-name${idSuffix}`),taskDescription=document.getElementById(`create-task-description${idSuffix}`);if(taskName.value&&taskDescription.value)return!0;{const errorElement=document.getElementById(`user-error-message${idSuffix}`);return errorElement&&(errorElement.innerHTML="Both Name and Description is required."),!1}};return lit__WEBPACK_IMPORTED_MODULE_1__.qy`
    <ta-grid-container .showSideMargin="${!1}">
      <ta-grid-column style="gap: 10px">
        <ta-button
          id="activate-drawer-single"
          @click="${()=>drawerOpenHandler(`${args.id}-single`)}"
          variant="${_stripezilla_web_components__WEBPACK_IMPORTED_MODULE_0__.Ak.Secondary}"
          >Show single step drawer</ta-button
        >
        <ta-button
          id="activate-drawer-multi"
          @click="${()=>drawerOpenHandler(`${args.id}-multi`)}"
          variant="${_stripezilla_web_components__WEBPACK_IMPORTED_MODULE_0__.Ak.Secondary}"
          >Show multi step drawer</ta-button
        >
        <ta-drawer
          id="${args.id}-single"
          .visible="${args.visible}"
          @onClose="${()=>drawerCloseHandler(`${args.id}-single`,"activate-drawer-single")}"
          @onSubmit="${()=>drawerCloseHandler(`${args.id}-single`,"activate-drawer-single")}">
          <ta-drawer-slide
            id="slide-1"
            title="Slide-1"
            .validate="${()=>slide1Validator("single")}">
            <ta-input id="create-task-name" label="Name *" required></ta-input>
            <ta-text-area
              id="create-task-description"
              label="Description *"
              required></ta-text-area>
            <p id="user-error-message" style="font-size: 0.8rem; color: red; "></p
          ></ta-drawer-slide>
        </ta-drawer>
        <ta-drawer
          id="${args.id}-multi"
          .visible="${args.visible}"
          @onClose="${()=>drawerCloseHandler(`${args.id}-multi`,"activate-drawer-multi")}"
          @onSubmit="${()=>drawerCloseHandler(`${args.id}-multi`,"activate-drawer-multi")}">
          <ta-drawer-slide id="slide-1" title="Slide-1" .validate="${slide1Validator}"
            ><ta-input id="create-task-name-2" label="Name *" required></ta-input>
            <ta-text-area
              id="create-task-description-2"
              label="Description *"
              required></ta-text-area>
            <p id="user-error-message-2" style="font-size: 0.8rem; color: red; "></p
          ></ta-drawer-slide>
          <ta-drawer-slide id="slide-2" title="Slide-2"
            ><div>
              <div>Step 2 Content</div>
              <ta-button id="demo-goToStep-method" @click="${()=>{document.getElementById(`${args.id}-multi`).goToStep(0)}}"
                >programmatically navigate to slide 1</ta-button
              >
            </div></ta-drawer-slide
          >
          <ta-drawer-slide id="slide-3" title="Slide-3">Step 3 Content</ta-drawer-slide>
        </ta-drawer>
      </ta-grid-column>
      <ta-grid-column>
        <div class="story-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
      </ta-grid-column>
      <ta-grid-column>
        <div class="story-description">${"The ta-drawer component is used to display sliding drawers, typically from the right side of the screen. It is ideal for scenarios where you need to present additional content or actions without interrupting the main flow. It can support both single-step and multi-step content.\n\nUse it when you need to slide in additional content or actions, such as forms, information panels, or progress steps. The drawer can be controlled to navigate between steps (in the case of multi-step drawers)."}</div>
      </ta-grid-column>
    </ta-grid-container>
  `}).bind({});CodeAndAccessibility.args={id:"test-drawer",visible:!1};const __namedExportsOrder=["CodeAndAccessibility"];CodeAndAccessibility.parameters={...CodeAndAccessibility.parameters,docs:{...CodeAndAccessibility.parameters?.docs,source:{originalSource:'args => {\n  const drawerOpenHandler = (drawerId: string) => {\n    const drawer = document.getElementById(drawerId) as HTMLElement;\n    drawer.setAttribute(\'visible\', \'true\');\n  };\n  const drawerCloseHandler = (drawerId: string, drawerOpenerId: string) => {\n    const drawer = document.getElementById(drawerId) as HTMLElement;\n    drawer.removeAttribute(\'visible\');\n    const drawerActivateButton = document.getElementById(drawerOpenerId);\n    if (drawerActivateButton) {\n      drawerActivateButton.focus();\n    }\n  };\n  const programmaticallyNavigateTo1Handler = () => {\n    const drawer = document.getElementById(`${args.id}-multi`) as DrawerComponentWC;\n    drawer.goToStep(0);\n  };\n  const slide1Validator = (singleOrMultiDrawer?: string): boolean => {\n    const idSuffix = singleOrMultiDrawer === \'single\' ? \'\' : \'-2\';\n    const taskName = document.getElementById(`create-task-name${idSuffix}`) as HTMLInputElement;\n    const taskDescription = document.getElementById(`create-task-description${idSuffix}`) as HTMLInputElement;\n    if (!taskName.value || !taskDescription.value) {\n      const errorElement = document.getElementById(`user-error-message${idSuffix}`);\n      if (errorElement) {\n        errorElement.innerHTML = \'Both Name and Description is required.\';\n      }\n      return false;\n    } else {\n      return true;\n    }\n  };\n  return html`\n    <ta-grid-container .showSideMargin="${false}">\n      <ta-grid-column style="gap: 10px">\n        <ta-button\n          id="activate-drawer-single"\n          @click="${() => drawerOpenHandler(`${args.id}-single`)}"\n          variant="${ButtonVariant.Secondary}"\n          >Show single step drawer</ta-button\n        >\n        <ta-button\n          id="activate-drawer-multi"\n          @click="${() => drawerOpenHandler(`${args.id}-multi`)}"\n          variant="${ButtonVariant.Secondary}"\n          >Show multi step drawer</ta-button\n        >\n        <ta-drawer\n          id="${args.id}-single"\n          .visible="${args.visible}"\n          @onClose="${() => drawerCloseHandler(`${args.id}-single`, \'activate-drawer-single\')}"\n          @onSubmit="${() => drawerCloseHandler(`${args.id}-single`, \'activate-drawer-single\')}">\n          <ta-drawer-slide\n            id="slide-1"\n            title="Slide-1"\n            .validate="${() => slide1Validator(\'single\')}">\n            <ta-input id="create-task-name" label="Name *" required></ta-input>\n            <ta-text-area\n              id="create-task-description"\n              label="Description *"\n              required></ta-text-area>\n            <p id="user-error-message" style="font-size: 0.8rem; color: red; "></p\n          ></ta-drawer-slide>\n        </ta-drawer>\n        <ta-drawer\n          id="${args.id}-multi"\n          .visible="${args.visible}"\n          @onClose="${() => drawerCloseHandler(`${args.id}-multi`, \'activate-drawer-multi\')}"\n          @onSubmit="${() => drawerCloseHandler(`${args.id}-multi`, \'activate-drawer-multi\')}">\n          <ta-drawer-slide id="slide-1" title="Slide-1" .validate="${slide1Validator}"\n            ><ta-input id="create-task-name-2" label="Name *" required></ta-input>\n            <ta-text-area\n              id="create-task-description-2"\n              label="Description *"\n              required></ta-text-area>\n            <p id="user-error-message-2" style="font-size: 0.8rem; color: red; "></p\n          ></ta-drawer-slide>\n          <ta-drawer-slide id="slide-2" title="Slide-2"\n            ><div>\n              <div>Step 2 Content</div>\n              <ta-button id="demo-goToStep-method" @click="${programmaticallyNavigateTo1Handler}"\n                >programmatically navigate to slide 1</ta-button\n              >\n            </div></ta-drawer-slide\n          >\n          <ta-drawer-slide id="slide-3" title="Slide-3">Step 3 Content</ta-drawer-slide>\n        </ta-drawer>\n      </ta-grid-column>\n      <ta-grid-column>\n        <div class="story-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>\n      </ta-grid-column>\n      <ta-grid-column>\n        <div class="story-description">${description}</div>\n      </ta-grid-column>\n    </ta-grid-container>\n  `;\n}',...CodeAndAccessibility.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=overlay-drawer-stories.ac8f82ef.iframe.bundle.js.map
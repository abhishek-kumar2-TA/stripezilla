"use strict";(self.webpackChunkstorybook_react19=self.webpackChunkstorybook_react19||[]).push([[319],{"./src/zz-example/Simpleform.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Base:()=>Base,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_stripezilla_react_button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/react/dist/button/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Example/SimpleForm",component:_stripezilla_react_button__WEBPACK_IMPORTED_MODULE_1__.$n,tags:["autodocs","!dev"]},Base=(()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("form",{onSubmit:event=>{event.preventDefault(),alert("form Button clicked!")}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stripezilla_react_button__WEBPACK_IMPORTED_MODULE_1__.$n,{id:"submit",type:"submit"},"Submit"))).bind({});Base.args={};const __namedExportsOrder=["Base"];Base.parameters={...Base.parameters,docs:{...Base.parameters?.docs,source:{originalSource:'() => {\n  const onFormSubmit = (event: FormEvent) => {\n    event.preventDefault();\n    alert(\'form Button clicked!\');\n  };\n  return <form onSubmit={onFormSubmit}>\n      <Button id="submit" type="submit">\n        Submit\n      </Button>\n    </form>;\n}',...Base.parameters?.docs?.source}}}},"../../packages/react/dist/button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$n:()=>Button,rl:()=>ButtonFillStyle,Mp:()=>ButtonSize,Ak:()=>ButtonVariant});var ButtonVariant,ButtonSize,ButtonFillStyle,styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("../../packages/react/dist/theme/utils/index.js");!function(ButtonVariant){ButtonVariant.Primary="primary",ButtonVariant.Secondary="secondary",ButtonVariant.Destruct="destruct"}(ButtonVariant||(ButtonVariant={})),function(ButtonSize){ButtonSize.Small="small",ButtonSize.Default="default"}(ButtonSize||(ButtonSize={})),function(ButtonFillStyle){ButtonFillStyle.Filled="filled",ButtonFillStyle.Outline="outline",ButtonFillStyle.None="none"}(ButtonFillStyle||(ButtonFillStyle={}));const Button=styled_components_browser_esm.Ay.button`
  display: inline-flex;
  width: ${({iconOnly=!1,size=ButtonSize.Default})=>iconOnly?size===ButtonSize.Default?"44px":"30px":"100%"};
  align-items: center;
  justify-content: center;
  height: ${({size=ButtonSize.Default})=>size===ButtonSize.Small?"30px":"44px"};
  font-size: 20px;
  font-family: ${({theme})=>theme.global.specificFontFamily};
  padding: ${({iconOnly=!1})=>iconOnly?0:" 0 1.5rem"};
  border: none;
  border-radius: ${({theme})=>theme.global.componentRadius};
  transition: all 0.5s;
  cursor: pointer;
  flex-shrink: 0;

  background-color: ${({theme,variant=ButtonVariant.Primary})=>variant===ButtonVariant.Primary?theme.colors.primary.base:variant===ButtonVariant.Secondary?(0,utils.WI)("secondary"):theme.colors.error.base};

  color: ${({theme,variant=ButtonVariant.Primary})=>variant===ButtonVariant.Primary?theme.colors.textSecondary.base:variant===ButtonVariant.Secondary?theme.colors.textPrimary.base:theme.colors.textSecondary.base};

  svg {
    fill: ${({theme,variant=ButtonVariant.Primary})=>variant===ButtonVariant.Primary?theme.colors.textSecondary.base:variant===ButtonVariant.Secondary?theme.colors.textPrimary.base:theme.colors.textSecondary.base};
    transition: all 0.5s;
  }

  ${({theme,iconOnly=!1,size=ButtonSize.Default})=>styled_components_browser_esm.AH`
    @media screen and (min-width: ${`${theme.breakpoints.medium}`}) {
      width: ${iconOnly?size===ButtonSize.Default?"44px":"30px":"max-content"};
      min-width: ${iconOnly?size===ButtonSize.Default?"44px":"30px":"120px"};
    }
  `}

  &:hover:not([disabled]) {
    background-color: ${({theme,variant=ButtonVariant.Primary})=>variant===ButtonVariant.Primary?theme.colors.primary.hover:variant===ButtonVariant.Secondary?theme.colors.secondary.hover:theme.colors.error.hover};
  }

  &:focus:not([disabled]),
  &:active:not([disabled]) {
    background-color: ${({theme,variant=ButtonVariant.Primary})=>variant===ButtonVariant.Primary?theme.colors.primary.active:variant===ButtonVariant.Secondary?theme.colors.secondary.active:theme.colors.error.active};
  }

  ${({theme,fill=ButtonFillStyle.Filled,variant=ButtonVariant.Primary})=>fill===ButtonFillStyle.None?styled_components_browser_esm.AH`
        background-color: transparent;
        color: ${variant===ButtonVariant.Primary?theme.colors.primary.base:variant===ButtonVariant.Secondary?theme.colors.secondary.base:theme.colors.error.base};

        svg {
          fill: ${variant===ButtonVariant.Primary?theme.colors.primary.base:variant===ButtonVariant.Secondary?theme.colors.secondary.base:theme.colors.error.base};
        }

        &:hover:not([disabled]) {
          background-color: transparent;
          color: ${variant===ButtonVariant.Primary?theme.colors.primary.hover:variant===ButtonVariant.Secondary?theme.colors.secondary.hover:theme.colors.error.hover};
          svg {
            fill: ${variant===ButtonVariant.Primary?theme.colors.primary.hover:variant===ButtonVariant.Secondary?theme.colors.secondary.hover:theme.colors.error.hover};
          }
        }

        &:active:not([disabled]),
        &:focus:not([disabled]) {
          background-color: transparent;
          color: ${variant===ButtonVariant.Primary?theme.colors.primary.active:variant===ButtonVariant.Secondary?theme.colors.secondary.active:theme.colors.error.active};
          svg {
            fill: ${variant===ButtonVariant.Primary?theme.colors.primary.active:variant===ButtonVariant.Secondary?theme.colors.secondary.active:theme.colors.error.active};
          }
        }
      `:fill===ButtonFillStyle.Outline?styled_components_browser_esm.AH`
        background-color: transparent;
        color: ${variant===ButtonVariant.Primary?theme.colors.primary.base:variant===ButtonVariant.Secondary?theme.colors.secondary.base:theme.colors.error.base};
        border: 2px solid
          ${variant===ButtonVariant.Primary?theme.colors.primary.base:variant===ButtonVariant.Secondary?theme.colors.secondary.base:theme.colors.error.base};

        svg {
          fill: ${variant===ButtonVariant.Primary?theme.colors.primary.base:variant===ButtonVariant.Secondary?theme.colors.secondary.base:theme.colors.error.base};
        }

        &:hover:not([disabled]) {
          background-color: transparent;
          color: ${variant===ButtonVariant.Primary?theme.colors.primary.hover:variant===ButtonVariant.Secondary?theme.colors.secondary.hover:theme.colors.error.hover};
          border: 2px solid
            ${variant===ButtonVariant.Primary?theme.colors.primary.hover:variant===ButtonVariant.Secondary?theme.colors.secondary.hover:theme.colors.error.hover};

          svg {
            fill: ${variant===ButtonVariant.Primary?theme.colors.primary.hover:variant===ButtonVariant.Secondary?theme.colors.secondary.hover:theme.colors.error.hover};
          }
        }

        &:focus:not([disabled]),
        &:active:not([disabled]) {
          background-color: transparent;
          color: ${variant===ButtonVariant.Primary?theme.colors.primary.active:variant===ButtonVariant.Secondary?theme.colors.secondary.active:theme.colors.error.active};
          border: 2px solid
            ${variant===ButtonVariant.Primary?theme.colors.primary.active:variant===ButtonVariant.Secondary?theme.colors.secondary.active:theme.colors.error.active};
          svg {
            fill: ${variant===ButtonVariant.Primary?theme.colors.primary.active:variant===ButtonVariant.Secondary?theme.colors.secondary.active:theme.colors.error.active};
          }
        }
      `:void 0}

  &[disabled] {
    opacity: 0.7;
    cursor: inherit;
  }
`}}]);
//# sourceMappingURL=zz-example-Simpleform-stories.10365997.iframe.bundle.js.map
"use strict";(self.webpackChunkstorybook_react19=self.webpackChunkstorybook_react19||[]).push([[250],{"./src/notification/Snackbar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeAndAccessibility:()=>CodeAndAccessibility,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_stripezilla_react_notification__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/react/dist/notification/index.js"),_stripezilla_react_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/react/dist/button/index.js"),_stripezilla_react_grid__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/react/dist/grid/index.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Notification/Snackbar",component:_stripezilla_react_notification__WEBPACK_IMPORTED_MODULE_1__.qb,parameters:{controls:{expanded:!0}},argTypes:{id:{description:"Mandatory - unique id for testing",table:{defaultValue:{summary:""}},control:"text"},message:{description:"The message to be displayed in the snackbar",table:{defaultValue:{summary:""}},control:"text"},visible:{description:"Controls whether the snackbar is visible or not",table:{defaultValue:{summary:"false"}},control:!1},variant:{options:[_stripezilla_react_notification__WEBPACK_IMPORTED_MODULE_1__.t7.Error,_stripezilla_react_notification__WEBPACK_IMPORTED_MODULE_1__.t7.Info,_stripezilla_react_notification__WEBPACK_IMPORTED_MODULE_1__.t7.Success,_stripezilla_react_notification__WEBPACK_IMPORTED_MODULE_1__.t7.Warning],description:"The style variant of the notification",table:{defaultValue:{summary:_stripezilla_react_notification__WEBPACK_IMPORTED_MODULE_1__.t7.Success}},control:{type:"select"}},duration:{description:"Duration for auto-hide (0 means no auto-hide)",table:{defaultValue:{summary:"5000"}},control:"number"},idToFocusOnClose:{description:"Accessibility - id of element to focus on close of snackbar",table:{defaultValue:{summary:""}},control:!1},onClose:{description:"Triggered when the snackbar is closed (after the hide animation)",table:{category:"Custom Events"},control:!1}}},CodeAndAccessibility=(args=>{const[isVisible,setIsVisible]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stripezilla_react_grid__WEBPACK_IMPORTED_MODULE_3__.E,{showSideMargin:!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_4__.Tx,{importStatement:"import { Snackbar } from '@stripezilla/react/notification';"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stripezilla_react_grid__WEBPACK_IMPORTED_MODULE_3__.H,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stripezilla_react_button__WEBPACK_IMPORTED_MODULE_2__.$n,{id:"show-snackbar",onClick:()=>{setIsVisible(!0)}},"Show/Hide Snackbar"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_stripezilla_react_notification__WEBPACK_IMPORTED_MODULE_1__.qb,{id:args.id,visible:isVisible,message:args.message,variant:args.variant,duration:args.duration,onClose:()=>{setIsVisible(!1)}})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_4__.ur,{description:"The Snackbar component is designed to show non-intrusive feedback messages to the user. The component will automatically disappear after the specified duration, but it can also be manually dismissed."}))}).bind({});CodeAndAccessibility.args={id:"test-snackbar",message:"Success! Your operation was completed.",duration:5e3,variant:_stripezilla_react_notification__WEBPACK_IMPORTED_MODULE_1__.t7.Success};const __namedExportsOrder=["CodeAndAccessibility"];CodeAndAccessibility.parameters={...CodeAndAccessibility.parameters,docs:{...CodeAndAccessibility.parameters?.docs,source:{originalSource:"args => {\n  const [isVisible, setIsVisible] = useState(false);\n  const toggleSnackbar = () => {\n    setIsVisible(true);\n  };\n  const closeSnackbarHandler = () => {\n    setIsVisible(false);\n  };\n  return <GridContainer showSideMargin={false}>\n      <ImportBlock importStatement={`import { Snackbar } from '@stripezilla/react/notification';`} />\n      <GridColumn>\n        <Button id=\"show-snackbar\" onClick={toggleSnackbar}>\n          Show/Hide Snackbar\n        </Button>\n        <Snackbar id={args.id} visible={isVisible} message={args.message} variant={args.variant} duration={args.duration} onClose={closeSnackbarHandler} />\n      </GridColumn>\n      <DescriptionBlock description={description} />\n    </GridContainer>;\n}",...CodeAndAccessibility.parameters?.docs?.source}}}},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bO:()=>CommentBlock,ur:()=>DescriptionBlock,Tx:()=>ImportBlock});var grid=__webpack_require__("../../packages/react/dist/grid/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const ImportBlockDiv=styled_components_browser_esm.Ay.div`
  padding-bottom: 10px;
  border-bottom: 1px solid var(--colors-primary-base);
  margin-bottom: 10px;
  width: 100%;
`,ImportBlock=({importStatement})=>react.createElement(grid.H,null,react.createElement(ImportBlockDiv,null,importStatement));ImportBlock.__docgenInfo={description:"",methods:[],displayName:"ImportBlock",props:{importStatement:{required:!0,tsType:{name:"ReactNode"},description:""}}};const DescriptionBeforeSpacer=(0,styled_components_browser_esm.Ay)(grid.H)`
  border-bottom: 1px solid var(--colors-primary-base);
  font-weight: bold;
`,DescriptionContent=(0,styled_components_browser_esm.Ay)(grid.H)`
  font-size: 14px;
`,DescriptionBlock=({description})=>react.createElement(grid.E,{showSideMargin:!1},react.createElement(grid.H,null,react.createElement(DescriptionBeforeSpacer,null,"       ")),react.createElement(DescriptionContent,null,description));DescriptionBlock.__docgenInfo={description:"",methods:[],displayName:"DescriptionBlock",props:{description:{required:!0,tsType:{name:"ReactNode"},description:""}}};const CommentContainer=styled_components_browser_esm.Ay.div`
  width: 100%;
  font-size: 12px;
  color: var(--colors-success-base);
  display: flex;
  flex-wrap: wrap;
`,CommentBlock=({children})=>react.createElement(CommentContainer,null,children);CommentBlock.__docgenInfo={description:"",methods:[],displayName:"CommentBlock",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}}},"../../packages/react/dist/button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$n:()=>Button,rl:()=>ButtonFillStyle,Mp:()=>ButtonSize,Ak:()=>ButtonVariant});var ButtonVariant,t,ButtonSize,ButtonFillStyle,styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("../../packages/react/dist/theme/utils/index.js");(t=ButtonVariant||(ButtonVariant={})).Primary="primary",t.Secondary="secondary",t.Destruct="destruct",function(t){t.Small="small",t.Default="default"}(ButtonSize||(ButtonSize={})),function(t){t.Filled="filled",t.Outline="outline",t.None="none"}(ButtonFillStyle||(ButtonFillStyle={}));const Button=styled_components_browser_esm.Ay.button`
  display: inline-flex;
  width: ${({iconOnly:r=!1,size:o=ButtonSize.Default})=>r?o===ButtonSize.Default?"44px":"30px":"100%"};
  align-items: center;
  justify-content: center;
  height: ${({size:r=ButtonSize.Default})=>r===ButtonSize.Small?"30px":"44px"};
  font-size: 20px;
  font-family: ${({theme:r})=>r.global.specificFontFamily};
  padding: ${({iconOnly:r=!1})=>r?0:" 0 1.5rem"};
  border: none;
  border-radius: ${({theme:r})=>r.global.componentRadius};
  transition: all 0.5s;
  cursor: pointer;
  flex-shrink: 0;

  background-color: ${({theme:r,variant:o=ButtonVariant.Primary})=>o===ButtonVariant.Primary?r.colors.primary.base:o===ButtonVariant.Secondary?(0,utils.WI)("secondary"):r.colors.error.base};

  color: ${({theme:r,variant:o=ButtonVariant.Primary})=>o===ButtonVariant.Primary?r.colors.textSecondary.base:o===ButtonVariant.Secondary?r.colors.textPrimary.base:r.colors.textSecondary.base};

  svg {
    fill: ${({theme:r,variant:o=ButtonVariant.Primary})=>o===ButtonVariant.Primary?r.colors.textSecondary.base:o===ButtonVariant.Secondary?r.colors.textPrimary.base:r.colors.textSecondary.base};
    transition: all 0.5s;
  }

  ${({theme:r,iconOnly:o=!1,size:a=ButtonSize.Default})=>styled_components_browser_esm.AH`
    @media screen and (min-width: ${`${r.breakpoints.medium}`}) {
      width: ${o?a===ButtonSize.Default?"44px":"30px":"max-content"};
      min-width: ${o?a===ButtonSize.Default?"44px":"30px":"120px"};
    }
  `}

  &:hover:not([disabled]) {
    background-color: ${({theme:r,variant:o=ButtonVariant.Primary})=>o===ButtonVariant.Primary?r.colors.primary.hover:o===ButtonVariant.Secondary?r.colors.secondary.hover:r.colors.error.hover};
  }

  &:focus:not([disabled]),
  &:active:not([disabled]) {
    background-color: ${({theme:r,variant:o=ButtonVariant.Primary})=>o===ButtonVariant.Primary?r.colors.primary.active:o===ButtonVariant.Secondary?r.colors.secondary.active:r.colors.error.active};
  }

  ${({theme:r,fill:o=ButtonFillStyle.Filled,variant:a=ButtonVariant.Primary})=>o===ButtonFillStyle.None?styled_components_browser_esm.AH`
        background-color: transparent;
        color: ${a===ButtonVariant.Primary?r.colors.primary.base:a===ButtonVariant.Secondary?r.colors.secondary.base:r.colors.error.base};

        svg {
          fill: ${a===ButtonVariant.Primary?r.colors.primary.base:a===ButtonVariant.Secondary?r.colors.secondary.base:r.colors.error.base};
        }

        &:hover:not([disabled]) {
          background-color: transparent;
          color: ${a===ButtonVariant.Primary?r.colors.primary.hover:a===ButtonVariant.Secondary?r.colors.secondary.hover:r.colors.error.hover};
          svg {
            fill: ${a===ButtonVariant.Primary?r.colors.primary.hover:a===ButtonVariant.Secondary?r.colors.secondary.hover:r.colors.error.hover};
          }
        }

        &:active:not([disabled]),
        &:focus:not([disabled]) {
          background-color: transparent;
          color: ${a===ButtonVariant.Primary?r.colors.primary.active:a===ButtonVariant.Secondary?r.colors.secondary.active:r.colors.error.active};
          svg {
            fill: ${a===ButtonVariant.Primary?r.colors.primary.active:a===ButtonVariant.Secondary?r.colors.secondary.active:r.colors.error.active};
          }
        }
      `:o===ButtonFillStyle.Outline?styled_components_browser_esm.AH`
        background-color: transparent;
        color: ${a===ButtonVariant.Primary?r.colors.primary.base:a===ButtonVariant.Secondary?r.colors.secondary.base:r.colors.error.base};
        border: 2px solid
          ${a===ButtonVariant.Primary?r.colors.primary.base:a===ButtonVariant.Secondary?r.colors.secondary.base:r.colors.error.base};

        svg {
          fill: ${a===ButtonVariant.Primary?r.colors.primary.base:a===ButtonVariant.Secondary?r.colors.secondary.base:r.colors.error.base};
        }

        &:hover:not([disabled]) {
          background-color: transparent;
          color: ${a===ButtonVariant.Primary?r.colors.primary.hover:a===ButtonVariant.Secondary?r.colors.secondary.hover:r.colors.error.hover};
          border: 2px solid
            ${a===ButtonVariant.Primary?r.colors.primary.hover:a===ButtonVariant.Secondary?r.colors.secondary.hover:r.colors.error.hover};

          svg {
            fill: ${a===ButtonVariant.Primary?r.colors.primary.hover:a===ButtonVariant.Secondary?r.colors.secondary.hover:r.colors.error.hover};
          }
        }

        &:focus:not([disabled]),
        &:active:not([disabled]) {
          background-color: transparent;
          color: ${a===ButtonVariant.Primary?r.colors.primary.active:a===ButtonVariant.Secondary?r.colors.secondary.active:r.colors.error.active};
          border: 2px solid
            ${a===ButtonVariant.Primary?r.colors.primary.active:a===ButtonVariant.Secondary?r.colors.secondary.active:r.colors.error.active};
          svg {
            fill: ${a===ButtonVariant.Primary?r.colors.primary.active:a===ButtonVariant.Secondary?r.colors.secondary.active:r.colors.error.active};
          }
        }
      `:void 0}

  &[disabled] {
    opacity: 0.7;
    cursor: inherit;
  }
`},"../../packages/react/dist/grid/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>GridColumn,E:()=>GridContainer});var styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const GridColumn=styled_components_browser_esm.Ay.div`
  grid-column: ${e=>`span ${e.sm||e.theme.grid.small.columns}`};
  display: ${e=>0===e.sm?"none":"flex"};
  flex-direction: column;
  align-items: flex-start;

  ${({theme:e,md:n,lg:m})=>styled_components_browser_esm.AH`
    @media screen and (min-width: ${`${e.breakpoints.medium}`}) {
      grid-column: ${e=>`span ${n||m||e.theme.grid.medium.columns}`};
      display: ${0===n?"none":"flex"};
    }

    @media screen and (min-width: ${`${e.breakpoints.large}`}) {
      grid-column: ${e=>`span ${m||e.theme.grid.large.columns}`};
      display: ${0===m?"none":"flex"};
    }
  `}
`,GridContainer=styled_components_browser_esm.Ay.div`
  display: grid;
  width: 100%;
  grid-gap: ${({theme:i})=>i.grid.small.gutter};
  grid-template-columns: repeat(${({theme:i})=>i.grid.small.columns}, 1fr);
  grid-template-rows: initial;
  grid-auto-rows: initial;
  margin: 0;
  max-width: 100%;
  grid-column: span ${({theme:i})=>i.grid.small.columns};

  ${({showSideMargin:i})=>i&&styled_components_browser_esm.AH`
      max-width: calc(100% - ${({theme:i})=>i.grid.small.margin} * 2);
      margin-left: ${({theme:i})=>i.grid.small.margin} !important;
      margin-right: ${({theme:i})=>i.grid.small.margin} !important;
    `}

  ${({restrictHeightToMaxContent:i})=>i&&styled_components_browser_esm.AH`
      grid-template-rows: max-content;
      grid-auto-rows: max-content;
    `}

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(${({theme:i})=>i.grid.medium.columns}, 1fr);
    margin: 0;
    grid-gap: ${({theme:i})=>i.grid.medium.gutter};
    max-width: 100%;
    grid-column: span ${({theme:i})=>i.grid.medium.columns};

    ${({showSideMargin:i})=>i&&styled_components_browser_esm.AH`
        max-width: calc(100% - ${({theme:i})=>i.grid.medium.margin} * 2);
        margin-left: ${({theme:i})=>i.grid.medium.margin} !important;
        margin-right: ${({theme:i})=>i.grid.medium.margin} !important;
      `}
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(${({theme:i})=>i.grid.large.columns}, 1fr);
    margin: 0;
    grid-gap: ${({theme:i})=>i.grid.large.gutter};
    grid-column: span ${({theme:i})=>i.grid.large.columns};

    ${({showSideMargin:i})=>i&&styled_components_browser_esm.AH`
        max-width: calc(100% - ${({theme:i})=>i.grid.large.margin} * 2);
        margin-left: ${({theme:i})=>i.grid.large.margin} !important;
        margin-right: ${({theme:i})=>i.grid.large.margin} !important;
      `}
  }
`},"../../packages/react/dist/notification/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Fc:()=>Alert,t7:()=>NotificationVariant,qb:()=>Snackbar});var NotificationVariant,i,jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),icons=__webpack_require__("../../packages/react/dist/icons/index.js");(i=NotificationVariant||(NotificationVariant={})).Success="success",i.Error="error",i.Info="info",i.Warning="warning";var dist_button=__webpack_require__("../../packages/react/dist/button/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const NotificationContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: center;
  width: 100%;
`,NotificationContent=styled_components_browser_esm.Ay.div`
  display: ${({visible:o})=>o?"flex":"none"};
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: var(--global-componentRadius);
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 60px;
  animation-name: ${({visible:o})=>o?"notificationOnLoad":""};
  animation-duration: 0.6s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  ${({variant:o})=>o===NotificationVariant.Error?styled_components_browser_esm.AH`
        background-color: var(--colors-error-base);
        color: var(--colors-background-base);
        border: 1px solid var(--colors-error-base);
        box-shadow: 0px 2px 8px 0px var(--colors-error-base);
      `:o===NotificationVariant.Info?styled_components_browser_esm.AH`
        background-color: var(--colors-background-active);
        color: var(--colors-textPrimary-base);
        border: none;
        box-shadow: 0px 2px 8px 0px var(--colors-primary-base);
      `:o===NotificationVariant.Success?styled_components_browser_esm.AH`
        background-color: var(--colors-success-base);
        color: var(--colors-background-base);
        border: 1px solid var(--colors-success-base);
        box-shadow: 0px 2px 8px 0px var(--colors-success-base);
        button {
          svg {
            fill: var(--colors-background-base) !important;
          }
        }
      `:styled_components_browser_esm.AH`
        background-color: var(--colors-warning-base);
        color: var(--colors-textPrimary-base);
        border: 1px solid var(--colors-warning-base);
        box-shadow: 0px 2px 8px 0px var(--colors-warning-base);
      `}

  @keyframes notificationOnLoad {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`,NotificationHeader=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
`,NotificationTitle=styled_components_browser_esm.Ay.div`
  font-family: var(--global-specificFontFamily);
  flex-grow: 1;
  padding-left: 1rem;
  padding-right: 1rem;
`,NotificationAdditionalContent=styled_components_browser_esm.Ay.div`
  padding-left: 1rem;
  padding-right: 1rem;
  margin-right: 40px;
  font-size: 0.9rem;
  margin-bottom: 4px;
`,Alert=t=>{const{id:i,title:o,visible:n,variant:e=NotificationVariant.Error,onClose:r,idToFocusOnClose:a,children:l}=t,s=(0,react.useRef)(null);return(0,react.useEffect)((()=>{n&&s.current&&s.current.focus()}),[n]),(0,jsx_runtime.jsx)(NotificationContainer,{id:i,role:"status","aria-live":"assertive",children:(0,jsx_runtime.jsxs)(NotificationContent,{visible:!!n,variant:e,children:[(0,jsx_runtime.jsxs)(NotificationHeader,{children:[(0,jsx_runtime.jsx)(NotificationTitle,{children:o}),(0,jsx_runtime.jsx)(dist_button.$n,{id:`${i}-close-button`,iconOnly:!0,ref:s,fill:e===NotificationVariant.Error?dist_button.rl.Filled:dist_button.rl.None,variant:e===NotificationVariant.Error?dist_button.Ak.Destruct:dist_button.Ak.Primary,"aria-label":"Close",onClick:t=>{r?.(t),a&&document.getElementById(a)?.focus()},children:(0,jsx_runtime.jsx)(icons.CloseIcon,{})})]}),(0,jsx_runtime.jsx)(NotificationAdditionalContent,{children:l})]})})},SnackbarContainer=styled_components_browser_esm.Ay.div`
  display: ${({visible:o})=>o?"flex":"none"};
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  width: 300px;
  border-radius: var(--global-componentRadius);
  padding: 8px;
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
  animation-name: ${({visible:o})=>o?"notificationOnShow":"notificationOnHide"};
  animation-duration: 0.6s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  gap: 10px;

  ${({variant:o})=>o===NotificationVariant.Error?styled_components_browser_esm.AH`
        background-color: var(--colors-error-base);
        color: var(--colors-background-base);
        border: 1px solid var(--colors-error-base);

        button {
          svg {
            fill: var(--colors-background-base) !important;
          }
        }
      `:o===NotificationVariant.Info?styled_components_browser_esm.AH`
        background-color: var(--colors-background-active);
        color: var(--colors-textPrimary-base);
        border: none;
      `:o===NotificationVariant.Success?styled_components_browser_esm.AH`
        background-color: var(--colors-success-base);
        color: var(--colors-background-base);
        border: 1px solid var(--colors-success-base);

        button {
          svg {
            fill: var(--colors-background-base) !important;
          }
        }
      `:styled_components_browser_esm.AH`
        background-color: var(--colors-warning-base);
        color: var(--colors-textPrimary-base);
        border: 1px solid var(--colors-warning-base);
      `}

  @keyframes notificationOnShow {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes notificationOnHide {
    0% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      transform: translateX(100%);
    }
  }
`,SnackbarMessage=styled_components_browser_esm.Ay.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
`;var utils=__webpack_require__("../../packages/react/dist/theme/utils/index.js");const Snackbar=e=>{const{id:t,message:o,visible:i,duration:r=5e3,variant:n=NotificationVariant.Success,onClose:s,idToFocusOnClose:a}=e;let l=null;const c=(0,react.useRef)(null),u=e=>{s?.(e),a&&document.getElementById(a)?.focus()};return(0,react.useEffect)((()=>{i&&c.current&&(c.current.focus(),l=setTimeout((()=>{u()}),r))}),[i]),(0,jsx_runtime.jsxs)(SnackbarContainer,{visible:!!i,variant:n,"aria-live":"polite",children:[(0,jsx_runtime.jsx)(SnackbarMessage,{children:o}),(0,jsx_runtime.jsx)(dist_button.$n,{id:`${t}-close-button`,fill:dist_button.rl.None,iconOnly:!0,size:dist_button.Mp.Small,"aria-label":"Close",ref:c,onClick:u,children:(0,jsx_runtime.jsx)(icons.CloseIcon,{fill:n===NotificationVariant.Error||n===NotificationVariant.Success?(0,utils.WI)("background"):(0,utils.WI)("textPrimary")})})]})}}}]);
//# sourceMappingURL=notification-Snackbar-stories.bd8cbdfa.iframe.bundle.js.map
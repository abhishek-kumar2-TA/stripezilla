"use strict";(self.webpackChunkstorybook_react19=self.webpackChunkstorybook_react19||[]).push([[310],{"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bO:()=>CommentBlock,ur:()=>DescriptionBlock,Tx:()=>ImportBlock});var grid=__webpack_require__("../../packages/react/dist/grid/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const ImportBlockDiv=styled_components_browser_esm.Ay.div`
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
`,CommentBlock=({children})=>react.createElement(CommentContainer,null,children);CommentBlock.__docgenInfo={description:"",methods:[],displayName:"CommentBlock",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}}},"../../packages/react/dist/button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$n:()=>Button,rl:()=>ButtonFillStyle,Mp:()=>ButtonSize,Ak:()=>ButtonVariant});var ButtonVariant,ButtonSize,ButtonFillStyle,styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("../../packages/react/dist/theme/utils/index.js");!function(ButtonVariant){ButtonVariant.Primary="primary",ButtonVariant.Secondary="secondary",ButtonVariant.Destruct="destruct"}(ButtonVariant||(ButtonVariant={})),function(ButtonSize){ButtonSize.Small="small",ButtonSize.Default="default"}(ButtonSize||(ButtonSize={})),function(ButtonFillStyle){ButtonFillStyle.Filled="filled",ButtonFillStyle.Outline="outline",ButtonFillStyle.None="none"}(ButtonFillStyle||(ButtonFillStyle={}));const Button=styled_components_browser_esm.Ay.button`
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
`},"../../packages/react/dist/grid/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>GridColumn,E:()=>GridContainer});var styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const GridColumn=styled_components_browser_esm.Ay.div`
  grid-column: ${props=>`span ${props.sm||props.theme.grid.small.columns}`};
  display: ${props=>0===props.sm?"none":"flex"};
  flex-direction: column;
  align-items: flex-start;

  ${({theme,md,lg})=>styled_components_browser_esm.AH`
    @media screen and (min-width: ${`${theme.breakpoints.medium}`}) {
      grid-column: ${props=>`span ${md||lg||props.theme.grid.medium.columns}`};
      display: ${0===md?"none":"flex"};
    }

    @media screen and (min-width: ${`${theme.breakpoints.large}`}) {
      grid-column: ${props=>`span ${lg||props.theme.grid.large.columns}`};
      display: ${0===lg?"none":"flex"};
    }
  `}
`,GridContainer=styled_components_browser_esm.Ay.div`
  display: grid;
  width: 100%;
  grid-gap: ${({theme})=>theme.grid.small.gutter};
  grid-template-columns: repeat(${({theme})=>theme.grid.small.columns}, 1fr);
  grid-template-rows: initial;
  grid-auto-rows: initial;
  margin: 0;
  max-width: 100%;
  grid-column: span ${({theme})=>theme.grid.small.columns};

  ${({showSideMargin})=>showSideMargin&&styled_components_browser_esm.AH`
      max-width: calc(100% - ${({theme})=>theme.grid.small.margin} * 2);
      margin-left: ${({theme})=>theme.grid.small.margin} !important;
      margin-right: ${({theme})=>theme.grid.small.margin} !important;
    `}

  ${({restrictHeightToMaxContent})=>restrictHeightToMaxContent&&styled_components_browser_esm.AH`
      grid-template-rows: max-content;
      grid-auto-rows: max-content;
    `}

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(${({theme})=>theme.grid.medium.columns}, 1fr);
    margin: 0;
    grid-gap: ${({theme})=>theme.grid.medium.gutter};
    max-width: 100%;
    grid-column: span ${({theme})=>theme.grid.medium.columns};

    ${({showSideMargin})=>showSideMargin&&styled_components_browser_esm.AH`
        max-width: calc(100% - ${({theme})=>theme.grid.medium.margin} * 2);
        margin-left: ${({theme})=>theme.grid.medium.margin} !important;
        margin-right: ${({theme})=>theme.grid.medium.margin} !important;
      `}
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(${({theme})=>theme.grid.large.columns}, 1fr);
    margin: 0;
    grid-gap: ${({theme})=>theme.grid.large.gutter};
    grid-column: span ${({theme})=>theme.grid.large.columns};

    ${({showSideMargin})=>showSideMargin&&styled_components_browser_esm.AH`
        max-width: calc(100% - ${({theme})=>theme.grid.large.margin} * 2);
        margin-left: ${({theme})=>theme.grid.large.margin} !important;
        margin-right: ${({theme})=>theme.grid.large.margin} !important;
      `}
  }
`},"../../packages/react/dist/notification/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Fc:()=>Alert,t7:()=>NotificationVariant,qb:()=>Snackbar});var NotificationVariant,jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),icons=__webpack_require__("../../packages/react/dist/icons/index.js");!function(NotificationVariant){NotificationVariant.Success="success",NotificationVariant.Error="error",NotificationVariant.Info="info",NotificationVariant.Warning="warning"}(NotificationVariant||(NotificationVariant={}));var dist_button=__webpack_require__("../../packages/react/dist/button/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const NotificationContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: center;
  width: 100%;
`,NotificationContent=styled_components_browser_esm.Ay.div`
  display: ${({visible})=>visible?"flex":"none"};
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
  animation-name: ${({visible})=>visible?"notificationOnLoad":""};
  animation-duration: 0.6s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  ${({variant})=>variant===NotificationVariant.Error?styled_components_browser_esm.AH`
        background-color: var(--colors-error-base);
        color: var(--colors-background-base);
        border: 1px solid var(--colors-error-base);
        box-shadow: 0px 2px 8px 0px var(--colors-error-base);
      `:variant===NotificationVariant.Info?styled_components_browser_esm.AH`
        background-color: var(--colors-background-active);
        color: var(--colors-textPrimary-base);
        border: none;
        box-shadow: 0px 2px 8px 0px var(--colors-primary-base);
      `:variant===NotificationVariant.Success?styled_components_browser_esm.AH`
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
`,Alert=props=>{const{id,title,visible,variant=NotificationVariant.Error,onClose,idToFocusOnClose,children}=props,closeRef=(0,react.useRef)(null);return(0,react.useEffect)((()=>{visible&&closeRef.current&&closeRef.current.focus()}),[visible]),(0,jsx_runtime.jsx)(NotificationContainer,{id,role:"status","aria-live":"assertive",children:(0,jsx_runtime.jsxs)(NotificationContent,{visible:!!visible,variant,children:[(0,jsx_runtime.jsxs)(NotificationHeader,{children:[(0,jsx_runtime.jsx)(NotificationTitle,{children:title}),(0,jsx_runtime.jsx)(dist_button.$n,{id:`${id}-close-button`,iconOnly:!0,ref:closeRef,fill:variant===NotificationVariant.Error?dist_button.rl.Filled:dist_button.rl.None,variant:variant===NotificationVariant.Error?dist_button.Ak.Destruct:dist_button.Ak.Primary,"aria-label":"Close",onClick:event=>{onClose?.(event),idToFocusOnClose&&document.getElementById(idToFocusOnClose)?.focus()},children:(0,jsx_runtime.jsx)(icons.CloseIcon,{})})]}),(0,jsx_runtime.jsx)(NotificationAdditionalContent,{children})]})})},SnackbarContainer=styled_components_browser_esm.Ay.div`
  display: ${({visible})=>visible?"flex":"none"};
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
  animation-name: ${({visible})=>visible?"notificationOnShow":"notificationOnHide"};
  animation-duration: 0.6s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  gap: 10px;

  ${({variant})=>variant===NotificationVariant.Error?styled_components_browser_esm.AH`
        background-color: var(--colors-error-base);
        color: var(--colors-background-base);
        border: 1px solid var(--colors-error-base);

        button {
          svg {
            fill: var(--colors-background-base) !important;
          }
        }
      `:variant===NotificationVariant.Info?styled_components_browser_esm.AH`
        background-color: var(--colors-background-active);
        color: var(--colors-textPrimary-base);
        border: none;
      `:variant===NotificationVariant.Success?styled_components_browser_esm.AH`
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
`;var utils=__webpack_require__("../../packages/react/dist/theme/utils/index.js");const Snackbar=props=>{const{id,message,visible,duration=5e3,variant=NotificationVariant.Success,onClose,idToFocusOnClose}=props;let _timeout=null;const closeRef=(0,react.useRef)(null),snackbarCloseHandler=event=>{onClose?.(event),idToFocusOnClose&&document.getElementById(idToFocusOnClose)?.focus()};return(0,react.useEffect)((()=>{visible&&closeRef.current&&(closeRef.current.focus(),_timeout=setTimeout((()=>{snackbarCloseHandler()}),duration))}),[visible]),(0,jsx_runtime.jsxs)(SnackbarContainer,{visible:!!visible,variant,"aria-live":"polite",children:[(0,jsx_runtime.jsx)(SnackbarMessage,{children:message}),(0,jsx_runtime.jsx)(dist_button.$n,{id:`${id}-close-button`,fill:dist_button.rl.None,iconOnly:!0,size:dist_button.Mp.Small,"aria-label":"Close",ref:closeRef,onClick:snackbarCloseHandler,children:(0,jsx_runtime.jsx)(icons.CloseIcon,{fill:variant===NotificationVariant.Error||variant===NotificationVariant.Success?(0,utils.WI)("background"):(0,utils.WI)("textPrimary")})})]})}}}]);
//# sourceMappingURL=310.0c1c1e44.iframe.bundle.js.map
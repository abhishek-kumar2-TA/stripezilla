"use strict";(self.webpackChunkstorybook_react19=self.webpackChunkstorybook_react19||[]).push([[321],{"../../packages/react/dist/button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$n:()=>Button,rl:()=>ButtonFillStyle,Mp:()=>ButtonSize,Ak:()=>ButtonVariant});var ButtonVariant,ButtonSize,ButtonFillStyle,styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("../../packages/react/dist/theme/utils/index.js");!function(ButtonVariant){ButtonVariant.Primary="primary",ButtonVariant.Secondary="secondary",ButtonVariant.Destruct="destruct"}(ButtonVariant||(ButtonVariant={})),function(ButtonSize){ButtonSize.Small="small",ButtonSize.Default="default"}(ButtonSize||(ButtonSize={})),function(ButtonFillStyle){ButtonFillStyle.Filled="filled",ButtonFillStyle.Outline="outline",ButtonFillStyle.None="none"}(ButtonFillStyle||(ButtonFillStyle={}));const Button=styled_components_browser_esm.Ay.button`
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
`},"../../packages/react/dist/loader/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>LoadingBar,y:()=>Spinner});var styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const rotate=styled_components_browser_esm.i7`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,Spinner=styled_components_browser_esm.Ay.div`
  width: ${({size})=>`${size}px`};
  height: ${({size})=>`${size}px`};
  border-radius: 50%;
  border: ${({color="var(--colors-primary-base)"})=>`4px solid ${color}`};
  border-top-color: transparent;
  animation: ${rotate} 1s linear infinite;
`,LoadingBar=styled_components_browser_esm.Ay.div`
  @keyframes expanding {
    0% {
      transform: scaleX(0);
      opacity: 0;
    }
    100% {
      transform: scaleX(1);
      opacity: 1;
    }
  }

  @keyframes moving {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  height: 1.25rem;
  width: 80%;
  margin: 2rem 0;
  position: relative;
  transform-origin: left;
  animation:
    expanding 0.4s 0.7s forwards linear,
    moving 1s 1s infinite forwards linear;
  border-radius: 0.125rem;
  background-image: ${({theme})=>`linear-gradient(to right, ${theme.colors.background.base} 30%, ${theme.colors.primary.base} 60%,  ${theme.colors.background.base})`};
  background-size: 200% auto;
  opacity: 0;
  animation-delay: 100ms;

  &:before {
    display: block;
    height: 1.25rem;
    content: '';
    width: 60%;
    position: relative;
    top: -2rem;
    transform-origin: left;
    animation:
      expanding 0.4s 0.7s forwards linear,
      moving 1s 1s infinite forwards linear;
    border-radius: 0.125rem;
    background-image: ${({theme})=>`linear-gradient(to right, ${theme.colors.background.base} 30%, ${theme.colors.primary.base} 60%,  ${theme.colors.background.base})`};
    background-size: 200% auto;
    opacity: 0;
    animation-delay: 100ms;
  }

  &:after {
    display: block;
    height: 1.25rem;
    content: '';
    width: 80%;
    position: relative;
    top: 0.75rem;
    transform-origin: left;
    animation:
      expanding 0.4s 0.7s forwards linear,
      moving 1s 1s infinite forwards linear;
    border-radius: 0.125rem;
    background-image: ${({theme})=>`linear-gradient(to right, ${theme.colors.background.base} 30%, ${theme.colors.primary.base} 60%,  ${theme.colors.background.base})`};
    background-size: 200% auto;
    opacity: 0;
    animation-delay: 100ms;
  }
`},"../../packages/react/dist/overlay/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_s:()=>Drawer,V:()=>DrawerSlide,aF:()=>Modal,hJ:()=>Overlay,Lf:()=>OverlayContentAlign,Ud:()=>OverlayLoader,DD:()=>SideSheet,dc:()=>useDrawerController});var OverlayContentAlign,jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es2015=__webpack_require__("../../node_modules/react-focus-lock/dist/es2015/index.js");!function(OverlayContentAlign){OverlayContentAlign.TopLeft="top left",OverlayContentAlign.TopCenter="top center",OverlayContentAlign.TopRight="top right",OverlayContentAlign.MiddleLeft="middle left",OverlayContentAlign.MiddleCenter="middle center",OverlayContentAlign.MiddleRight="middle right",OverlayContentAlign.BottomLeft="bottom left",OverlayContentAlign.BottomCenter="bottom center",OverlayContentAlign.BottomRight="bottom right"}(OverlayContentAlign||(OverlayContentAlign={}));var styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const OverlayContainer=styled_components_browser_esm.Ay.div`
  display: ${({visible})=>visible?"flex":"none"};
  align-items: ${({overlayContentAlign})=>"middle"===overlayContentAlign.split(" ")[0]?"center":"top"===overlayContentAlign.split(" ")[0]?"flex-start":"flex-end"};

  justify-content: ${({overlayContentAlign})=>"center"===overlayContentAlign.split(" ")[1]?"center":"left"===overlayContentAlign.split(" ")[1]?"flex-start":"flex-end"};

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background: ${({visible})=>visible?"rgba(0, 0, 0, 0.5)":"none"};
  transition: all 0.3s ease;
`,Overlay=props=>{const{id,visible,overlayContentAlign=OverlayContentAlign.MiddleCenter,idToFocusOnClose,children}=props;return(0,jsx_runtime.jsx)(es2015.Ay,{disabled:!visible,onDeactivation:()=>{idToFocusOnClose&&setTimeout((()=>{document.getElementById(idToFocusOnClose)?.focus()}),0)},children:(0,jsx_runtime.jsx)(OverlayContainer,{id,visible,overlayContentAlign,children})})},ModalContainer=styled_components_browser_esm.Ay.div`
  background: var(--colors-background-hover);
  border-radius: var(--global-componentRadius);
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem 1rem;
  width: 90%;
  max-width: 550px;

  ${({theme})=>styled_components_browser_esm.AH`
    @media screen and (min-width: ${`${theme.breakpoints.medium}`}) {
      width: 70%;
      max-width: 600px;
    }
    @media (min-width: 768px) {
    }
  `}

  @media (min-width: 1024px) {
    width: 50%;
    max-width: 800px;
  }
`,ModalHeader=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`,ModalHeaderTitle=styled_components_browser_esm.Ay.h2`
  flex-grow: 1;
  color: var(--colors-secondary-base);
`;var dist_button=__webpack_require__("../../packages/react/dist/button/index.js"),icons=__webpack_require__("../../packages/react/dist/icons/index.js");const Modal=props=>{const{id,title,visible=!1,onClose,children,idToFocusOnClose}=props;return(0,jsx_runtime.jsx)(Overlay,{id:`${id}-modal-overlay`,visible,idToFocusOnClose,children:(0,jsx_runtime.jsxs)(ModalContainer,{role:"dialog","aria-modal":"true","aria-labelledby":"${`${this.id}-modal-title`}",children:[(0,jsx_runtime.jsxs)(ModalHeader,{children:[(0,jsx_runtime.jsx)(ModalHeaderTitle,{id:`${id}-modal-title`,children:title}),(0,jsx_runtime.jsx)(dist_button.$n,{id:`${id}-close-button`,iconOnly:!0,fill:dist_button.rl.None,variant:dist_button.Ak.Primary,"aria-label":"Close",onClick:event=>{onClose?.(event),idToFocusOnClose&&document.getElementById(idToFocusOnClose)?.focus()},children:(0,jsx_runtime.jsx)(icons.CloseIcon,{})})]}),children]})})};var react=__webpack_require__("../../node_modules/react/index.js");const DrawerContainer=styled_components_browser_esm.Ay.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 0.6rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 444px;
  height: 100%;
  background-color: white;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.1);
  transform: translateX(100%);
  animation: ${({visible})=>visible?"slideIn 0.4s ease-in-out forwards":"none"};

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @media (min-width: 768px) {
    width: 70%;
    max-width: 600px;
  }

  h2 {
    border: 1px solid var(--colors-textPrimary-hover);
    border-bottom: 2px solid var(--colors-warning-base);
    border-radius: 5px 5px 0 0;
    padding: 0 8px;
  }
`,DrawerBody=styled_components_browser_esm.Ay.div`
  flex-grow: 1;
  overflow-y: auto;
`,DrawerFooter=styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
  border-top: 1px solid var(--colors-textPrimary-hover);

  button {
    width: fit-content;
  }
`,DrawerSlideContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
`,DrawerContext=(0,react.createContext)({setActiveSlide:()=>{}}),useDrawerController=()=>{let setActiveSlide=_index=>{};const drawerContext=(0,react.useContext)(DrawerContext);return drawerContext?setActiveSlide=drawerContext?.setActiveSlide:(message=>{if("undefined"==typeof jest)throw new Error(message);console.warn(message)})("useDrawerController must be used within a Drawer"),{setActiveSlide}},Drawer=props=>{const{id,visible,title,onClose,onSubmit,idToFocusOnClose,children}=props,[slidesList,setSlidesList]=(0,react.useState)([]),[_activeSlide,setActiveSlide]=(0,react.useState)(0);(0,react.useEffect)((()=>{setSlidesList(react.Children.toArray(children)),visible&&setActiveSlide(0)}),[visible,children]);const _isLastStep=_activeSlide===slidesList.length-1;return(0,jsx_runtime.jsx)(Overlay,{id:`${id}-overlay-container`,visible,idToFocusOnClose,children:(0,jsx_runtime.jsx)(DrawerContext.Provider,{value:{setActiveSlide:stepIndex=>{stepIndex>=0&&stepIndex<slidesList.length&&setActiveSlide(stepIndex)}},children:(0,jsx_runtime.jsxs)(DrawerContainer,{visible,role:"dialog","aria-labelledby":`${id}-drawer-title`,children:[(0,jsx_runtime.jsx)(dist_button.$n,{style:{alignSelf:"end"},id:"${`${this.id}-close-button`}",iconOnly:!0,fill:dist_button.rl.None,variant:dist_button.Ak.Primary,"aria-label":"Close",onClick:e=>{e.stopPropagation(),onClose?.()},children:(0,jsx_runtime.jsx)(icons.CloseIcon,{})}),(0,jsx_runtime.jsx)("h2",{id:`${id}-drawer-title`,children:title}),(0,jsx_runtime.jsx)(DrawerBody,{children:slidesList[_activeSlide]}),(0,jsx_runtime.jsxs)(DrawerFooter,{children:[(0,jsx_runtime.jsx)(dist_button.$n,{id:`${id}-next-or-button`,variant:dist_button.Ak.Secondary,onClick:_activeSlide===slidesList.length-1?async e=>{e.stopPropagation();const activeSlideComponent=slidesList[_activeSlide];if(activeSlideComponent?.props?.validate){await activeSlideComponent.props.validate()&&onSubmit?.()}else onSubmit?.()}:async()=>{if(_activeSlide<slidesList.length-1){const activeSlideComponent=slidesList[_activeSlide];if(activeSlideComponent?.props?.validate){await activeSlideComponent.props.validate()&&setActiveSlide(_activeSlide+1)}else setActiveSlide(_activeSlide+1)}},children:_isLastStep?"Submit":"Next"}),(0,jsx_runtime.jsx)(dist_button.$n,{id:`${id}-previous-button`,fill:dist_button.rl.None,onClick:()=>{_activeSlide>0&&setActiveSlide(_activeSlide-1)},style:{display:0===_activeSlide?"none":""},children:"Previous"})]})]})})})},DrawerSlide=props=>{const{id,title,children}=props;return(0,jsx_runtime.jsx)(DrawerSlideContainer,{id,children})};var loader=__webpack_require__("../../packages/react/dist/loader/index.js");const OverlayLoader=props=>{const{visible=!1,idToFocusOnClose,size=40,color="var(--colors-primary-base)"}=props;return(0,jsx_runtime.jsx)(Overlay,{id:"loader-overlay",visible,idToFocusOnClose,children:(0,jsx_runtime.jsx)(loader.y,{size,color})})},SideSheetContainer=styled_components_browser_esm.Ay.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 0.6rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 444px;
  height: 100%;
  background-color: white;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.1);
  transform: translateX(100%);
  animation: ${({visible})=>visible?"slideIn 0.4s ease-in-out forwards":"none"};

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @media (min-width: 768px) {
    width: 80%;
    max-width: 800px;
  }

  h2 {
  }
`,SideSheetHeader=styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
`,SideSheetBody=styled_components_browser_esm.Ay.div`
  flex-grow: 1;
  overflow-y: auto;
`,SideSheet=(styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
`,props=>{const{id,visible,title,onClose,idToFocusOnClose,children}=props;return(0,jsx_runtime.jsx)(Overlay,{id:`${id}-overlay-container`,visible,idToFocusOnClose,children:(0,jsx_runtime.jsxs)(SideSheetContainer,{visible,role:"dialog","aria-labelledby":`${id}-drawer-title`,children:[(0,jsx_runtime.jsxs)(SideSheetHeader,{children:[(0,jsx_runtime.jsx)(dist_button.$n,{style:{alignSelf:"end"},id:"${`${this.id}-close-button`}",iconOnly:!0,fill:dist_button.rl.None,variant:dist_button.Ak.Primary,"aria-label":"Close",onClick:e=>{e.stopPropagation(),onClose?.()},children:(0,jsx_runtime.jsx)(icons.CloseIcon,{})}),(0,jsx_runtime.jsx)("h2",{id:`${id}-drawer-title`,children:title})]}),(0,jsx_runtime.jsx)(SideSheetBody,{children})]})})})}}]);
//# sourceMappingURL=321.c803a880.iframe.bundle.js.map
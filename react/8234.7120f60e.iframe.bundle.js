"use strict";(self.webpackChunkstorybook_react19=self.webpackChunkstorybook_react19||[]).push([[8234],{"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bO:()=>CommentBlock,ur:()=>DescriptionBlock,Tx:()=>ImportBlock});var grid=__webpack_require__("../../packages/react/dist/grid/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const ImportBlockDiv=styled_components_browser_esm.Ay.div`
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
`,CommentBlock=({children})=>react.createElement(CommentContainer,null,children);CommentBlock.__docgenInfo={description:"",methods:[],displayName:"CommentBlock",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}}},"../../packages/react/dist/grid/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>GridColumn,E:()=>GridContainer});var styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const GridColumn=styled_components_browser_esm.Ay.div`
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
`},"../../packages/react/dist/tabs/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Vh:()=>TabItem,tU:()=>Tabs,Pd:()=>TabsOrientation});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js");const TabsContext=(0,react.createContext)(null),useTabsContext=()=>{const t=(0,react.useContext)(TabsContext);if(!t)throw new Error("Tabs components must be used within a Tabs provider");return t};var styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const TabsContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: ${e=>"vertical"===e.orientation?"row":"column"};
  width: 100%;
`,TabsList=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: ${e=>"vertical"===e.orientation?"column":"row"};
  background: ${({theme:e})=>e.colors.secondaryBackground.base};
  border-top-left-radius: ${({theme:e})=>e.global.componentRadius};
  border-bottom-left-radius: ${e=>"vertical"===e.orientation?e.theme.global.componentRadius:"0"};
  border-top-right-radius: ${e=>"vertical"===e.orientation?"0":e.theme.global.componentRadius};
  border: 1px solid ${({theme:e})=>e.colors.secondaryBackground.hover};
  position: relative;
  overflow: hidden;
  ${e=>"horizontal"===e.orientation&&styled_components_browser_esm.AH`
      @media (max-width: 767px) {
        overflow: visible;
        flex-wrap: nowrap;
      }
    `};
`,MobileTabsWrapper=styled_components_browser_esm.Ay.div`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    gap: ${({theme:e})=>e.spacing.sm};
    width: 100%;
    border-top-left-radius: ${({theme:e})=>e.global.componentRadius};
    border-top-right-radius: ${({theme:e})=>e.global.componentRadius};
    overflow: hidden;
    background: ${({theme:e})=>e.colors.background.base};
  }
`,DesktopTabsWrapper=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: ${e=>"vertical"===e.orientation?"column":"row"};
  flex: 1;

  ${e=>"horizontal"===e.orientation&&styled_components_browser_esm.AH`
      @media (max-width: 767px) {
        display: none;
      }
    `}
`,CurrentTabDisplay=styled_components_browser_esm.Ay.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: ${({theme:e})=>e.spacing.md} ${({theme:e})=>e.spacing.lg};
  color: ${({theme:e})=>e.colors.primary.active};
  font-size: 14px;
  font-weight: 500;
`,DropdownButton=styled_components_browser_esm.Ay.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing.md};
  background: transparent;
  border: 1px transparent;
  border-radius: 6px;
  cursor: pointer;
  transition: all 150ms ease-in-out;
  margin-right: 4px;

  &:hover {
    background: ${({theme:e})=>e.colors.secondaryBackground.hover};
    border-color: ${({theme:e})=>e.colors.primary.active};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 122, 204, 0.2);
  }
`,DropdownMenu=styled_components_browser_esm.Ay.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({theme:e})=>e.colors.background.base};
  border: 1px solid ${({theme:e})=>e.colors.secondaryBackground.hover};
  border-radius: 8px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  margin-top: ${({theme:e})=>e.spacing.sm};
  opacity: ${e=>e.isOpen?1:0};
  visibility: ${e=>e.isOpen?"visible":"hidden"};
  transform: ${e=>e.isOpen?"translateY(0)":"translateY(-8px)"};
  transition: all 250ms ease-in-out;
  max-height: 300px;
  overflow-y: auto;
`,DropdownItem=styled_components_browser_esm.Ay.button`
  width: 100%;
  display: flex;
  align-items: center;
  padding: ${({theme:e})=>e.spacing.sm} ${({theme:e})=>e.spacing.md};
  background: ${e=>e.isSelected?e.theme.colors.secondaryBackground.base:"transparent"};
  font-size: 14px;
  font-weight: ${e=>e.isSelected?500:400};
  border: none;
  cursor: pointer;
  transition: all 150ms ease-in-out;
  text-align: left;

  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  &:hover:not(:disabled) {
    background: ${e=>e.isSelected?e.theme.colors.secondaryBackground.base:e.theme.colors.secondaryBackground.hover};
  }

  &:focus-visible {
    outline: none;
    background: ${({theme:e})=>e.colors.secondaryBackground.hover};
    box-shadow: inset 0 0 0 2px ${({theme:e})=>e.colors.primary.active};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({theme:e})=>e.colors.secondaryBackground.active};
    opacity: 0.6;
  }
`,Tab=styled_components_browser_esm.Ay.button`
  display: flex;
  align-items: center;
  justify-content: ${e=>"vertical"===e.orientation?"flex-start":"center"};
  padding: ${({theme:e})=>`${e.spacing.sm} ${e.spacing.lg}`};
  border: none;
  background: ${e=>e.isSelected?e.theme.colors.background.base:"transparent"};
  color: ${e=>e.isSelected?e.theme.colors.primary.active:e.theme.colors.primary.base};
  font-size: 16px;
  font-weight: ${e=>e.isSelected?500:400};
  cursor: pointer;
  transition: all 150ms ease-in-out;
  white-space: nowrap;
  position: relative;

  &:hover:not(:disabled) {
    background: ${e=>e.isSelected?e.theme.colors.background.base:e.theme.colors.secondaryBackground.hover};
    color: ${e=>e.isSelected?e.theme.colors.primary.hover:e.theme.colors.primary.base};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 122, 204, 0.2);
    z-index: 1;
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
    color: ${e=>e.isSelected?e.theme.colors.primary.active:e.theme.colors.primary.base};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({theme:e})=>e.colors.textPrimary.hover};
    opacity: 0.6;
  }

  ${e=>e.isSelected&&styled_components_browser_esm.AH`
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

      &::after {
        content: '';
        position: absolute;
        ${"vertical"===e.orientation?styled_components_browser_esm.AH`
              right: 0px;
              top: 50%;
              transform: translateY(-50%);
              width: 3px;
              height: 100%;
            `:styled_components_browser_esm.AH`
              bottom: 0px;
              left: 50%;
              transform: translateX(-50%);
              height: 3px;
              width: 100%;
            `}
        background: ${({theme:e})=>e.colors.primary.active};
        border-radius: 4px;
      }
    `}
`,TabsPanels=styled_components_browser_esm.Ay.div`
  flex: 1;
  background: ${({theme:e})=>e.colors.secondaryBackground.base};
  border: 1px solid ${({theme:e})=>e.colors.secondaryBackground.hover};
  border-bottom-right-radius: ${({theme:e})=>e.global.componentRadius};
  border-top-right-radius: ${e=>"vertical"===e.orientation?e.theme.global.componentRadius:"0"};
  border-bottom-left-radius: ${e=>"vertical"===e.orientation?"0":e.theme.global.componentRadius};
`,TabPanel=styled_components_browser_esm.Ay.div`
  display: ${e=>e.isSelected?"block":"none"};
  background: ${({theme:e})=>e.colors.secondaryBackground.base};
  padding: ${({theme:e})=>e.spacing.lg};

  animation: ${e=>e.isSelected?"fadeIn 200ms ease-in-out":"none"};

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;var icons=__webpack_require__("../../packages/react/dist/icons/index.js");const TabsList_TabsList=({children:e,className:t})=>{const{orientation:r,selectedValue:o,onTabSelect:n}=useTabsContext(),s=(0,react.useRef)(null),[a,l]=(0,react.useState)(!1),[i,c]=(0,react.useState)(null),u=react.Children.toArray(e).filter((e=>react.isValidElement(e)&&e.props.value));(0,react.useEffect)((()=>{const e=u.find((e=>e.props.value===o));c(e?.props.children||null)}),[o,u]),(0,react.useEffect)((()=>{const e=s.current?.querySelector(`[data-value="${o}"]`);e&&document.activeElement?.closest('[role="tablist"]')===s.current&&e.focus()}),[o]),(0,react.useEffect)((()=>{const e=e=>{s.current&&!s.current.contains(e.target)&&l(!1)};if(a)return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)}),[a]);const p=e=>{n(e),l(!1)};return(0,jsx_runtime.jsxs)(TabsList,{ref:s,role:"tablist","aria-orientation":r,orientation:r,className:t,onKeyDown:e=>{const t=Array.from(s.current?.querySelectorAll('[role="tab"]:not([disabled])')||[]),o=t.findIndex((t=>t===e.target));if(-1===o)return;let n=o;switch(e.key){case"ArrowRight":case"ArrowDown":e.preventDefault(),n="horizontal"===r?"ArrowRight"===e.key?(o+1)%t.length:o:"ArrowDown"===e.key?(o+1)%t.length:o;break;case"ArrowLeft":case"ArrowUp":e.preventDefault(),n="horizontal"===r?"ArrowLeft"===e.key?(o-1+t.length)%t.length:o:"ArrowUp"===e.key?(o-1+t.length)%t.length:o;break;case"Home":e.preventDefault(),n=0;break;case"End":e.preventDefault(),n=t.length-1;break;case"Escape":return void(a&&(e.preventDefault(),l(!1)));default:return}n!==o&&t[n].focus()},children:["horizontal"===r&&(0,jsx_runtime.jsxs)(MobileTabsWrapper,{children:[(0,jsx_runtime.jsx)(CurrentTabDisplay,{children:i}),(0,jsx_runtime.jsx)(DropdownButton,{onClick:()=>l(!a),"aria-expanded":a,"aria-haspopup":"true","aria-label":"Show all tabs",children:(0,jsx_runtime.jsx)(icons.DownArrowIcon,{width:16,height:16,style:{transform:a?"rotate(180deg)":"rotate(0deg)",transition:"transform 150ms ease-in-out"}})}),(0,jsx_runtime.jsx)(DropdownMenu,{isOpen:a,children:u.map((e=>(0,jsx_runtime.jsx)(DropdownItem,{isSelected:e.props.value===o,disabled:e.props.disabled,onClick:()=>p(e.props.value),onKeyDown:t=>{return r=t,o=e.props.value,void("Enter"!==r.key&&" "!==r.key||(r.preventDefault(),p(o)));var r,o},children:e.props.children},e.props.value)))})]}),(0,jsx_runtime.jsx)(DesktopTabsWrapper,{orientation:r,children:e})]})},Tab_Tab=({children:e,value:t,disabled:a=!1,className:s})=>{const{selectedValue:o,onTabSelect:n,orientation:l,tabsIds:r,panelsIds:d}=useTabsContext(),i=o===t,c=r.get(t),b=d.get(t);return(0,jsx_runtime.jsx)(Tab,{id:c,role:"tab","aria-selected":i,"aria-controls":b,tabIndex:i?0:-1,"data-value":t,disabled:a,isSelected:i,orientation:l,className:s,onClick:()=>{a||n(t)},onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),a||n(t))},children:e})},TabsPanels_TabsPanels=({children:s,className:e})=>{const{orientation:t}=useTabsContext();return(0,jsx_runtime.jsx)(TabsPanels,{orientation:t,className:e,children:s})},TabPanel_TabPanel=({children:e,value:a,className:t})=>{const{selectedValue:s,tabsIds:l,panelsIds:n}=useTabsContext(),r=s===a,o=l.get(a),d=n.get(a);return(0,jsx_runtime.jsx)(TabPanel,{id:d,role:"tabpanel","aria-labelledby":o,tabIndex:0,isSelected:r,className:t,children:e})},TabItem=s=>(0,jsx_runtime.jsx)("div",{...s});var TabsOrientation,t;(t=TabsOrientation||(TabsOrientation={})).Horizontal="horizontal",t.Vertical="vertical";const Tabs=({children:e,defaultValue:a,value:t,onValueChange:s,orientation:o=TabsOrientation.Horizontal,className:n,style:r})=>{const[i,l]=(0,react.useState)(a||""),[b]=(0,react.useState)((()=>new Map)),[m]=(0,react.useState)((()=>new Map)),[c,u]=(0,react.useState)([]);(0,react.useEffect)((()=>{const a=(e,a)=>`${e}-${a}-${Math.random().toString(36).substr(2,9)}`,t=[];react.Children.forEach(e,(e=>{if(react.isValidElement(e)&&e.type===TabItem){const s=e.props,o=s.value;b.has(o)||m.has(o)||(b.set(o,a("tab",o)),m.set(o,a("panel",o)),t.push(s))}})),u(t)}),[]);const d=void 0!==t?t:i,T=e=>{void 0===t&&l(e),s?.(e)},p=(0,react.useMemo)((()=>({selectedValue:d,onTabSelect:T,orientation:o,tabsIds:b,panelsIds:m})),[d,o,b,m]);return(0,jsx_runtime.jsx)(TabsContext.Provider,{value:p,children:(0,jsx_runtime.jsxs)(TabsContainer,{orientation:o,className:n,style:r,children:[(0,jsx_runtime.jsx)(TabsList_TabsList,{children:c.map(((e,a)=>(0,jsx_runtime.jsx)(Tab_Tab,{value:e.value,disabled:e.disabled,children:e.label},`${a}-tab-button`)))}),(0,jsx_runtime.jsx)(TabsPanels_TabsPanels,{children:c.map(((e,a)=>(0,jsx_runtime.jsx)(TabPanel_TabPanel,{value:e.value,children:e.children},`${a}-tab-content`)))})]})})}}}]);
//# sourceMappingURL=8234.7120f60e.iframe.bundle.js.map
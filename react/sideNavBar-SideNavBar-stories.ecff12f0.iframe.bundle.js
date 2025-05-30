"use strict";(self.webpackChunkstorybook_react19=self.webpackChunkstorybook_react19||[]).push([[602],{"./src/sideNavBar/SideNavBar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeAndAccessibility:()=>CodeAndAccessibility,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SideNavBar_stories});var react=__webpack_require__("../../node_modules/react/index.js"),grid=__webpack_require__("../../packages/react/dist/grid/index.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function isSideNavBarUIActionItem(i){return!("items"in i)}function isSideNavBarUIExpandableGroupItem(i){return"items"in i&&"isExpanded"in i}function isSideNavBarUIFixedGroupItem(i){return"items"in i&&!("isExpanded"in i)}var styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const NavContainer=styled_components_browser_esm.Ay.nav`
  width: 300px;
  padding: 10px;
  padding-bottom: 10px;
  flex-shrink: 0;
  height: 100%;
  overflow-y: auto;
  background-color: ${({theme:e})=>e.colors.background.hover};
  border-right: ${({theme:e})=>`1px solid ${e.colors.secondaryBackground.active}`};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,PrefixContentContainer=styled_components_browser_esm.Ay.div`
  margin-left: 8px;
  margin-right: 8px;
  display: flex;
  flex-direction: column;
`,SuffixContentContainer=styled_components_browser_esm.Ay.div`
  margin-left: 8px;
  margin-right: 8px;
  display: flex;
  flex-direction: column;
`,NavList=styled_components_browser_esm.Ay.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({root:e})=>e?"0.5rem":"0"};
  flex-grow: ${({root:e})=>e?1:0};
`,NavItemWrapper=styled_components_browser_esm.Ay.li`
  display: flex;
  flex-direction: column;
  padding-left: ${({level:e})=>0===e?0:"16px"};
  background: transparent;
`,FixedGroupLabel=styled_components_browser_esm.Ay.div`
  font-size: 1rem;
  margin-left: 8px;
  margin-top: ${({isGroupRoot:e,isFirstItem:o})=>e&&!o?"1rem":"0"};
  font-weight: ${({isGroupRoot:e})=>e?"bold":"inherit"};
`,IconContainer=styled_components_browser_esm.Ay.span`
  margin-right: 8px;
`,NavExpandableButton=styled_components_browser_esm.Ay.button`
  flex-grow: 1;
  margin-top: ${({isGroupRoot:e,isFirstItem:o})=>e&&!o?"1rem":"0"};
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  background: none;
  border: none;
  padding: 8px;
  text-align: left;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: ${({isGroupRoot:e})=>e?"bold":"inherit"};
`,NavButton=styled_components_browser_esm.Ay.button`
  flex-grow: 1;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  background: ${({theme:e,selected:o})=>o?e.colors.secondaryBackground.active:"none"};
  border: none;
  padding: 8px;
  text-align: left;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background: ${({theme:e,selected:o})=>o?e.colors.secondaryBackground.active:e.colors.secondaryBackground.hover};
  }
`;var icons=__webpack_require__("../../packages/react/dist/icons/index.js");const getFirstActionablePath=(t,i=[])=>{for(const e of t){const t=[...i,e.id];if(isSideNavBarUIActionItem(e))return t;{const i=getFirstActionablePath(e.items,t);if(i)return i}}return[]},applySelectionPath=(e,t)=>{const[i,...s]=t;return e.map((e=>{if(e.id!==i)return isSideNavBarUIActionItem(e)?{...e,selected:!1}:{...e,selected:!1,items:applySelectionPath(e.items,[])};if(isSideNavBarUIActionItem(e)){const i=1===t.length;return{...e,selected:i}}return{...e,selected:!0,isExpanded:!0,items:applySelectionPath(e.items,s)}}))},getSideNavBarActionItem=(t,e)=>{if(0===e.length)return;const[i,...n]=e,r=t.find((t=>t.id===i));if(r){if(0===n.length)return r;if("items"in r)return getSideNavBarActionItem(r.items,n)}},SideNavBar=({navItems:e,applyPathSelection:i,prefixContent:n,suffixContent:t})=>{const{sideNavBarUiItems:a}=((e,t)=>{const[i,a]=(0,react.useState)([]),n=e=>{const t=(e,i)=>0===i.length?e:e.map((e=>"items"in e&&e.id===i[0]?1===i.length&&isSideNavBarUIExpandableGroupItem(e)?{...e,isExpanded:!e.isExpanded}:{...e,items:t(e.items,i.slice(1))}:e));a((i=>t(i,e)))};function o(e,t=[]){return e.map((e=>{const i=[...t,e.id];return function isGroupSideNavBarItem(i){return"items"in i}(e)?e.type&&"expandable"!==e.type?{id:e.id,name:e.name,icon:e.icon,items:o(e.items,i),onClick:()=>n(i),selected:!1,absolutePath:i.join(".")}:{id:e.id,name:e.name,icon:e.icon,items:o(e.items,i),isExpanded:!1,onClick:()=>n(i),selected:!1,absolutePath:i.join(".")}:{id:e.id,name:e.name,icon:e.icon,onClick:()=>((e,t)=>{const i=(e,t)=>e.map((e=>(e.selected=!1,"items"in e?(e.items=i(e.items,t.slice(e.id===t[0]?1:0)),e.selected=e.items.some((e=>e.selected))):e.id===t[0]&&1===t.length&&(e.selected=!0),e)));a((t=>i(t,e))),t(e)})(i,e.onClick),selected:!1,absolutePath:i.join(".")}}))}return(0,react.useEffect)((()=>{const i=o(e);let n=t?t.split("."):void 0;n||(n=getFirstActionablePath(i));const s=applySelectionPath(i,n),c=getSideNavBarActionItem(s,n);a(s),c&&isSideNavBarUIActionItem(c)&&c.onClick()}),[e]),(0,react.useEffect)((()=>{if(i.length&&t){const e=t.split("."),n=applySelectionPath(i,e),o=getSideNavBarActionItem(n,e);a(n),o&&isSideNavBarUIActionItem(o)&&o.onClick()}}),[t]),{sideNavBarUiItems:i,setSideNavBarUiItems:a}})(e,i);return(0,jsx_runtime.jsxs)(NavContainer,{children:[n&&(0,jsx_runtime.jsx)(PrefixContentContainer,{children:n}),(0,jsx_runtime.jsx)(NavList,{root:!0,children:a.map(((e,i)=>(0,jsx_runtime.jsx)(NavItemComponent,{item:e,level:0,isFirstItem:0===i},e.id)))}),t&&(0,jsx_runtime.jsx)(SuffixContentContainer,{children:t})]})},NavItemComponent=({item:e,level:i,isFirstItem:n})=>(0,jsx_runtime.jsxs)(NavItemWrapper,{level:i,showBottomMargin:isSideNavBarUIActionItem(e),expanded:!isSideNavBarUIActionItem(e)&&!!isSideNavBarUIExpandableGroupItem(e)&&e.isExpanded&&0===i,children:[isSideNavBarUIActionItem(e)&&(0,jsx_runtime.jsx)(NavButton,{id:e.absolutePath,onClick:e.onClick,selected:e.selected,children:(0,jsx_runtime.jsxs)("span",{children:[e.icon?(0,jsx_runtime.jsx)(IconContainer,{children:e.icon}):null,e.name?e.name:e.id]})}),isSideNavBarUIExpandableGroupItem(e)&&(0,jsx_runtime.jsxs)(NavExpandableButton,{isGroupRoot:0===i,isFirstItem:n,id:e.absolutePath,onClick:e.onClick,"aria-expanded":e.isExpanded,children:[(0,jsx_runtime.jsxs)("span",{children:[e.icon?(0,jsx_runtime.jsx)(IconContainer,{children:e.icon}):null,e.name?e.name:e.id]}),e.isExpanded?(0,jsx_runtime.jsx)(icons.UpArrowIcon,{width:"16px",height:"16px"}):(0,jsx_runtime.jsx)(icons.DownArrowIcon,{width:"16px",height:"16px"})]}),isSideNavBarUIExpandableGroupItem(e)&&e.isExpanded&&(0,jsx_runtime.jsx)(NavList,{children:e.items.map((e=>(0,jsx_runtime.jsx)(NavItemComponent,{item:e,level:i+1,isFirstItem:n},e.id)))}),isSideNavBarUIFixedGroupItem(e)&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(FixedGroupLabel,{isGroupRoot:0===i,isFirstItem:n,children:[e.icon?(0,jsx_runtime.jsx)(IconContainer,{children:e.icon}):null,e.name?e.name:e.id]}),(0,jsx_runtime.jsx)(NavList,{children:e.items.map((e=>(0,jsx_runtime.jsx)(NavItemComponent,{item:e,level:i+1,isFirstItem:n},e.id)))})]})]});var utils=__webpack_require__("./src/utils/index.ts");const SideNavBar_stories={title:"SideNavBar",component:grid.H,parameters:{controls:{expanded:!0}},argTypes:{navItems:{description:"An array defining the structure and content of the sidebar of type `SideNavBarItem[]`. It supports nested groups (SideNavBarGroupItem) which can be either expandable or fixed, and individual action items (SideNavBarActionItem) with click handlers.",control:!1},applyPathSelection:{description:"A path string (path id seperated by dot) that, if provided, will trigger the onClick handler of the corresponding action node upon the component's initial load. This allows for programmatic activation of a specific navigation item.",table:{defaultValue:{summary:void 0}},control:!1},prefixContent:{description:"A `ReactNode` that will be rendered above the main list of navigation items. This can be used for branding elements, user profiles, or other introductory content.",table:{defaultValue:{summary:void 0}},control:!1},suffixContent:{description:"A `ReactNode` that will be rendered below the main list of navigation items. This can be used for additional links, settings, or other supplementary information.",table:{defaultValue:{summary:void 0}},control:!1}}},description=react.createElement(react.Fragment,null,react.createElement("div",null,"This SideNavBar component provides a flexible and reusable navigation structure, capable of displaying both individual actions and collapsible or fixed groups of navigation items."),react.createElement("div",null,react.createElement("b",null,"Key features:")),react.createElement("div",{style:{marginLeft:"2rem"}},react.createElement("ul",null,react.createElement("li",null,react.createElement("b",null,"Navigation via ",react.createElement("i",null,"onClick"),":")," ","The ",react.createElement("i",null,"onClick")," handler function provided for each",react.createElement("i",null,"SideNavBarActionItem")," can be used to navigate to different pages within your application, likely utilizing the ",react.createElement("i",null,"useNavigate")," function from ",react.createElement("i",null,"react-router-dom"),"."),react.createElement("li",null,react.createElement("b",null,"Automatic Initial Selection:")," If ",react.createElement("i",null,"applyPathSelection")," is not provided, the component will automatically locate the first actionable node within the ",react.createElement("i",null,"navItems")," ","structure and execute its ",react.createElement("i",null,"onClick")," handler upon loading."),react.createElement("li",null,react.createElement("b",null,"Programmatic Activation:")," By updating the ",react.createElement("i",null,"applyPathSelection/")," prop via Controls or programmatically, users can activate different action nodes within the sidebar after the initial render.")))),CodeAndAccessibility=(args=>{const navItems=[{id:"expanded-group",name:"Expanded group",items:[{id:"expanded-group-action-item",name:"Action item",onClick:path=>{console.log(path)}},{id:"expanded-group-sub-group",name:"Sub expanded group",items:[{id:"expanded-sub-action-item",name:"Sub action item",onClick:path=>{console.log(path)}}]}]},{id:"fixed-group",name:"Fixed group",type:"fixed",items:[{id:"fixed-group-action-item",name:"Action item",onClick:path=>{console.log(path)}},{id:"fixed-group-sub-group",name:"Sub fixed group",items:[{id:"fixed-sub-action-item",name:"Sub action item",onClick:path=>{console.log(path)}}]}]},{id:"root-action-item-1",name:"Action item 1",onClick:()=>{console.log("feature")}},{id:"root-action-item-2",name:"Action item 2",onClick:()=>{console.log("feature")}}];return react.createElement(react.Fragment,null,react.createElement(utils.Tx,{importStatement:"import { SideNavBarItem, SideNavBar } from '@stripezilla/react/sideNavBar';"}),react.createElement(grid.E,{showSideMargin:!1,style:{height:"200px",overflow:"auto"}},react.createElement(grid.H,{style:{overflow:"auto"}},react.createElement(SideNavBar,{navItems,applyPathSelection:"",prefixContent:react.createElement("div",{style:{borderBottom:"1px solid gray"}},"Prefix content"),suffixContent:react.createElement("div",{style:{borderTop:"1px solid gray"}},"Suffix content")}))),react.createElement(grid.E,{style:{marginTop:"1rem",gap:"4px"}},react.createElement(grid.H,null,react.createElement("pre",{style:{fontSize:"0.8rem"}},"export type SideNavBarItem = SideNavBarActionItem | SideNavBarGroupItem;")),react.createElement(grid.H,{lg:6,md:6,sm:3},react.createElement("pre",{style:{fontSize:"0.8rem"}},"export interface SideNavBarActionItem {\n  id: string;\n  name?: string;\n  icon?: ReactNode;\n  onClick: (pathArr: string[]) => void;\n}")),react.createElement(grid.H,{lg:6,md:6,sm:3},react.createElement("pre",{style:{fontSize:"0.8rem"}},"export interface SideNavBarGroupItem {\n  id: string;\n  name?: string;\n  icon?: ReactNode;\n  type?: 'expandable' | 'fixed';\n  items: SideNavBarItem[];\n}"))),react.createElement(utils.ur,{description}))}).bind({});CodeAndAccessibility.args={};const __namedExportsOrder=["CodeAndAccessibility"];CodeAndAccessibility.parameters={...CodeAndAccessibility.parameters,docs:{...CodeAndAccessibility.parameters?.docs,source:{originalSource:"args => {\n  const navItems: SideNavBarItem[] = [{\n    id: 'expanded-group',\n    name: 'Expanded group',\n    items: [{\n      id: 'expanded-group-action-item',\n      name: 'Action item',\n      onClick: (path: string[]) => {\n        console.log(path);\n      }\n    }, {\n      id: 'expanded-group-sub-group',\n      name: 'Sub expanded group',\n      items: [{\n        id: 'expanded-sub-action-item',\n        name: 'Sub action item',\n        onClick: (path: string[]) => {\n          console.log(path);\n        }\n      }]\n    }]\n  }, {\n    id: 'fixed-group',\n    name: 'Fixed group',\n    type: 'fixed',\n    items: [{\n      id: 'fixed-group-action-item',\n      name: 'Action item',\n      onClick: (path: string[]) => {\n        console.log(path);\n      }\n    }, {\n      id: 'fixed-group-sub-group',\n      name: 'Sub fixed group',\n      items: [{\n        id: 'fixed-sub-action-item',\n        name: 'Sub action item',\n        onClick: (path: string[]) => {\n          console.log(path);\n        }\n      }]\n    }]\n  }, {\n    id: 'root-action-item-1',\n    name: 'Action item 1',\n    onClick: () => {\n      console.log('feature');\n    }\n  }, {\n    id: 'root-action-item-2',\n    name: 'Action item 2',\n    onClick: () => {\n      console.log('feature');\n    }\n  }];\n  return <>\n      <ImportBlock importStatement={importStatement} />\n      <GridContainer showSideMargin={false} style={{\n      height: '200px',\n      overflow: 'auto'\n    }}>\n        <GridColumn style={{\n        overflow: 'auto'\n      }}>\n          <SideNavBar navItems={navItems} applyPathSelection={''} prefixContent={<div style={{\n          borderBottom: '1px solid gray'\n        }}>Prefix content</div>} suffixContent={<div style={{\n          borderTop: '1px solid gray'\n        }}>Suffix content</div>} />\n        </GridColumn>\n      </GridContainer>\n      <GridContainer style={{\n      marginTop: '1rem',\n      gap: '4px'\n    }}>\n        <GridColumn>\n          <pre style={{\n          fontSize: '0.8rem'\n        }}>{`export type SideNavBarItem = SideNavBarActionItem | SideNavBarGroupItem;`}</pre>\n        </GridColumn>\n        <GridColumn lg={6} md={6} sm={3}>\n          <pre style={{\n          fontSize: '0.8rem'\n        }}>\n            {`export interface SideNavBarActionItem {\n  id: string;\n  name?: string;\n  icon?: ReactNode;\n  onClick: (pathArr: string[]) => void;\n}`}\n          </pre>\n        </GridColumn>\n        <GridColumn lg={6} md={6} sm={3}>\n          <pre style={{\n          fontSize: '0.8rem'\n        }}>\n            {`export interface SideNavBarGroupItem {\n  id: string;\n  name?: string;\n  icon?: ReactNode;\n  type?: 'expandable' | 'fixed';\n  items: SideNavBarItem[];\n}`}\n          </pre>\n        </GridColumn>\n      </GridContainer>\n      <DescriptionBlock description={description} />\n    </>;\n}",...CodeAndAccessibility.parameters?.docs?.source}}}},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bO:()=>CommentBlock,ur:()=>DescriptionBlock,Tx:()=>ImportBlock});var grid=__webpack_require__("../../packages/react/dist/grid/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const ImportBlockDiv=styled_components_browser_esm.Ay.div`
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
`}}]);
//# sourceMappingURL=sideNavBar-SideNavBar-stories.ecff12f0.iframe.bundle.js.map
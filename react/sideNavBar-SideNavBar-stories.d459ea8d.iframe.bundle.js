"use strict";(self.webpackChunkstorybook_react19=self.webpackChunkstorybook_react19||[]).push([[602],{"./src/sideNavBar/SideNavBar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeAndAccessibility:()=>CodeAndAccessibility,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SideNavBar_stories});var react=__webpack_require__("../../node_modules/react/index.js"),grid=__webpack_require__("../../packages/react/dist/grid/index.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function isSideNavBarUIActionItem(value){return!("items"in value)}function isSideNavBarUIExpandableGroupItem(value){return"items"in value&&"isExpanded"in value}var styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const NavContainer=styled_components_browser_esm.Ay.nav`
  width: 300px;
  padding: 10px;
  padding-bottom: 10px;
  flex-shrink: 0;
  height: 100%;
  overflow-y: auto;
  background-color: ${({theme})=>theme.colors.background.hover};
  border-right: ${({theme})=>`1px solid ${theme.colors.secondaryBackground.active}`};
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
  gap: ${({root})=>root?"0.5rem":"0"};
  flex-grow: ${({root})=>root?1:0};
`,NavItemWrapper=styled_components_browser_esm.Ay.li`
  display: flex;
  flex-direction: column;
  padding-left: ${({level})=>0===level?0:"16px"};
  background: transparent;
`,FixedGroupLabel=styled_components_browser_esm.Ay.div`
  font-size: 1rem;
  margin-left: 8px;
  margin-top: ${({isGroupRoot,isFirstItem})=>isGroupRoot&&!isFirstItem?"1rem":"0"};
  font-weight: ${({isGroupRoot})=>isGroupRoot?"bold":"inherit"};
`,IconContainer=styled_components_browser_esm.Ay.span`
  margin-right: 8px;
`,NavExpandableButton=styled_components_browser_esm.Ay.button`
  flex-grow: 1;
  margin-top: ${({isGroupRoot,isFirstItem})=>isGroupRoot&&!isFirstItem?"1rem":"0"};
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
  font-weight: ${({isGroupRoot})=>isGroupRoot?"bold":"inherit"};
`,NavButton=styled_components_browser_esm.Ay.button`
  flex-grow: 1;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  background: ${({theme,selected})=>selected?theme.colors.secondaryBackground.active:"none"};
  border: none;
  padding: 8px;
  text-align: left;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background: ${({theme,selected})=>selected?theme.colors.secondaryBackground.active:theme.colors.secondaryBackground.hover};
  }
`;var icons=__webpack_require__("../../packages/react/dist/icons/index.js");const getFirstActionablePath=(items,parentPath=[])=>{for(const node of items){const currentPath=[...parentPath,node.id];if(isSideNavBarUIActionItem(node))return currentPath;{const result=getFirstActionablePath(node.items,currentPath);if(result)return result}}return[]},applySelectionPath=(items,path)=>{const[currentId,...restPath]=path;return items.map((node=>{if(node.id!==currentId)return isSideNavBarUIActionItem(node)?{...node,selected:!1}:{...node,selected:!1,items:applySelectionPath(node.items,[])};if(isSideNavBarUIActionItem(node)){const isSelected=1===path.length;return{...node,selected:isSelected}}return{...node,selected:!0,isExpanded:!0,items:applySelectionPath(node.items,restPath)}}))},getSideNavBarActionItem=(items,path)=>{if(0===path.length)return;const[currentId,...restPath]=path,node=items.find((item=>item.id===currentId));if(node){if(0===restPath.length)return node;if("items"in node)return getSideNavBarActionItem(node.items,restPath)}},useSideNavBarData=(sideNavBarItems,applyPathSelection)=>{const[sideNavBarUiItems,setSideNavBarUiItems]=(0,react.useState)([]),toggleGroup=path=>{const updateItems=(items,path)=>0===path.length?items:items.map((item=>"items"in item&&item.id===path[0]?1===path.length&&isSideNavBarUIExpandableGroupItem(item)?{...item,isExpanded:!item.isExpanded}:{...item,items:updateItems(item.items,path.slice(1))}:item));setSideNavBarUiItems((prevItems=>updateItems(prevItems,path)))};function mapSideNavBarItemtoUI(sideNavBarItems,parentPath=[]){return sideNavBarItems.map((item=>{const currentPath=[...parentPath,item.id];return function isGroupSideNavBarItem(value){return"items"in value}(item)?item.type&&"expandable"!==item.type?{id:item.id,name:item.name,icon:item.icon,items:mapSideNavBarItemtoUI(item.items,currentPath),onClick:()=>toggleGroup(currentPath),selected:!1,absolutePath:currentPath.join(".")}:{id:item.id,name:item.name,icon:item.icon,items:mapSideNavBarItemtoUI(item.items,currentPath),isExpanded:!1,onClick:()=>toggleGroup(currentPath),selected:!1,absolutePath:currentPath.join(".")}:{id:item.id,name:item.name,icon:item.icon,onClick:()=>((pathArr,clickFunction)=>{const traverseAndUpdate=(items,path)=>items.map((item=>(item.selected=!1,"items"in item?(item.items=traverseAndUpdate(item.items,path.slice(item.id===path[0]?1:0)),item.selected=item.items.some((child=>child.selected))):item.id===path[0]&&1===path.length&&(item.selected=!0),item)));setSideNavBarUiItems((prevItems=>traverseAndUpdate(prevItems,pathArr))),clickFunction(pathArr)})(currentPath,item.onClick),selected:!1,absolutePath:currentPath.join(".")}}))}return(0,react.useEffect)((()=>{const navItemsArr=mapSideNavBarItemtoUI(sideNavBarItems);let firstActionablePath=applyPathSelection?applyPathSelection.split("."):void 0;firstActionablePath||(firstActionablePath=getFirstActionablePath(navItemsArr));const updatedSideNavBarItems=applySelectionPath(navItemsArr,firstActionablePath),firstSideNavBarActionItem=getSideNavBarActionItem(updatedSideNavBarItems,firstActionablePath);setSideNavBarUiItems(updatedSideNavBarItems),firstSideNavBarActionItem&&isSideNavBarUIActionItem(firstSideNavBarActionItem)&&firstSideNavBarActionItem.onClick()}),[sideNavBarItems]),(0,react.useEffect)((()=>{if(sideNavBarUiItems.length&&applyPathSelection){const nextActionablePath=applyPathSelection.split("."),updatedSideNavBarItems=applySelectionPath(sideNavBarUiItems,nextActionablePath),nextSideNavBarActionItem=getSideNavBarActionItem(updatedSideNavBarItems,nextActionablePath);setSideNavBarUiItems(updatedSideNavBarItems),nextSideNavBarActionItem&&isSideNavBarUIActionItem(nextSideNavBarActionItem)&&nextSideNavBarActionItem.onClick()}}),[applyPathSelection]),{sideNavBarUiItems,setSideNavBarUiItems}},SideNavBar=({navItems,applyPathSelection,prefixContent,suffixContent})=>{const{sideNavBarUiItems}=useSideNavBarData(navItems,applyPathSelection);return(0,jsx_runtime.jsxs)(NavContainer,{children:[prefixContent&&(0,jsx_runtime.jsx)(PrefixContentContainer,{children:prefixContent}),(0,jsx_runtime.jsx)(NavList,{root:!0,children:sideNavBarUiItems.map(((item,index)=>(0,jsx_runtime.jsx)(NavItemComponent,{item,level:0,isFirstItem:0===index},item.id)))}),suffixContent&&(0,jsx_runtime.jsx)(SuffixContentContainer,{children:suffixContent})]})},NavItemComponent=({item,level,isFirstItem})=>{return(0,jsx_runtime.jsxs)(NavItemWrapper,{level,showBottomMargin:isSideNavBarUIActionItem(item),expanded:!isSideNavBarUIActionItem(item)&&(!!isSideNavBarUIExpandableGroupItem(item)&&(item.isExpanded&&0===level)),children:[isSideNavBarUIActionItem(item)&&(0,jsx_runtime.jsx)(NavButton,{id:item.absolutePath,onClick:item.onClick,selected:item.selected,children:(0,jsx_runtime.jsxs)("span",{children:[item.icon?(0,jsx_runtime.jsx)(IconContainer,{children:item.icon}):null,item.name?item.name:item.id]})}),isSideNavBarUIExpandableGroupItem(item)&&(0,jsx_runtime.jsxs)(NavExpandableButton,{isGroupRoot:0===level,isFirstItem,id:item.absolutePath,onClick:item.onClick,"aria-expanded":item.isExpanded,children:[(0,jsx_runtime.jsxs)("span",{children:[item.icon?(0,jsx_runtime.jsx)(IconContainer,{children:item.icon}):null,item.name?item.name:item.id]}),item.isExpanded?(0,jsx_runtime.jsx)(icons.UpArrowIcon,{width:"16px",height:"16px"}):(0,jsx_runtime.jsx)(icons.DownArrowIcon,{width:"16px",height:"16px"})]}),isSideNavBarUIExpandableGroupItem(item)&&item.isExpanded&&(0,jsx_runtime.jsx)(NavList,{children:item.items.map((child=>(0,jsx_runtime.jsx)(NavItemComponent,{item:child,level:level+1,isFirstItem},child.id)))}),(value=item,"items"in value&&!("isExpanded"in value)&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(FixedGroupLabel,{isGroupRoot:0===level,isFirstItem,children:[item.icon?(0,jsx_runtime.jsx)(IconContainer,{children:item.icon}):null,item.name?item.name:item.id]}),(0,jsx_runtime.jsx)(NavList,{children:item.items.map((child=>(0,jsx_runtime.jsx)(NavItemComponent,{item:child,level:level+1,isFirstItem},child.id)))})]}))]});var value};var utils=__webpack_require__("./src/utils/index.ts");const SideNavBar_stories={title:"SideNavBar",component:grid.H,parameters:{controls:{expanded:!0}},argTypes:{navItems:{description:"An array defining the structure and content of the sidebar of type `SideNavBarItem[]`. It supports nested groups (SideNavBarGroupItem) which can be either expandable or fixed, and individual action items (SideNavBarActionItem) with click handlers.",control:!1},applyPathSelection:{description:"A path string (path id seperated by dot) that, if provided, will trigger the onClick handler of the corresponding action node upon the component's initial load. This allows for programmatic activation of a specific navigation item.",table:{defaultValue:{summary:void 0}},control:!1},prefixContent:{description:"A `ReactNode` that will be rendered above the main list of navigation items. This can be used for branding elements, user profiles, or other introductory content.",table:{defaultValue:{summary:void 0}},control:!1},suffixContent:{description:"A `ReactNode` that will be rendered below the main list of navigation items. This can be used for additional links, settings, or other supplementary information.",table:{defaultValue:{summary:void 0}},control:!1}}},description=react.createElement(react.Fragment,null,react.createElement("div",null,"This SideNavBar component provides a flexible and reusable navigation structure, capable of displaying both individual actions and collapsible or fixed groups of navigation items."),react.createElement("div",null,react.createElement("b",null,"Key features:")),react.createElement("div",{style:{marginLeft:"2rem"}},react.createElement("ul",null,react.createElement("li",null,react.createElement("b",null,"Navigation via ",react.createElement("i",null,"onClick"),":")," ","The ",react.createElement("i",null,"onClick")," handler function provided for each",react.createElement("i",null,"SideNavBarActionItem")," can be used to navigate to different pages within your application, likely utilizing the ",react.createElement("i",null,"useNavigate")," function from ",react.createElement("i",null,"react-router-dom"),"."),react.createElement("li",null,react.createElement("b",null,"Automatic Initial Selection:")," If ",react.createElement("i",null,"applyPathSelection")," is not provided, the component will automatically locate the first actionable node within the ",react.createElement("i",null,"navItems")," ","structure and execute its ",react.createElement("i",null,"onClick")," handler upon loading."),react.createElement("li",null,react.createElement("b",null,"Programmatic Activation:")," By updating the ",react.createElement("i",null,"applyPathSelection/")," prop via Controls or programmatically, users can activate different action nodes within the sidebar after the initial render.")))),CodeAndAccessibility=(args=>{const navItems=[{id:"expanded-group",name:"Expanded group",items:[{id:"expanded-group-action-item",name:"Action item",onClick:path=>{console.log(path)}},{id:"expanded-group-sub-group",name:"Sub expanded group",items:[{id:"expanded-sub-action-item",name:"Sub action item",onClick:path=>{console.log(path)}}]}]},{id:"fixed-group",name:"Fixed group",type:"fixed",items:[{id:"fixed-group-action-item",name:"Action item",onClick:path=>{console.log(path)}},{id:"fixed-group-sub-group",name:"Sub fixed group",items:[{id:"fixed-sub-action-item",name:"Sub action item",onClick:path=>{console.log(path)}}]}]},{id:"root-action-item-1",name:"Action item 1",onClick:()=>{console.log("feature")}},{id:"root-action-item-2",name:"Action item 2",onClick:()=>{console.log("feature")}}];return react.createElement(react.Fragment,null,react.createElement(utils.Tx,{importStatement:"import { SideNavBarItem, SideNavBar } from '@stripezilla/react/sideNavBar';"}),react.createElement(grid.E,{showSideMargin:!1,style:{height:"200px",overflow:"auto"}},react.createElement(grid.H,{style:{overflow:"auto"}},react.createElement(SideNavBar,{navItems,applyPathSelection:"",prefixContent:react.createElement("div",{style:{borderBottom:"1px solid gray"}},"Prefix content"),suffixContent:react.createElement("div",{style:{borderTop:"1px solid gray"}},"Suffix content")}))),react.createElement(grid.E,{style:{marginTop:"1rem",gap:"4px"}},react.createElement(grid.H,null,react.createElement("pre",{style:{fontSize:"0.8rem"}},"export type SideNavBarItem = SideNavBarActionItem | SideNavBarGroupItem;")),react.createElement(grid.H,{lg:6,md:6,sm:3},react.createElement("pre",{style:{fontSize:"0.8rem"}},"export interface SideNavBarActionItem {\n  id: string;\n  name?: string;\n  icon?: ReactNode;\n  onClick: (pathArr: string[]) => void;\n}")),react.createElement(grid.H,{lg:6,md:6,sm:3},react.createElement("pre",{style:{fontSize:"0.8rem"}},"export interface SideNavBarGroupItem {\n  id: string;\n  name?: string;\n  icon?: ReactNode;\n  type?: 'expandable' | 'fixed';\n  items: SideNavBarItem[];\n}"))),react.createElement(utils.ur,{description}))}).bind({});CodeAndAccessibility.args={};const __namedExportsOrder=["CodeAndAccessibility"];CodeAndAccessibility.parameters={...CodeAndAccessibility.parameters,docs:{...CodeAndAccessibility.parameters?.docs,source:{originalSource:"args => {\n  const navItems: SideNavBarItem[] = [{\n    id: 'expanded-group',\n    name: 'Expanded group',\n    items: [{\n      id: 'expanded-group-action-item',\n      name: 'Action item',\n      onClick: (path: string[]) => {\n        console.log(path);\n      }\n    }, {\n      id: 'expanded-group-sub-group',\n      name: 'Sub expanded group',\n      items: [{\n        id: 'expanded-sub-action-item',\n        name: 'Sub action item',\n        onClick: (path: string[]) => {\n          console.log(path);\n        }\n      }]\n    }]\n  }, {\n    id: 'fixed-group',\n    name: 'Fixed group',\n    type: 'fixed',\n    items: [{\n      id: 'fixed-group-action-item',\n      name: 'Action item',\n      onClick: (path: string[]) => {\n        console.log(path);\n      }\n    }, {\n      id: 'fixed-group-sub-group',\n      name: 'Sub fixed group',\n      items: [{\n        id: 'fixed-sub-action-item',\n        name: 'Sub action item',\n        onClick: (path: string[]) => {\n          console.log(path);\n        }\n      }]\n    }]\n  }, {\n    id: 'root-action-item-1',\n    name: 'Action item 1',\n    onClick: () => {\n      console.log('feature');\n    }\n  }, {\n    id: 'root-action-item-2',\n    name: 'Action item 2',\n    onClick: () => {\n      console.log('feature');\n    }\n  }];\n  return <>\n      <ImportBlock importStatement={importStatement} />\n      <GridContainer showSideMargin={false} style={{\n      height: '200px',\n      overflow: 'auto'\n    }}>\n        <GridColumn style={{\n        overflow: 'auto'\n      }}>\n          <SideNavBar navItems={navItems} applyPathSelection={''} prefixContent={<div style={{\n          borderBottom: '1px solid gray'\n        }}>Prefix content</div>} suffixContent={<div style={{\n          borderTop: '1px solid gray'\n        }}>Suffix content</div>} />\n        </GridColumn>\n      </GridContainer>\n      <GridContainer style={{\n      marginTop: '1rem',\n      gap: '4px'\n    }}>\n        <GridColumn>\n          <pre style={{\n          fontSize: '0.8rem'\n        }}>{`export type SideNavBarItem = SideNavBarActionItem | SideNavBarGroupItem;`}</pre>\n        </GridColumn>\n        <GridColumn lg={6} md={6} sm={3}>\n          <pre style={{\n          fontSize: '0.8rem'\n        }}>\n            {`export interface SideNavBarActionItem {\n  id: string;\n  name?: string;\n  icon?: ReactNode;\n  onClick: (pathArr: string[]) => void;\n}`}\n          </pre>\n        </GridColumn>\n        <GridColumn lg={6} md={6} sm={3}>\n          <pre style={{\n          fontSize: '0.8rem'\n        }}>\n            {`export interface SideNavBarGroupItem {\n  id: string;\n  name?: string;\n  icon?: ReactNode;\n  type?: 'expandable' | 'fixed';\n  items: SideNavBarItem[];\n}`}\n          </pre>\n        </GridColumn>\n      </GridContainer>\n      <DescriptionBlock description={description} />\n    </>;\n}",...CodeAndAccessibility.parameters?.docs?.source}}}},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bO:()=>CommentBlock,ur:()=>DescriptionBlock,Tx:()=>ImportBlock});var grid=__webpack_require__("../../packages/react/dist/grid/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const ImportBlockDiv=styled_components_browser_esm.Ay.div`
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
`}}]);
//# sourceMappingURL=sideNavBar-SideNavBar-stories.d459ea8d.iframe.bundle.js.map
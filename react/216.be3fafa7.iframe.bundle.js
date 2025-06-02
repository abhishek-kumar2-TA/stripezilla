"use strict";(self.webpackChunkstorybook_react19=self.webpackChunkstorybook_react19||[]).push([[216],{"../../packages/react/dist/button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$n:()=>Button,rl:()=>ButtonFillStyle,Mp:()=>ButtonSize,Ak:()=>ButtonVariant});var ButtonVariant,t,ButtonSize,ButtonFillStyle,styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("../../packages/react/dist/theme/utils/index.js");(t=ButtonVariant||(ButtonVariant={})).Primary="primary",t.Secondary="secondary",t.Destruct="destruct",function(t){t.Small="small",t.Default="default"}(ButtonSize||(ButtonSize={})),function(t){t.Filled="filled",t.Outline="outline",t.None="none"}(ButtonFillStyle||(ButtonFillStyle={}));const Button=styled_components_browser_esm.Ay.button`
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
`},"../../packages/react/dist/table/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>Table,CQ:()=>useInMemoryTable,gk:()=>useRemoteTable});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@tanstack/table-core/build/lib/index.mjs"),build_lib=__webpack_require__("../../node_modules/@tanstack/react-table/build/lib/index.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),formFields=__webpack_require__("../../packages/react/dist/formFields/index.js");const useInMemoryTable=e=>{const{data:o,columns:t,initialSorting:a=[],initialColumnFilters:l=[],enableRowSelection:i=!1,pageSizes:n=[]}=e,[g,s]=(0,react.useState)(a),[d,r]=(0,react.useState)(l),[c,S]=(0,react.useState)({pageIndex:0,pageSize:n[0]??10}),R=i?[{id:"select",header:({table:e})=>(0,jsx_runtime.jsx)(formFields.Sc,{id:"table-header-select",size:formFields.S9.Small,checked:e.getIsAllPageRowsSelected(),onChange:e.getToggleAllPageRowsSelectedHandler()}),cell:({row:e})=>(0,jsx_runtime.jsx)("div",{className:"px-1",children:(0,jsx_runtime.jsx)(formFields.Sc,{id:e.id,size:formFields.S9.Small,checked:e.getIsSelected(),disabled:!e.getCanSelect(),onChange:e.getToggleSelectedHandler()})})},...t]:t,w={data:o,columns:R,state:{sorting:g,columnFilters:d,pagination:c},onSortingChange:s,onColumnFiltersChange:r,onPaginationChange:S,getCoreRowModel:(0,lib.HT)(),getSortedRowModel:(0,lib.h5)(),getFilteredRowModel:(0,lib.hM)(),getPaginationRowModel:(0,lib.kW)()};return(e=>typeof e.enableRowSelection&&"function"==typeof e.onRowSelection&&"object"==typeof e.selectedRows)(e)&&(w.enableRowSelection=i,w.onRowSelectionChange=e.onRowSelection,w.state&&(w.state.rowSelection=e.selectedRows),e.getRowId&&(w.getRowId=e.getRowId)),{table:(0,build_lib.N4)(w),isLoading:!1,pageCount:Math.ceil(o.length/c.pageSize),pagination:{currentPage:c.pageIndex,currentPageSize:c.pageSize,pageSizes:n,onPageSizeSelection:e=>{const o=parseInt(e,10);if(!isNaN(o)){const e={...c};e.pageSize=o,S(e)}}},isRemote:!1}};var dist_button=__webpack_require__("../../packages/react/dist/button/index.js"),icons=__webpack_require__("../../packages/react/dist/icons/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 20px;
  font-size: 1rem;
  width: 100%;
`,SortIconContainer=styled_components_browser_esm.Ay.span`
  width: 1rem;
  height: 1rem;
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: ${({theme:e,isHidden:t})=>t?"none":`1px solid ${e.colors.secondaryBackground.active}`};
  background: ${({theme:e,isHidden:t})=>t?"transparent":`${e.colors.background.base}`};

  svg {
    width: 0.8rem;
    height: 0.8rem;
  }
`,TableWrapper=styled_components_browser_esm.Ay.div`
  width: 100%;
  overflow: auto;
`,StyledTable=styled_components_browser_esm.Ay.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 0.75rem;
    text-align: left;
  }

  th {
    background-color: ${({theme:e})=>e.colors.secondaryBackground.base};
    font-weight: bold;
    user-select: none;

    &:first-child {
      border-top-left-radius: ${({theme:e})=>e.global.componentRadius};
    }

    &:last-child {
      border-top-right-radius: ${({theme:e})=>e.global.componentRadius};
    }
  }

  tbody {
    tr {
      border-top: 2px solid ${({theme:e})=>e.colors.secondaryBackground.active};
    }
  }
`,HeaderCell=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`,PaginationControls=styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: space-between;
`,RowsPerPageContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  gap: 10px;

  > div {
    width: inherit;
    min-width: 50px;
  }
`,PageIndexContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,Loading=styled_components_browser_esm.Ay.div`
  text-align: center;
  padding: 2rem;
  font-size: 1.25rem;
`,Table=e=>{const{id:n,table:o,isLoading:t,pagination:r,isRemote:l,pageCount:a}=e,i=r.currentPage,s=0===i,d=i+1>=a,c=(0,react.useMemo)((()=>r.pageSizes.map((e=>({value:e.toString(),label:e.toString()})))),[]);return(0,jsx_runtime.jsxs)(Container,{children:[t?(0,jsx_runtime.jsx)(Loading,{children:"Loading..."}):(0,jsx_runtime.jsx)(TableWrapper,{children:(0,jsx_runtime.jsxs)(StyledTable,{children:[(0,jsx_runtime.jsx)("thead",{children:o.getHeaderGroups().map((e=>(0,jsx_runtime.jsx)("tr",{children:e.headers.map((e=>{const n=e.column.getCanSort();return(0,jsx_runtime.jsx)("th",{onClick:n?e.column.getToggleSortingHandler():void 0,style:{cursor:n?"pointer":"default"},children:e.isPlaceholder?null:(0,jsx_runtime.jsxs)(HeaderCell,{children:[(0,build_lib.Kv)(e.column.columnDef.header,e.getContext()),n&&({asc:(0,jsx_runtime.jsx)(SortIconContainer,{children:(0,jsx_runtime.jsx)(icons.UpArrowIcon,{})}),desc:(0,jsx_runtime.jsx)(SortIconContainer,{children:(0,jsx_runtime.jsx)(icons.DownArrowIcon,{})})}[e.column.getIsSorted()]??(0,jsx_runtime.jsx)(SortIconContainer,{isHidden:!0}))]})},e.id)}))},e.id)))}),(0,jsx_runtime.jsx)("tbody",{children:o.getRowModel().rows.map((e=>(0,jsx_runtime.jsx)("tr",{children:e.getVisibleCells().map((e=>(0,jsx_runtime.jsx)("td",{children:(0,build_lib.Kv)(e.column.columnDef.cell,e.getContext())},e.id)))},e.id)))})]})}),(0,jsx_runtime.jsxs)(PaginationControls,{children:[(0,jsx_runtime.jsx)(RowsPerPageContainer,{children:!!c.length&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("label",{htmlFor:`table-${n}`,children:"Rows per page"}),(0,jsx_runtime.jsx)(formFields.l6,{id:`table-${n}`,size:formFields.S9.Small,value:r.currentPageSize.toString(),options:c,onChangeHandler:r.onPageSizeSelection})]})}),(0,jsx_runtime.jsxs)(PageIndexContainer,{children:[(0,jsx_runtime.jsx)(dist_button.$n,{id:"previous-table-page",size:dist_button.Mp.Small,fill:dist_button.rl.None,onClick:()=>{l?!s&&r.onPageIndexSelection&&r.onPageIndexSelection(i-1):o.previousPage()},disabled:l?s:!o.getCanPreviousPage(),iconOnly:!0,"aria-label":"go to previous page",children:(0,jsx_runtime.jsx)(icons.LessThanIcon,{})}),(0,jsx_runtime.jsxs)("span",{children:["Page ",i+1," of ",a]}),(0,jsx_runtime.jsx)(dist_button.$n,{id:"next-table-page",size:dist_button.Mp.Small,fill:dist_button.rl.None,onClick:()=>{l?!d&&r.onPageIndexSelection&&r.onPageIndexSelection(i+1):o.nextPage()},disabled:l?d:!o.getCanNextPage(),iconOnly:!0,"aria-label":"go to next page",children:(0,jsx_runtime.jsx)(icons.GreaterThanIcon,{})})]})]})]})},useRemoteTable=e=>{const{baseUrl:t,columns:a,fetchData:o,generateFetchUrl:n,filterState:i=[],initialSorting:s=[],enableRowSelection:l=!1,pageSizes:c=[]}=e,[r,g]=(0,react.useState)(s),[d,S]=(0,react.useState)({pageIndex:0,pageSize:c[0]??10}),[p,R]=(0,react.useState)([]),[u,w]=(0,react.useState)(0),[m,f]=(0,react.useState)(!1);(0,react.useEffect)((()=>{(async()=>{const e=n?t+n(d,i,r):(()=>{const e=new URLSearchParams;return e.append("page",(d.pageIndex+1).toString()),e.append("pageSize",d.pageSize.toString()),r.forEach((t=>{e.append("sortBy",t.id),e.append("sortOrder",t.desc?"desc":"asc")})),i.forEach((t=>{void 0!==t.value&&""!==t.value&&e.append(t.key,String(t.value))})),`${t}?${e.toString()}`})();f(!0);const a=await o(e);R(a.data),w(a.totalRows),f(!1)})()}),[d.pageIndex,d.pageSize,JSON.stringify(r),JSON.stringify(i),t]);const x=l?[{id:"select",header:({table:e})=>(0,jsx_runtime.jsx)(formFields.Sc,{id:"table-header-select",size:formFields.S9.Small,checked:e.getIsAllPageRowsSelected(),onChange:e.getToggleAllPageRowsSelectedHandler()}),cell:({row:e})=>(0,jsx_runtime.jsx)("div",{className:"px-1",children:(0,jsx_runtime.jsx)(formFields.Sc,{id:e.id,size:formFields.S9.Small,checked:e.getIsSelected(),disabled:!e.getCanSelect(),onChange:e.getToggleSelectedHandler()})})},...a]:a,h={data:p,columns:x,state:{sorting:r,pagination:d},onSortingChange:g,getCoreRowModel:(0,lib.HT)()};return(e=>typeof e.enableRowSelection&&"function"==typeof e.onRowSelection&&"object"==typeof e.selectedRows)(e)&&(h.enableRowSelection=l,h.onRowSelectionChange=e.onRowSelection,h.state={...h.state,rowSelection:e.selectedRows},h.getRowId=e.getRowId),{table:(0,build_lib.N4)(h),isLoading:m,pageCount:Math.ceil(u/d.pageSize),pagination:{currentPage:d.pageIndex,currentPageSize:d.pageSize,pageSizes:c,onPageSizeSelection:e=>{const t=parseInt(e,10);isNaN(t)||S({pageIndex:0,pageSize:t})},onPageIndexSelection:e=>{const t={...d};t.pageIndex=e,S(t)}},isRemote:!0}}}}]);
//# sourceMappingURL=216.be3fafa7.iframe.bundle.js.map
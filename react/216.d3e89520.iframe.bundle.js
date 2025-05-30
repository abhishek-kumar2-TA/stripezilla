"use strict";(self.webpackChunkstorybook_react19=self.webpackChunkstorybook_react19||[]).push([[216],{"../../packages/react/dist/button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$n:()=>Button,rl:()=>ButtonFillStyle,Mp:()=>ButtonSize,Ak:()=>ButtonVariant});var ButtonVariant,ButtonSize,ButtonFillStyle,styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),utils=__webpack_require__("../../packages/react/dist/theme/utils/index.js");!function(ButtonVariant){ButtonVariant.Primary="primary",ButtonVariant.Secondary="secondary",ButtonVariant.Destruct="destruct"}(ButtonVariant||(ButtonVariant={})),function(ButtonSize){ButtonSize.Small="small",ButtonSize.Default="default"}(ButtonSize||(ButtonSize={})),function(ButtonFillStyle){ButtonFillStyle.Filled="filled",ButtonFillStyle.Outline="outline",ButtonFillStyle.None="none"}(ButtonFillStyle||(ButtonFillStyle={}));const Button=styled_components_browser_esm.Ay.button`
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
`},"../../packages/react/dist/table/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>Table,CQ:()=>useInMemoryTable,gk:()=>useRemoteTable});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@tanstack/table-core/build/lib/index.mjs"),build_lib=__webpack_require__("../../node_modules/@tanstack/react-table/build/lib/index.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),formFields=__webpack_require__("../../packages/react/dist/formFields/index.js");const useInMemoryTable=props=>{const{data,columns,initialSorting=[],initialColumnFilters=[],enableRowSelection=!1,pageSizes=[]}=props,[sorting,setSorting]=(0,react.useState)(initialSorting),[columnFilters,setColumnFilters]=(0,react.useState)(initialColumnFilters),[pagination,setPagination]=(0,react.useState)({pageIndex:0,pageSize:pageSizes[0]??10}),formattedColumns=enableRowSelection?[{id:"select",header:({table})=>(0,jsx_runtime.jsx)(formFields.Sc,{id:"table-header-select",size:formFields.S9.Small,checked:table.getIsAllPageRowsSelected(),onChange:table.getToggleAllPageRowsSelectedHandler()}),cell:({row})=>(0,jsx_runtime.jsx)("div",{className:"px-1",children:(0,jsx_runtime.jsx)(formFields.Sc,{id:row.id,size:formFields.S9.Small,checked:row.getIsSelected(),disabled:!row.getCanSelect(),onChange:row.getToggleSelectedHandler()})})},...columns]:columns,options={data,columns:formattedColumns,state:{sorting,columnFilters,pagination},onSortingChange:setSorting,onColumnFiltersChange:setColumnFilters,onPaginationChange:setPagination,getCoreRowModel:(0,lib.HT)(),getSortedRowModel:(0,lib.h5)(),getFilteredRowModel:(0,lib.hM)(),getPaginationRowModel:(0,lib.kW)()};(props=>typeof props.enableRowSelection&&"function"==typeof props.onRowSelection&&"object"==typeof props.selectedRows)(props)&&(options.enableRowSelection=enableRowSelection,options.onRowSelectionChange=props.onRowSelection,options.state&&(options.state.rowSelection=props.selectedRows),props.getRowId&&(options.getRowId=props.getRowId));return{table:(0,build_lib.N4)(options),isLoading:!1,pageCount:Math.ceil(data.length/pagination.pageSize),pagination:{currentPage:pagination.pageIndex,currentPageSize:pagination.pageSize,pageSizes,onPageSizeSelection:value=>{const selectedPageSize=parseInt(value,10);if(!isNaN(selectedPageSize)){const tempPagination={...pagination};tempPagination.pageSize=selectedPageSize,setPagination(tempPagination)}}},isRemote:!1}};var dist_button=__webpack_require__("../../packages/react/dist/button/index.js"),icons=__webpack_require__("../../packages/react/dist/icons/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const Container=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 20px;
  font-size: 1rem;
`,SortIconContainer=styled_components_browser_esm.Ay.span`
  width: 1rem;
  height: 1rem;
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: ${({theme,isHidden})=>isHidden?"none":`1px solid ${theme.colors.secondaryBackground.active}`};
  background: ${({theme,isHidden})=>isHidden?"transparent":`${theme.colors.background.base}`};

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
    background-color: ${({theme})=>theme.colors.secondaryBackground.base};
    font-weight: bold;
    user-select: none;

    &:first-child {
      border-top-left-radius: ${({theme})=>theme.global.componentRadius};
    }

    &:last-child {
      border-top-right-radius: ${({theme})=>theme.global.componentRadius};
    }
  }

  tbody {
    tr {
      border-top: 2px solid ${({theme})=>theme.colors.secondaryBackground.active};
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
`,Table=props=>{const{id,table,isLoading,pagination,isRemote,pageCount}=props,currentPage=pagination.currentPage,isFirstPage=0===currentPage,isLastPage=currentPage+1>=pageCount,rowsPerPageOptions=(0,react.useMemo)((()=>pagination.pageSizes.map((pageSize=>({value:pageSize.toString(),label:pageSize.toString()})))),[]);return(0,jsx_runtime.jsxs)(Container,{children:[isLoading?(0,jsx_runtime.jsx)(Loading,{children:"Loading..."}):(0,jsx_runtime.jsx)(TableWrapper,{children:(0,jsx_runtime.jsxs)(StyledTable,{children:[(0,jsx_runtime.jsx)("thead",{children:table.getHeaderGroups().map((headerGroup=>(0,jsx_runtime.jsx)("tr",{children:headerGroup.headers.map((header=>{const canSort=header.column.getCanSort();return(0,jsx_runtime.jsx)("th",{onClick:canSort?header.column.getToggleSortingHandler():void 0,style:{cursor:canSort?"pointer":"default"},children:header.isPlaceholder?null:(0,jsx_runtime.jsxs)(HeaderCell,{children:[(0,build_lib.Kv)(header.column.columnDef.header,header.getContext()),canSort&&({asc:(0,jsx_runtime.jsx)(SortIconContainer,{children:(0,jsx_runtime.jsx)(icons.UpArrowIcon,{})}),desc:(0,jsx_runtime.jsx)(SortIconContainer,{children:(0,jsx_runtime.jsx)(icons.DownArrowIcon,{})})}[header.column.getIsSorted()]??(0,jsx_runtime.jsx)(SortIconContainer,{isHidden:!0}))]})},header.id)}))},headerGroup.id)))}),(0,jsx_runtime.jsx)("tbody",{children:table.getRowModel().rows.map((row=>(0,jsx_runtime.jsx)("tr",{children:row.getVisibleCells().map((cell=>(0,jsx_runtime.jsx)("td",{children:(0,build_lib.Kv)(cell.column.columnDef.cell,cell.getContext())},cell.id)))},row.id)))})]})}),(0,jsx_runtime.jsxs)(PaginationControls,{children:[(0,jsx_runtime.jsx)(RowsPerPageContainer,{children:!!rowsPerPageOptions.length&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("label",{htmlFor:`table-${id}`,children:"Rows per page"}),(0,jsx_runtime.jsx)(formFields.l6,{id:`table-${id}`,size:formFields.S9.Small,value:pagination.currentPageSize.toString(),options:rowsPerPageOptions,onChangeHandler:pagination.onPageSizeSelection})]})}),(0,jsx_runtime.jsxs)(PageIndexContainer,{children:[(0,jsx_runtime.jsx)(dist_button.$n,{id:"previous-table-page",size:dist_button.Mp.Small,fill:dist_button.rl.None,onClick:()=>{isRemote?!isFirstPage&&pagination.onPageIndexSelection&&pagination.onPageIndexSelection(currentPage-1):table.previousPage()},disabled:isRemote?isFirstPage:!table.getCanPreviousPage(),iconOnly:!0,"aria-label":"go to previous page",children:(0,jsx_runtime.jsx)(icons.LessThanIcon,{})}),(0,jsx_runtime.jsxs)("span",{children:["Page ",currentPage+1," of ",pageCount]}),(0,jsx_runtime.jsx)(dist_button.$n,{id:"next-table-page",size:dist_button.Mp.Small,fill:dist_button.rl.None,onClick:()=>{isRemote?!isLastPage&&pagination.onPageIndexSelection&&pagination.onPageIndexSelection(currentPage+1):table.nextPage()},disabled:isRemote?isLastPage:!table.getCanNextPage(),iconOnly:!0,"aria-label":"go to next page",children:(0,jsx_runtime.jsx)(icons.GreaterThanIcon,{})})]})]})]})},useRemoteTable=props=>{const{baseUrl,columns,fetchData,generateFetchUrl,filterState=[],initialSorting=[],enableRowSelection=!1,pageSizes=[]}=props,[sorting,setSorting]=(0,react.useState)(initialSorting),[pagination,setPagination]=(0,react.useState)({pageIndex:0,pageSize:pageSizes[0]??10}),[data,setData]=(0,react.useState)([]),[totalRows,setTotalRows]=(0,react.useState)(0),[isLoading,setIsLoading]=(0,react.useState)(!1);(0,react.useEffect)((()=>{(async()=>{const url=generateFetchUrl?baseUrl+generateFetchUrl(pagination,filterState,sorting):(()=>{const params=new URLSearchParams;return params.append("page",(pagination.pageIndex+1).toString()),params.append("pageSize",pagination.pageSize.toString()),sorting.forEach((sort=>{params.append("sortBy",sort.id),params.append("sortOrder",sort.desc?"desc":"asc")})),filterState.forEach((filter=>{void 0!==filter.value&&""!==filter.value&&params.append(filter.key,String(filter.value))})),`${baseUrl}?${params.toString()}`})();setIsLoading(!0);const result=await fetchData(url);setData(result.data),setTotalRows(result.totalRows),setIsLoading(!1)})()}),[pagination.pageIndex,pagination.pageSize,JSON.stringify(sorting),JSON.stringify(filterState),baseUrl]);const formattedColumns=enableRowSelection?[{id:"select",header:({table})=>(0,jsx_runtime.jsx)(formFields.Sc,{id:"table-header-select",size:formFields.S9.Small,checked:table.getIsAllPageRowsSelected(),onChange:table.getToggleAllPageRowsSelectedHandler()}),cell:({row})=>(0,jsx_runtime.jsx)("div",{className:"px-1",children:(0,jsx_runtime.jsx)(formFields.Sc,{id:row.id,size:formFields.S9.Small,checked:row.getIsSelected(),disabled:!row.getCanSelect(),onChange:row.getToggleSelectedHandler()})})},...columns]:columns,options={data,columns:formattedColumns,state:{sorting,pagination},onSortingChange:setSorting,getCoreRowModel:(0,lib.HT)()};(props=>typeof props.enableRowSelection&&"function"==typeof props.onRowSelection&&"object"==typeof props.selectedRows)(props)&&(options.enableRowSelection=enableRowSelection,options.onRowSelectionChange=props.onRowSelection,options.state={...options.state,rowSelection:props.selectedRows},options.getRowId=props.getRowId);return{table:(0,build_lib.N4)(options),isLoading,pageCount:Math.ceil(totalRows/pagination.pageSize),pagination:{currentPage:pagination.pageIndex,currentPageSize:pagination.pageSize,pageSizes,onPageSizeSelection:value=>{const pageSize=parseInt(value,10);isNaN(pageSize)||setPagination({pageIndex:0,pageSize})},onPageIndexSelection:value=>{const tempPagination={...pagination};tempPagination.pageIndex=value,setPagination(tempPagination)}},isRemote:!0}}}}]);
//# sourceMappingURL=216.d3e89520.iframe.bundle.js.map
import { useMemo, useEffect, useState } from "react";

// react-table components
import { useTable, usePagination, useGlobalFilter, useAsyncDebounce, useSortBy } from "react-table";

// @mui material components
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Icon from "@mui/material/Icon";
import Autocomplete from "@mui/material/Autocomplete";
import Link from "@mui/material/Link";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDPagination from "components/MDPagination";
import MDButton from "components/MDButton";


// Material Dashboard 2 PRO React TS examples components
import DataTableHeadCell from "rnrComponents/sharedComponent/RnrDataTable/DataTableHeadCell";
import DataTableBodyCell from "rnrComponents/sharedComponent/RnrDataTable/DataTableBodyCell";
import colors from "assets/theme/base/colors";
import { useMaterialUIController } from "context";
import { info } from "console";

// Declaring props types for DataTable
interface Props {
  entriesPerPage?:
    | false
    | {
        defaultValue: number;
        entries: number[];
      };
  canSearch?: boolean;
  showTotalEntries?: boolean;
  table: {
    columns: { [key: string]: any }[];
    rows?: { [key: string]: any }[];
  };
  pagination?: {
    variant: "contained" | "gradient";
    color: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "dark" | "light";
  };
  isSorted?: boolean;
  noEndBorder?: boolean;
  searchByChar?: boolean;
  searchByCol?:boolean;
  bgColor?: string;
  onRowEdit?(obj: any):any;  
  onRowDelete?(obj: any):any;
  onRowDetails?(obj: any):any;
  onRowLogs?(obj: any):any;
  actionColumn?: boolean;
  addRow: boolean;
}

function RnrDataTable({
  entriesPerPage,
  canSearch,
  showTotalEntries,
  table,
  pagination,
  isSorted,
  noEndBorder,
  searchByChar,
  searchByCol,
  bgColor,
  onRowEdit,
  onRowDelete,
  onRowDetails,
  onRowLogs,
  actionColumn,
  addRow
}: Props): JSX.Element {
  let defaultValue: any;
  let entries: any[];

  if (entriesPerPage) {
    defaultValue = entriesPerPage.defaultValue ? entriesPerPage.defaultValue : "10";
    entries = entriesPerPage.entries ? entriesPerPage.entries : ["10", "25", "50", "100"];
  }
 
  const [colValue, setColValue] = useState<any>();
  const columnsData = useMemo<any>(() => table.columns, [table]);
  const data = useMemo<any>(() => table.rows, [table]);
  const [columns, setColumns] = useState([...columnsData]);
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const { info } = colors;

  const tableInstance = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    pageOptions,
    canPreviousPage,
    canNextPage,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setGlobalFilter,
    state: { pageIndex, pageSize, globalFilter },
  }: any = tableInstance;

  // Set the default value for the entries per page when component mounts
  useEffect(() => setPageSize(defaultValue || 10), [defaultValue]);

  useEffect(() => {
    if(colValue) {
        const tempArr = columns.map( (item : any) => {
          if(item.Header !== colValue) {
            item.disableGlobalFilter = true;
          } else {
            item.disableGlobalFilter = false
          }
          return item;
      })
      setColumns([...tempArr]);
    } else {
      const tempArr = columns.map( (item : any) => { 
        item.disableGlobalFilter = false;
        return item;
      })
      setColumns([...tempArr]);
    }
  },[colValue])

  // Set the entries per page value based on the select value
  const setEntriesPerPage = (value: any) => setPageSize(value);


  // Render the paginations
  const renderPagination = pageOptions.map((option: any) => (
    <MDPagination
      item
      key={option}
      onClick={() => gotoPage(Number(option))}
      active={pageIndex === option}
    >
      {option + 1}
    </MDPagination>
  ));

  const renderAlphabet = () => {
    let i, letters = [];

    for (i = 65; i <= 90; i++) {
        letters.push(<MDButton  sx={{minWidth:"auto"}} onClick={(event) => handleBtnClick(event)} size="small">{String.fromCharCode(i)}</MDButton>)
    }
    return letters;
  }

  const handleBtnClick = (e: any) => {
    let char = e.target.innerText.toLowerCase();
    setGlobalFilter(char || undefined);
  }

  // Handler for the input to set the pagination index
  const handleInputPagination = ({ target: { value } }: any) =>
    value > pageOptions.length || value < 0 ? gotoPage(0) : gotoPage(Number(value));

  // Customized page options starting from 1
  const customizedPageOptions = pageOptions.map((option: any) => option + 1);

  // Setting value for the pagination input
  const handleInputPaginationValue = ({ target: value }: any) => gotoPage(Number(value.value - 1));

  // Search input value state
  const [search, setSearch] = useState(globalFilter);

  // Search input state handle
  const onSearchChange = useAsyncDebounce((value: any) => {
    setGlobalFilter(value || undefined);
  }, 100);

  // A function that sets the sorted value for the table
  const setSortedValue = (column: any) => {
    let sortedValue;

    if (isSorted && column.isSorted) {
      sortedValue = column.isSortedDesc ? "desc" : "asce";
    } else if (isSorted) {
      sortedValue = "none";
    } else {
      sortedValue = false;
    }

    return sortedValue;
  };

  // Setting the entries starting point
  const entriesStart = pageIndex === 0 ? pageIndex + 1 : pageIndex * pageSize + 1;

  // Setting the entries ending point
  let entriesEnd;

  if (pageIndex === 0) {
    entriesEnd = pageSize;
  } else if (pageIndex === pageOptions.length - 1) {
    entriesEnd = rows.length;
  } else {
    entriesEnd = pageSize * (pageIndex + 1);
  }

  return (
    <TableContainer sx={{ boxShadow: "none" }}>
      {entriesPerPage || canSearch ? (
        <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
          {entriesPerPage && (
            <MDBox display="flex" alignItems="center">
              <Autocomplete
                disableClearable
                value={pageSize.toString()}
                options={entries}
                onChange={(event, newValue) => {
                  setEntriesPerPage(parseInt(newValue, 10));
                }}
                size="small"
                sx={{ width: "5rem" }}
                renderInput={(params) => <MDInput {...params} />}
              />
              <MDTypography variant="caption" color="secondary">
                &nbsp;&nbsp;entries per page
              </MDTypography>
            </MDBox>
          )}
          {
            searchByCol && (
              <MDBox display="flex" alignItems="center" ml="2rem">
              <MDTypography variant="caption" color="secondary">
                Search By :&nbsp;&nbsp;&nbsp; 
              </MDTypography>
              <Autocomplete
                defaultValue=""
                value={colValue}
                options={columns}
                getOptionLabel={(option: any) => option?.Header || option}
                onChange={(event, newValue : any) => {
                  setColValue(newValue ? newValue.Header : '');
                }}
                size="small"
                sx={{ width: "10rem" }}
                renderInput={(params) => <MDInput {...params} />}
              />
            </MDBox>
            
            )
          }
          {canSearch && (
            <MDBox width="12rem" ml="auto">
              <MDInput
                placeholder="Search..."
                value={search}
                size="small"
                fullWidth
                onChange={({ currentTarget }: any) => {
                  setSearch(search);
                  onSearchChange(currentTarget.value);
                }}
              />
            </MDBox>
          )}
          {addRow && (
            <MDBox width="12rem" ml="auto">
              <MDButton variant="gradient" color="info"
            
            >
              <Icon>add</Icon>&nbsp;
              Add New Record
            </MDButton>
            </MDBox>
          )}
        </MDBox>
      ) : null}
      {
        searchByChar && (
          <MDBox my={3} px={1} component="div">
            {renderAlphabet()}
          </MDBox>
        )
      }
      <Table {...getTableProps()}>
        <MDBox component="thead"  bgColor={ darkMode ? "inherit" : info.main}>
          {headerGroups.map((headerGroup: any, key: any) => (
            <TableRow key={key} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any, key: any) => (
                <DataTableHeadCell
                  key={key}
                  {...column.getHeaderProps(isSorted && column.getSortByToggleProps())}
                  width={column.width ? column.width : "auto"}
                  align={column.align ? column.align : "left"}
                  sorted={setSortedValue(column)}
                  
                >
                  {column.render("Header")}
                </DataTableHeadCell>
              ))}
              <DataTableHeadCell width={"10%"}>Action</DataTableHeadCell>
            </TableRow>
          ))}
        </MDBox>
        <TableBody {...getTableBodyProps()}>
          {page.map((row: any, key: any) => {
            prepareRow(row);
            return (
              <TableRow key={key} {...row.getRowProps()}>
                {row.cells.map((cell: any, key: any) => (
                  <DataTableBodyCell
                    key={key}
                    noBorder={noEndBorder && rows.length - 1 === key}
                    align={cell.column.align ? cell.column.align : "left"}
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                  </DataTableBodyCell>
                ))}
                {actionColumn && (
                  <DataTableBodyCell>
                  <Link component="button" variant="body2" underline="none" onClick={() => onRowEdit(row.original)}>
                    <Icon fontSize={"small"} title="Edit">edit</Icon>
                  </Link>
                  <Link component="button" variant="body2" underline="none" onClick={() => onRowDelete(row.original)}>
                    <Icon fontSize={"small"} title="Delete">delete</Icon>
                  </Link>
                  <Link component="button" variant="body2" underline="none" onClick={() => onRowDetails(row.original)}>
                    <Icon fontSize={"small"} title="View Details">preview</Icon>
                  </Link>
                  <Link component="button" variant="body2" underline="none" onClick={() => onRowLogs(row.original)}>
                    <Icon fontSize={"small"} title="Edit Info">info</Icon>
                  </Link>
                </DataTableBodyCell>
                )}
                
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <MDBox
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        p={!showTotalEntries && pageOptions.length === 1 ? 0 : 3}
      >
        {showTotalEntries && (
          <MDBox mb={{ xs: 3, sm: 0 }}>
            <MDTypography variant="button" color="secondary" fontWeight="regular">
              Showing {entriesStart} to {entriesEnd} of {rows.length} entries
            </MDTypography>
          </MDBox>
        )}
        {pageOptions.length > 1 && (
          <MDPagination
            variant={pagination.variant ? pagination.variant : "gradient"}
            color={pagination.color ? pagination.color : "info"}
          >
            {canPreviousPage && (
              <MDPagination item onClick={() => previousPage()}>
                <Icon sx={{ fontWeight: "bold" }}>chevron_left</Icon>
              </MDPagination>
            )}
            {renderPagination.length > 6 ? (
              <MDBox width="5rem" mx={1}>
                <MDInput
                  inputProps={{ type: "number", min: 1, max: customizedPageOptions.length }}
                  value={customizedPageOptions[pageIndex]}
                  onChange={(event: any) => {
                    handleInputPagination(event);
                    handleInputPaginationValue(event);
                  }}
                />
              </MDBox>
            ) : (
              renderPagination
            )}
            {canNextPage && (
              <MDPagination item onClick={() => nextPage()}>
                <Icon sx={{ fontWeight: "bold" }}>chevron_right</Icon>
              </MDPagination>
            )}
          </MDPagination>
        )}
      </MDBox>
    </TableContainer>
  );
}

// Declaring default props for DataTable
RnrDataTable.defaultProps = {
  entriesPerPage: { defaultValue: 10, entries: ["5", "10", "15", "20", "25"] },
  canSearch: false,
  actionColum: false,
  showTotalEntries: true,
  pagination: { variant: "gradient", color: "info" },
  isSorted: true,
  noEndBorder: false,
  bgColor: "inherit",
  addRow: false
};

export default RnrDataTable;

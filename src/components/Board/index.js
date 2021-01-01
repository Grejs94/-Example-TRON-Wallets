import React from "react";
import { useSelector } from "react-redux";
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
} from "react-table";
import { matchSorter } from "match-sorter";
import TextField from "@material-ui/core/TextField";

import { selectWalletsAll } from "features/wallets/walletsSlice";

import makeData from "./components/makeData";
import { Styles, useStyles } from "./styles";

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const classes = useStyles();

  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  const handleOnChange = (e) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <span>
      <TextField
        value={value || ""}
        onChange={handleOnChange}
        placeholder={`filter wallets`}
        className={classes.margin}
      />
    </span>
  );
}

function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  return (
    <TextField
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      placeholder={`filter wallets`}
    />
  );
}

function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });
}

fuzzyTextFilterFn.autoRemove = (val) => !val;

function Table({ columns, data }) {
  const filterTypes = React.useMemo(
    () => ({
      fuzzyText: fuzzyTextFilterFn,
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );

  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      filterTypes,
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  const firstPageRows = rows.slice(0, 100);

  return (
    <>
      <table {...getTableProps()} style={{ padding: "0px" }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
          <tr>
            <th
              colSpan={visibleColumns.length}
              style={{
                textAlign: "left",
              }}
            >
              <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            </th>
          </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

function filterGreaterThan(rows, id, filterValue) {
  return rows.filter((row) => {
    const rowValue = row.values[id];
    return rowValue >= filterValue;
  });
}

filterGreaterThan.autoRemove = (val) => typeof val !== "number";

const Board = () => {
  const walletsAll = useSelector(selectWalletsAll);

  const wallets =
    walletsAll.sorted.length > 0
      ? walletsAll.sorted
      : walletsAll.filterStatus
      ? walletsAll.filter
      : walletsAll.data;

  const columns = React.useMemo(
    () => [
      {
        Header: "Address",
        accessor: "address",
        filter: "fuzzyText",
      },
      {
        Header: "Balance",
        accessor: "balance",
      },
      {
        Header: "Create time",
        accessor: "create_time",
      },
      {
        Header: "L. opr. time",
        accessor: "latest_opration_time",
      },
    ],
    []
  );

  const data = React.useMemo(() => makeData(wallets), [wallets]);

  return (
    <>
      {data.length > 0 && (
        <Styles.StyledContainer>
          <Table columns={columns} data={data} />
        </Styles.StyledContainer>
      )}
    </>
  );
};

export default Board;

import React from "react";
import { useSelector } from "react-redux";
import { useTable } from "react-table";

import makeData from "./components/makeData";
import {
  setSortedData,
  selectWalletsAll,
  setFilterStatusTrue,
  setFilterStatusFalse,
  setFilterData,
} from "features/wallets/walletsSlice";
import { checkSingleStatus } from "utilis/checkSingleStatus";

const Board_new = () => {
  const walletsAll = useSelector(selectWalletsAll);

  const dataStatus = checkSingleStatus(walletsAll.status);

  const WorkingData =
    walletsAll.sorted.length > 0
      ? walletsAll.sorted
      : walletsAll.filterStatus
      ? walletsAll.filter
      : walletsAll.data;

  const dataNew = () =>
    WorkingData.map((item) => ({
      address: `${item.address ? item.address : "unnown"}`,
      balance: `${item.balance ? item.balance : "unnown"}`,
      create_time: `${item.create_time ? item.create_time : "unnown"}`,
      latest_opration_time: `${
        item.latest_opration_time ? item.latest_opration_time : "unnown"
      }`,
    }));

  console.log(dataNew());

  const itemsArray = dataNew();

  const columns = React.useMemo(
    () => [
      {
        Header: "Address",
        accessor: "address",
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
        Header: "Latest opration time",
        accessor: "latest_opration_time",
      },
    ],
    []
  );

  const data = React.useMemo(() => makeData(20), []);

  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: "solid 3px red",
                  background: "aliceblue",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      border: "solid 1px gray",
                      background: "papayawhip",
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Board_new;

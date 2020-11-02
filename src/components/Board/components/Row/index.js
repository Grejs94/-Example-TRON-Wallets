import React from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  selectWalletsAll,
  setSortedData,
  toggleSortedAscending,
} from "features/wallets/walletsSlice";
import * as Styles from "./styles";
import { SortIcon } from "./components";

const Row = ({ variant, propsArray = [] }) => {
  const dispatch = useDispatch();
  const wallets = useSelector(selectWalletsAll);

  const objectsList = wallets.filterStatus ? wallets.filter : wallets.data;

  const sortWalletsByLatestOprationTime = (objectsList, sortedAscending) => {
    const sorted = [...objectsList].sort((a, b) => {
      let fa = a.latest_opration_time;
      let fb = b.latest_opration_time;

      if (typeof fa !== "number") {
        fa = 1;
      }

      if (typeof fb !== "number") {
        fb = 1;
      }

      if (sortedAscending) {
        return fa - fb;
      } else {
        return fb - fa;
      }
    });
    dispatch(setSortedData(sorted));
    dispatch(toggleSortedAscending());
  };

  const sortWalletsByCreateTime = (objectsList, sortedAscending) => {
    const sorted = [...objectsList].sort((a, b) => {
      let fa = a.create_time;
      let fb = b.create_time;

      if (typeof fa !== "number") {
        fa = 1;
      }

      if (typeof fb !== "number") {
        fb = 1;
      }

      if (sortedAscending) {
        return fa - fb;
      } else {
        return fb - fa;
      }
    });
    dispatch(setSortedData(sorted));
    dispatch(toggleSortedAscending());
  };

  const sortWalletsByBalance = (objectsList, sortedAscending) => {
    const sorted = [...objectsList].sort((a, b) => {
      let fa = a.balance;
      let fb = b.balance;

      if (typeof fa !== "number") {
        fa = 1;
      }

      if (typeof fb !== "number") {
        fb = 1;
      }

      if (sortedAscending) {
        return fa - fb;
      } else {
        return fb - fa;
      }
    });
    dispatch(setSortedData(sorted));
    dispatch(toggleSortedAscending());
  };

  const sortWalletsByAddresses = (objectsList, sortedAscending) => {
    const sorted = [...objectsList].sort((a, b) => {
      let fa = a.address.toLowerCase();
      let fb = b.address.toLowerCase();

      if (sortedAscending) {
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
      } else {
        if (fa < fb) {
          return 1;
        }
        if (fa > fb) {
          return -1;
        }
      }

      return 0;
    });
    dispatch(setSortedData(sorted));
    dispatch(toggleSortedAscending());
  };

  const arrayOfHandleClicks = [
    {
      handleClick: () => {
        if (wallets.data.length > 1) {
          sortWalletsByAddresses(objectsList, wallets.sortedAscending);
        }
      },
    },
    {
      handleClick: () => {
        if (wallets.data.length > 1) {
          sortWalletsByBalance(objectsList, wallets.sortedAscending);
        }
      },
    },
    {
      handleClick: () => {
        if (wallets.data.length > 1) {
          sortWalletsByCreateTime(objectsList, wallets.sortedAscending);
        }
      },
    },
    {
      handleClick: () => {
        if (wallets.data.length > 1) {
          sortWalletsByLatestOprationTime(objectsList, wallets.sortedAscending);
        }
      },
    },
  ];

  return (
    <Styles.Div>
      {propsArray.map((singleProps, index) => (
        <Styles.Cell key={singleProps}>
          {variant === "Row with data" ? (
            <Styles.Span>{singleProps}</Styles.Span>
          ) : variant === "Description row with filters" ? (
            <>
              {singleProps}
              <SortIcon handleClick={arrayOfHandleClicks[index].handleClick} />
            </>
          ) : (
            "You add wrong variant in props"
          )}
        </Styles.Cell>
      ))}
    </Styles.Div>
  );
};

export default Row;

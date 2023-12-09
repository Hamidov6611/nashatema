import { Pagination } from "@mui/material";
import React from "react";

const PaginationBar = ({pageSize, setPageId}) => {
  return (
    <div className="mt-8 md:mt-24 flex w-full justify-center ">
      <Pagination
        sx={{ color: "white" }}
        count={
          pageSize % 10 != 0
            ? Math.floor(pageSize / 10) + 1
            : Math.floor(pageSize / 10)
        }
        onChange={(e, value) => {
           setPageId(value)
          window.scrollTo({top: 0})
          }}
        variant="outlined"
        shape="rounded"
        color="secondary"
      />
    </div>
  );
};

export default PaginationBar;

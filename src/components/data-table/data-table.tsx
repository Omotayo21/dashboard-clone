

import React, { useState, useMemo } from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  ColumnDef,
} from "@tanstack/react-table";
import Filter from "../Filter";
import StatusCell from "./StatusCell";

interface DataRow {
  organization: string;
  username: string;
  email: string;
  phone_number: string;
  date_joined: string;
  status: string;
}

interface DataTableProps {
  data: DataRow[];
  searchTerm: string;
}

const DataTable: React.FC<DataTableProps> = ({ data, searchTerm }) => {
  const filteredData = useMemo<DataRow[]>(
    () =>
      data.filter((row) =>
        row.username.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [data, searchTerm]
  );
  const columns = React.useMemo(
    () => [
      {
        accessorKey: "organization",
        header: () => (
          <div className="flex items-center w-28">
            Organization
            <button onClick={handleFilter}>
              <img
                src="/filter-results-button.svg"
                alt="Filter"
                className="ml-1"
              />
            </button>
          </div>
        ),
      },
      {
        accessorKey: "username",
        header: () => (
          <div className="flex items-center w-24">
            Username
            <button onClick={handleFilter}>
              <img
                src="/filter-results-button.svg"
                alt="Filter"
                className="ml-1"
              />
            </button>
          </div>
        ),
      },
      {
        accessorKey: "email",
        header: () => (
          <div className="flex items-center">
            Email
            <button onClick={handleFilter}>
              <img
                src="/filter-results-button.svg"
                alt="Filter"
                className="ml-1"
              />
            </button>
          </div>
        ),
      },
      {
        accessorKey: "phone_number",
        header: () => (
          <div className="flex items-center text-[0.8rem] w-40">
            Phone Number
            <button onClick={handleFilter}>
              <img
                src="/filter-results-button.svg"
                alt="Filter"
                className="ml-1"
              />
            </button>
          </div>
        ),
      },
      {
        accessorKey: "date_joined",
        header: () => (
          <div className="flex items-center w-28">
            Date Joined
            <button onClick={handleFilter}>
              <img
                src="/filter-results-button.svg"
                alt="Filter"
                className="ml-1"
              />
            </button>
          </div>
        ),
      },
      {
        accessorKey: "status",
        header: () => (
          <div className="flex items-center">
            Status
            <button onClick={handleFilter}>
              <img
                src="/filter-results-button.svg"
                alt="Filter"
                className="ml-1"
              />
            </button>
          </div>
        ),
        cell: ({ row }) => {
          const data = row.original;
          return (
            <StatusCell
              status={data.status}
              onOptionsClick={() => console.log("Options clicked for", data)}
            />
          );
        },
      },
    ],
    []
  );

  const [filter, setFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const handleFilter = () => {
    setFilter((prevFilter) => !prevFilter);
  };

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="relative overflow-x-auto lg:w-[61rem] md:w-[50rem] sm:w-[30rem] outline-none rounded-md shadow-lg">
      <table className="min-w-full bg-white">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, i) => (
                <th
                  key={header.id}
                  className="px-6 border-b-2 border-gray-300 text-sm font-semibold text-gray-600 tracking-wider"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-6 py-4 border-b border-gray-300 text-sm"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {filter && (
        <div className="absolute top-16 left-4 bg-white border shadow-md rounded-lg p-4">
          <Filter />
        </div>
      )}

      <div className="flex mt-4 lg:justify-between sm:gap-x-4">
        <div className="flex flex-row gap-x-4">
          <p>Showing</p>
          <div className="flex bg-gray-200 py-2 px-3 w-20 cursor-pointer gap-[1.125rem] outline-none rounded-md items-center -mt-2">
            <select
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
              className="outline-none bg-transparent w-full font-semibold text-blue-900"
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
          </div>
          <p>Out of {data.length}</p>
        </div>
        <div>
          {" "}
          <button
            className="px-4 "
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <img src="/prev btn.svg" alt="previous" />
          </button>
          <span className="sm:hidden">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </span>
          <button
            className="px-4  "
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <img src="/next btn.svg" alt="next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;

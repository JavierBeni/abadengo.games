import { useEffect, useMemo, useCallback } from "react";
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import { TableWrapper } from "./styles";
import Button from "../Button";
import { t } from "i18next";
import { useStore } from "../../store";
import useMediaDevices from "../../hooks/useMediaDevices";

interface CardData {
  name: string;
  number: number;
  expansion: string;
  year: number;
  condition: string;
  language: string;
  rarity: string;
  quantity: number;
  price: number;
  comments: string;
}

interface CardTableProps {
  data: CardData[];
}

const CardTableComponent = ({ data }: CardTableProps) => {
  const { language } = useStore();
  const { mediaIsPhone } = useMediaDevices();

  const columns = useMemo<ColumnDef<CardData>[]>(
    () => {
      return mediaIsPhone
        ? [
            { accessorKey: "name", header: t("tableName") },
            { accessorKey: "expansion", header: t("tableSet") },
            { accessorKey: "price", header: t("tablePrice") },
          ]
        : [
            { accessorKey: "name", header: t("tableName") },
            { accessorKey: "number", header: t("tableNumber") },
            { accessorKey: "expansion", header: t("tableSet") },
            { accessorKey: "year", header: t("tableYear") },
            { accessorKey: "condition", header: t("tableCondition") },
            { accessorKey: "language", header: t("tableLanguage") },
            { accessorKey: "rarity", header: t("tableRarity") },
            { accessorKey: "quantity", header: t("tableQuantity") },
            { accessorKey: "price", header: t("tablePrice") },
            { accessorKey: "reverse", header: "Reverse" },
            { accessorKey: "holo", header: "Holo" },
            { accessorKey: "comments", header: t("tableComments") },
          ];
    },
    [language, mediaIsPhone]
  );

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: mediaIsPhone ? 7 : 10 } },
  });

  useEffect(() => {
    table.setPageSize(mediaIsPhone ? 7 : 10);
  }, [mediaIsPhone, table]);

  const handlePreviousPage = useCallback(() => {
    table.previousPage();
  }, [table]);

  const handleNextPage = useCallback(() => {
    table.nextPage();
  }, [table]);

  return (
    <TableWrapper>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((column) => {
                const sortHandler = column.column.getToggleSortingHandler();
                const isSorted = column.column.getIsSorted();
                const sortIndicator =
                  isSorted === "asc" ? " 🔼" : isSorted === "desc" ? " 🔽" : "";

                return (
                  <th
                    key={column.id}
                    onClick={sortHandler}
                    role={sortHandler ? "button" : undefined}
                    aria-label={
                      sortHandler
                        ? `${column.column.columnDef.header} - sortable`
                        : undefined
                    }
                    style={{
                      cursor: sortHandler ? "pointer" : "default",
                    }}
                  >
                    {flexRender(
                      column.column.columnDef.header,
                      column.getContext()
                    )}
                    {sortIndicator}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Paginación Interna */}
      <div className="pagination">
        <Button
          action={handlePreviousPage}
          disabled={!table.getCanPreviousPage()}
        >
          {t("tablePrev")}
        </Button>
        <span>
          {table.getState().pagination.pageIndex + 1} -{" "}
          {table.getPageCount()}
        </span>
        <Button
          action={handleNextPage}
          disabled={!table.getCanNextPage()}
        >
          {t("tableNext")}
        </Button>
      </div>
    </TableWrapper>
  );
};

export const CardTable = CardTableComponent;

import { useMemo } from "react";
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
import { CardProps } from "../../data/data";

interface CardTableProps {
  data: CardProps[];
}

export const CardTable = ({ data }: CardTableProps) => {
  const { language } = useStore();
  const columns = useMemo<ColumnDef<CardProps>[]>(
    () => [
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
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [language]
  );

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(), // Habilita paginación interna
    initialState: { pagination: { pageSize: 10 } },
  });

  return (
    <TableWrapper>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th key={column.id} onClick={column.column.getToggleSortingHandler()}>
                  {flexRender(column.column.columnDef.header, column.getContext())}
                  {column.column.getIsSorted() === "asc" ? " 🔼" : column.column.getIsSorted() === "desc" ? " 🔽" : ""}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Paginación Interna */}
      <div className="pagination">
        <Button action={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
        {t("tablePrev")}
        </Button>
        <span>
          {table.getState().pagination.pageIndex + 1} - {table.getPageCount()}
        </span>
        <Button action={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          {t("tableNext")}
        </Button>
      </div>
    </TableWrapper>
  );
};

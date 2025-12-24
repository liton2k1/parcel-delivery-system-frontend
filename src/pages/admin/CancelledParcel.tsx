import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  PaginationState,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import {
  AlertTriangle,
  Banknote,
  ChevronDownIcon,
  ChevronFirstIcon,
  ChevronLastIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  Package,
  PackageX,
  Scale,
  Truck,
  Users,
} from "lucide-react";
import { useId, useState } from "react";

import Error from "@/components/Error";
import Loading from "@/components/Loading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useGetAllParcelsQuery } from "@/redux/features/parcel/parcelApi";
import { IParcel } from "@/types";
import { ParcelStatus } from "@/types/sender";
import { getStatusColor } from "@/utils/getStatusColor";
import { format } from "date-fns";

const columns: ColumnDef<IParcel>[] = [
  {
    header: "Sender",
    accessorKey: "sender",
    cell: ({ row }) => {
      const sender = row.original?.sender;
      return (
        <div className="space-y-1">
          <div className="font-medium">{sender?.name || "N/A"}</div>
          <div className="text-sm text-muted-foreground">
            {row.original?.pickupAddress || "-"}
          </div>
          <div className="text-sm text-muted-foreground">
            {sender?.email || "-"}
          </div>
          <div className="text-sm text-muted-foreground">
            {sender?.phone || "-"}
          </div>
        </div>
      );
    },
    size: 210,
    enableSorting: false,
  },
  {
    header: "Receiver",
    accessorKey: "receiver",
    cell: ({ row }) => {
      const receiver = row.original?.receiver;
      return (
        <div className="space-y-1">
          <div className="font-medium">{receiver?.name || "N/A"}</div>
          <div className="text-sm text-muted-foreground">
            {row.original?.deliveryAddress || "-"}
          </div>
          <div className="text-sm text-muted-foreground">
            {receiver?.email || "-"}
          </div>
          <div className="text-sm text-muted-foreground">
            {receiver?.phone || "-"}
          </div>
        </div>
      );
    },
    size: 210,
    enableSorting: false,
  },
  {
    header: "Cancelled At",
    accessorKey: "cancelledAt",
    cell: ({ row }) => {
      const cancelledAt = row.getValue("cancelledAt");
      return (
        <div>{cancelledAt ? format(cancelledAt as Date, "PPP") : "-"}</div>
      );
    },
    size: 165,
    enableSorting: true,
  },
  {
    header: "Parcel Info",
    accessorKey: "weight",
    cell: ({ row }) => {
      const packageType = `${row.original?.type
        .charAt(0)
        .toUpperCase()}${row.original?.type.slice(1)}`;
      const shippingType = `${row.original?.shippingType
        .charAt(0)
        .toUpperCase()}${row.original?.shippingType.slice(1)}`;
      return (
        <div className="space-y-1">
          <div className="font-medium flex items-center gap-2">
            <Scale className="h-4 w-4" />
            {row.original?.weight} {row.original?.weightUnit}
          </div>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            <Package className="h-4 w-4" />
            {packageType}
          </div>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            <Truck className="h-4 w-4" />
            {shippingType}
          </div>
        </div>
      );
    },
    size: 130,
    enableSorting: false,
  },
  {
    header: "Cost",
    accessorKey: "fee",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("fee"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BDT",
        minimumFractionDigits: 0,
      }).format(amount);
      return (
        <div className="space-y-1">
          <div>{formatted.slice(4)}</div>
          <div className="text-sm text-muted-foreground">BDT</div>
        </div>
      );
    },
    size: 130,
    enableSorting: true,
  },
  {
    header: "Tracking ID",
    accessorKey: "trackingId",
    cell: ({ row }) => (
      <div className="text-left">{row.getValue("trackingId")}</div>
    ),
    size: 210,
    enableSorting: false,
  },
  {
    header: "Status",
    accessorKey: "currentStatus",
    cell: ({ row }) => (
      <Badge className={getStatusColor(row.getValue("currentStatus"))}>
        {row.getValue("currentStatus")}
      </Badge>
    ),
    size: 100,
    enableSorting: false,
  },
];

const CancelledParcels = () => {
  const id = useId();
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [sorting, setSorting] = useState<SortingState>([]);

  const currentQuery = {
    page: pagination.pageIndex + 1,
    limit: pagination.pageSize,
    sort: sorting.length > 0 ? sorting[0].id : "-cancelledAt",
    currentStatus: [ParcelStatus.CANCELLED], // Filter for cancelled only
  };

  const {
    data: parcelsData,
    isLoading: isLoadingParcels,
    isError: isErrorParcels,
  } = useGetAllParcelsQuery({
    ...currentQuery,
  });

  // Calculate stats from the data
  const stats = {
    totalParcels: parcelsData?.meta?.total || 0,
    totalLostRevenue:
      parcelsData?.data?.reduce(
        (sum: number, parcel: IParcel) => sum + (parcel.fee || 0),
        0
      ) || 0,
    uniqueUsers:
      new Set(
        parcelsData?.data
          ?.map((parcel: IParcel) => parcel.sender?.email)
          .filter(Boolean)
      ).size || 0,
    avgCancelledValue: parcelsData?.data?.length
      ? (
          (parcelsData?.data?.reduce(
            (sum: number, parcel: IParcel) => sum + (parcel.fee || 0),
            0
          ) || 0) / parcelsData.data.length
        ).toFixed(2)
      : "0.00",
  };

  const table = useReactTable({
    data: parcelsData?.data || [],
    columns,
    manualPagination: true,
    pageCount: parcelsData?.meta?.totalPage,
    rowCount: parcelsData?.meta?.total,
    manualSorting: true,
    enableSortingRemoval: true,
    enableMultiSort: false,
    getCoreRowModel: getCoreRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onSortingChange: (updater) => {
      setSorting(updater);
      setPagination((prev) => ({ ...prev, pageIndex: 0 }));
    },
    onPaginationChange: setPagination,
    state: {
      sorting,
      pagination,
      columnVisibility,
    },
  });

  if (isLoadingParcels) {
    return <Loading message="Loading cancelled parcels..." />;
  }

  if (!isLoadingParcels && isErrorParcels) {
    return <Error />;
  }

  return (
    <div className="space-y-10">
      {/* Stats Cards */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <Card className="shadow-none bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-red-900 border-red-200 dark:border-red-800">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium text-red-900 dark:text-red-100">
              Total Cancelled Parcels
            </CardTitle>
            <PackageX className="h-5 w-5 text-red-600 dark:text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-900 dark:text-red-100">
              {stats.totalParcels}
            </div>
            <p className="text-xs text-red-700 dark:text-red-300">
              All time cancelled
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-none bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 border-orange-200 dark:border-orange-800">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium text-orange-900 dark:text-orange-100">
              Lost Revenue
            </CardTitle>
            <Banknote className="h-5 w-5 text-orange-600 dark:text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">
              {new Intl.NumberFormat("en-US", {
                minimumFractionDigits: 0,
              }).format(stats.totalLostRevenue)}{" "}
              BDT
            </div>
            <p className="text-xs text-orange-700 dark:text-orange-300">
              From cancelled parcels
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-none bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900 border-amber-200 dark:border-amber-800">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium text-amber-900 dark:text-amber-100">
              Affected Customers
            </CardTitle>
            <Users className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-900 dark:text-amber-100">
              {stats.uniqueUsers}
            </div>
            <p className="text-xs text-amber-700 dark:text-amber-300">
              Unique senders
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-none bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950 dark:to-yellow-900 border-yellow-200 dark:border-yellow-800">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium text-yellow-900 dark:text-yellow-100">
              Avg. Cancelled Value
            </CardTitle>
            <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-900 dark:text-yellow-100">
              {stats.avgCancelledValue} BDT
            </div>
            <p className="text-xs text-yellow-700 dark:text-yellow-300">
              Per cancellation
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Table */}
      <div className="bg-background rounded-md border overflow-auto">
        <Table className="table-auto min-w-full">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="hover:bg-transparent">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      style={{ width: `${header.getSize()}px` }}
                      className="h-11"
                    >
                      {header.isPlaceholder ? null : header.column.getCanSort() ? (
                        <div
                          className={cn(
                            header.column.getCanSort() &&
                              "flex h-full cursor-pointer items-center justify-between gap-2 select-none"
                          )}
                          onClick={header.column.getToggleSortingHandler()}
                          onKeyDown={(e) => {
                            if (
                              header.column.getCanSort() &&
                              (e.key === "Enter" || e.key === " ")
                            ) {
                              e.preventDefault();
                              header.column.getToggleSortingHandler()?.(e);
                            }
                          }}
                          tabIndex={header.column.getCanSort() ? 0 : undefined}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: (
                              <ChevronUpIcon
                                className="shrink-0 opacity-60"
                                size={16}
                                aria-hidden="true"
                              />
                            ),
                            desc: (
                              <ChevronDownIcon
                                className="shrink-0 opacity-60"
                                size={16}
                                aria-hidden="true"
                              />
                            ),
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      ) : (
                        flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No cancelled parcels found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between gap-8">
        {/* Results per page */}
        <div className="flex items-center gap-3">
          <Label htmlFor={id} className="max-sm:sr-only">
            Rows per page
          </Label>
          <Select
            value={table.getState().pagination.pageSize.toString()}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger id={id} className="w-fit whitespace-nowrap">
              <SelectValue placeholder="Select number of results" />
            </SelectTrigger>
            <SelectContent className="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2">
              {[5, 10, 25, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={pageSize.toString()}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Page number information */}
        <div className="text-muted-foreground flex grow justify-end text-sm whitespace-nowrap">
          <p
            className="text-muted-foreground text-sm whitespace-nowrap"
            aria-live="polite"
          >
            <span className="text-foreground">
              {table.getState().pagination.pageIndex *
                table.getState().pagination.pageSize +
                1}
              -
              {Math.min(
                Math.max(
                  table.getState().pagination.pageIndex *
                    table.getState().pagination.pageSize +
                    table.getState().pagination.pageSize,
                  0
                ),
                table.getRowCount()
              )}
            </span>{" "}
            of{" "}
            <span className="text-foreground">
              {table.getRowCount().toString()}
            </span>
          </p>
        </div>

        {/* Pagination buttons */}
        <div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <Button
                  size="icon"
                  variant="outline"
                  className="disabled:pointer-events-none disabled:opacity-50"
                  onClick={() => table.firstPage()}
                  disabled={!table.getCanPreviousPage()}
                  aria-label="Go to first page"
                >
                  <ChevronFirstIcon size={16} aria-hidden="true" />
                </Button>
              </PaginationItem>
              <PaginationItem>
                <Button
                  size="icon"
                  variant="outline"
                  className="disabled:pointer-events-none disabled:opacity-50"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                  aria-label="Go to previous page"
                >
                  <ChevronLeftIcon size={16} aria-hidden="true" />
                </Button>
              </PaginationItem>
              <PaginationItem>
                <Button
                  size="icon"
                  variant="outline"
                  className="disabled:pointer-events-none disabled:opacity-50"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                  aria-label="Go to next page"
                >
                  <ChevronRightIcon size={16} aria-hidden="true" />
                </Button>
              </PaginationItem>
              <PaginationItem>
                <Button
                  size="icon"
                  variant="outline"
                  className="disabled:pointer-events-none disabled:opacity-50"
                  onClick={() => table.lastPage()}
                  disabled={!table.getCanNextPage()}
                  aria-label="Go to last page"
                >
                  <ChevronLastIcon size={16} aria-hidden="true" />
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default CancelledParcels;

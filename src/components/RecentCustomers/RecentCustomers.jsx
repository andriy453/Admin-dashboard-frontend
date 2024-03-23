import { useMemo } from "react";
import { useTable } from "react-table/dist/react-table.development";
import { nanoid } from 'nanoid'
import {
  IconWrapper,
  NameColumn,
  Table,
  TableWrap,
  Td,
  Th,
  Title,
  Tr,
} from "./RecentCustomers.styled";

export const RecentCustomers = ({ data }) => {
  const columnsRecommend = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        Cell: ({ row }) => (
          <NameColumn>
            <img
              src={row.original.image}
              alt={`${row.original.name}'s Avatar`}
              style={{
                marginRight: "8px",
                borderRadius: "30px",
                width: "36px",
                height: "36px",
              }}
            />
            {row.original.name}
          </NameColumn>
        ),
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Spent",
        accessor: "spent",
      },
      {
        Header: "Country",
        accessor: "View",
        Cell: ({ value }) => (
          <span
            style={{
              color: "#59B17A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(89, 177, 122, 0.50)",
              borderRadius: "30px",
              padding: "8px 18px",
            }}
          >
            {"View"}
          </span>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns: columnsRecommend, data: useMemo(() => data, [data]) });

  return (
    <>
      <TableWrap>
        <Title>Recent Customers</Title>
        <Table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr key={nanoid()} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th key={nanoid()} {...column.getHeaderProps()}>
                    <IconWrapper>{column.render("Header")}</IconWrapper>
                  </Th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <Tr key={nanoid()} {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <Td  key={nanoid()}{...cell.getCellProps()}>{cell.render("Cell")}</Td>
                  ))}
                </Tr>
              );
            })}
          </tbody>
        </Table>
      </TableWrap>
    </>
  );
};
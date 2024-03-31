import { useMemo,useState } from "react";
import { useTable } from "react-table/dist/react-table.development";
import sprite from "../../assets/sprite.svg";
import { nanoid } from "nanoid";
import {
  BtnEdit,
  IconWrapper,
//   NameColumn,
  SvgEdit,
  Table,
  TableWrap,
  Td,
  Th,
  Title,
  Tr,
} from "./SuppliersTable.stuled";
import Modal from "../Modal/Modal";
import EditSuppliers from "../Modal/EditSuppliers/EditSuppliers";

export const SuppliersTable = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idSuppires, setIdSuppires] = useState('');
  const  hendleEditClick  =(row) =>{
    setIsModalOpen(true) 
    setIdSuppires(row)
  }
  const columnsRecommend = useMemo(
    () => [
      {
        Header: "Suppliers Info",
        accessor: "name",
      },
      {
        Header: "Address",
        accessor: "address",
      },
      {
        Header: "Company",
        accessor: "suppliers",
      },
      {
        Header: "Delivery date",
        accessor: "date",
      },
      {
        Header: "Ammount",
        accessor: "amount",
        Cell: ({ value }) => <span>{value}</span>,
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: value === "Active" ? "#59B17A" : "#E85050",
                borderRadius: "40px",
                padding: "4px 25px",
                fontSize: "14px",
                background:
                  value === "Active"
                    ? "rgba(89, 177, 122, 0.10)"
                    : "rgba(232, 80, 80, 0.10)",
                minWidth: "109px",
              }}
            >
              {value}
            </span>
          </div>
        ),
      },
      {
        Header: "Action",
        accessor: "Action",
        Cell: ({ row }) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BtnEdit onClick={()=>hendleEditClick(row)}>
              <SvgEdit >
                <use href={sprite + "#icon-pen"}></use>
              </SvgEdit>
              Edit
            </BtnEdit>
          </div>
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
        <Title>All suppliers</Title>
        <Table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr  key={nanoid()} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th  key={nanoid()}{...column.getHeaderProps()}>
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
                    <Td key={nanoid()}  {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                  ))}
                </Tr>
              );
            })}
          </tbody>
        </Table>
      </TableWrap>
      {isModalOpen && (
          <Modal onClose={()=>    setIsModalOpen(false)} isOpen={isModalOpen}>
            <EditSuppliers  onClose={()=>    setIsModalOpen(false)} data={idSuppires}/>
          </Modal>
        )}
    </>
  );
};
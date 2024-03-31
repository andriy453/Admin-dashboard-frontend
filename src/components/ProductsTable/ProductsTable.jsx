import { useMemo,useState } from "react";
import { useTable } from "react-table/dist/react-table.development";
import { useDispatch } from 'react-redux';
import sprite from "../../assets/sprite.svg";
import { nanoid } from "nanoid";
import {
  BtnDelete,
  BtnEdit,
  IconWrapper,
  SvgDelete,
  SvgEdit,
  Table,
  TableWrap,
  Td,
  Th,
  Title,
  Tr,
} from "./ProductsTable.styled";
import {productsIdDelete} from '../../redux/lists/operations'
import Modal from "../Modal/Modal";
import EditModal from "../Modal/EditModal/EditModal";

 const ProductsTable = ({ data }) => {
  const dispatch = useDispatch();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idProduct, setIdProduct] = useState('');

  const  hendleEditClick  =(id) =>{
    setIsModalOpen(true) 
    setIdProduct(id)
  }

  const columnsRecommend = useMemo(
    () => [
      {
        Header: "Product Info",
        accessor: "name",
      },
      {
        Header: "Category",
        accessor: "category",
      },
      {
        Header: "Stock",
        accessor: "stock",
      },
      {
        Header: "Suppliers",
        accessor: "suppliers",
      },
      {
        Header: "Price",
        accessor: "price",
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
              gap: "8px",
            }}
          >
            <BtnEdit>
              <SvgEdit onClick={()=>hendleEditClick(row) }>
                <use href={sprite + "#icon-pen"}></use>
              </SvgEdit>
            </BtnEdit>
            <BtnDelete onClick={()=> dispatch(productsIdDelete(row.original._id))}>
              <SvgDelete >
                <use href={sprite + "#icon-trash-2-1"}></use>
              </SvgDelete>
            </BtnDelete>
          </div>
        ),
      },
    ],
    [dispatch,]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns: columnsRecommend, data: useMemo(() => data, [data]) });

  return (
    <>
      <TableWrap>
        <Title>All products</Title>
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
                    <Td key={nanoid()} {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                  ))}
                </Tr>
              );
            })}
          </tbody>
        </Table>
      </TableWrap>
      {isModalOpen && (
          <Modal onClose={()=>    setIsModalOpen(false)} isOpen={isModalOpen}>
            <EditModal  onClose={()=>    setIsModalOpen(false)} data={idProduct}/>
          </Modal>
        )}
    </>
  );
};

export default ProductsTable;
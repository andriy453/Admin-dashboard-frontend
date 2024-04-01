import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { page, products, totalPages,totalProduct } from "../../redux/lists/listsSelector";
import { productsGet } from "../../redux/lists/operations";

import {
  BtnAdd,
  BtnWrap,
  Button,
  DivPlus,
  FilterWrap,
  Input,
  Pagination,
  SvgFilter,
  SvgDot,
  SvgPlus,
} from "./AllProductsPage.styled";
import sprite from "../../assets/sprite.svg";
import { WrapProducts } from "./AllProductsPage.styled";
import  ProductsTable  from "../../components/ProductsTable/ProductsTable";
import  Modal  from "../../components/Modal/Modal";
import AddNewProduct from "../../components/Modal/AddNewProduct/AddNewProduct";

const PaginationDot = ({ onClick,isActive }) => (

  <SvgDot onClick={onClick} $isActive={isActive}>
 
  </SvgDot>
);

 const AllProductsPage = () => {
  const dispatch = useDispatch();
  const productsList = useSelector(products);
  const TotalProduct = useSelector(totalProduct);
  
  const [filterValue, setFilterValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };
  useEffect(() => {
    // if (loggedIn) {
      dispatch(productsGet({ page: 1, name: "" }));
    // }
  }, [dispatch,TotalProduct]);

  const totalPageCount = useSelector(totalPages);
  const currentPage = useSelector(page);

  const handlePageChange = (newPage) => {
    dispatch(productsGet({ page: newPage, name: filterValue || "" }));
  };

  const renderPaginationDots = () => {
    const dots = [];
    for (let i = 1; i <= totalPageCount; i++) {
      dots.push(
        <PaginationDot
          key={i}
          onClick={() => handlePageChange(i)}
          isActive={i  === +currentPage}
        />
      );
    }
    return dots;
  };
  const handleFilterSubmit = () => {
    dispatch(productsGet({ page: 1, name: filterValue }));
  };

  const handleAddButtonClick = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <WrapProducts>
        <BtnWrap>
          <FilterWrap>
            <Input
              type="text"
              placeholder="User Name"
              value={filterValue}
              onChange={handleFilterChange}
            />
            <Button onClick={handleFilterSubmit}>
              <SvgFilter>
                <use href={sprite + "#icon-filter"}></use>
              </SvgFilter>
              Filter
            </Button>
          </FilterWrap>
          <BtnAdd onClick={handleAddButtonClick}>
            <DivPlus>
              <SvgPlus>
                <use href={sprite + "#icon-plus"}></use>
              </SvgPlus>
            </DivPlus>
            Add a new product
          </BtnAdd>
        </BtnWrap>
        <ProductsTable data={productsList} />
        <Pagination>{renderPaginationDots()}</Pagination>
        {isModalOpen && (
          <Modal onClose={closeModal} isOpen={isModalOpen}>
            <AddNewProduct  onClose={closeModal}/>
          </Modal>
        )}
      </WrapProducts>
    </>
  );
};

export default AllProductsPage;
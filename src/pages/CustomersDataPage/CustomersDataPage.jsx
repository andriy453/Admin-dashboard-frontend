import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  customers,
  page,
  totalPages,
} from "../../redux/lists/listsSelector";
import { customerGet } from "../../redux/lists/operations";

import {
  Button,
  FilterWrap,
  Input,
  Pagination,
  SvgDot,
  SvgFilter,
  WrapCustomers
} from "./CustomersDataPage.stuled";
import sprite from "../../assets/sprite.svg";

import  CustomersData  from "../../components/CustomersData/CustomersData";

const PaginationDot = ({ onClick, isActive }) => (
  <SvgDot onClick={onClick} $isActive={isActive}>
  </SvgDot>
);

 const CustomersDataPage = () => {
  const dispatch = useDispatch();
  const [filterValue, setFilterValue] = useState("");

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };
  useEffect(() => {
      dispatch(customerGet({ page: 1, name: "" }));
  }, [dispatch]);

  const customersList = useSelector(customers);
  const totalPageCount = useSelector(totalPages);
  const currentPage = useSelector(page);

  const handlePageChange = (newPage) => {
    dispatch(customerGet({ page: newPage, name: filterValue || "" }));
  };

  const renderPaginationDots = () => {
    const dots = [];
    for (let i = 1; i <= totalPageCount; i++) {
      dots.push(
        <PaginationDot
          key={i}
          onClick={() => handlePageChange(i)}
          isActive={i === +currentPage}
        />
      );
    }
    return dots;
  };
  const handleFilterSubmit = () => {
    dispatch(customerGet({ page: 1, name: filterValue }));
  };
  return (
    <>
      <WrapCustomers>
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
        <CustomersData data={customersList} />
        <Pagination>{renderPaginationDots()}</Pagination>
      </WrapCustomers>
    </>
  );
};

export default CustomersDataPage;
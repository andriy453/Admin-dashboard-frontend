import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";
import { orders, page, totalPages } from "../../redux/lists/listsSelector";
import { ordersGet } from "../../redux/lists/operations";
import { OrdersTable } from "../../components/OrdersTable/OrdersTable";
import {
  Button,
  FilterWrap,
  Input,
//   Pagination,
  SvgDot,
  SvgFilter,
  WrapOrders,
} from "./OrdersPage.stuled";
import sprite from "../../assets/sprite.svg";

const PaginationDot = ({ onClick, isActive }) => (
  <SvgDot onClick={onClick}>
    <use href={sprite + "#icon-dot"}></use>
  </SvgDot>
);

export const Orders = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(selectIsLoggedIn);
  const [filterValue, setFilterValue] = useState("");

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  useEffect(() => {
    if (loggedIn) {
      dispatch(ordersGet({ page: 1, name: "" }));
    }
  }, [dispatch, loggedIn]);

  const ordersList = useSelector(orders);
  const totalPageCount = useSelector(totalPages);
  const currentPage = useSelector(page);

  const handlePageChange = (newPage) => {
    dispatch(ordersGet({ page: newPage, name: filterValue || "" }));
  };

  const renderPaginationDots = () => {
    const dots = [];
    for (let i = 1; i <= totalPageCount; i++) {
      dots.push(
        <PaginationDot
          key={i}
          onClick={() => handlePageChange(i)}
          isActive={i === currentPage}
        />
      );
    }
    return dots;
  };
  const handleFilterSubmit = () => {
    dispatch(ordersGet({ page: 1, name: filterValue }));
  };
  return (
    <>
      <WrapOrders>
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
        <OrdersTable data={ordersList} />
        {/* <Pagination>{renderPaginationDots()}</Pagination> */}
      </WrapOrders>
    </>
  );
};
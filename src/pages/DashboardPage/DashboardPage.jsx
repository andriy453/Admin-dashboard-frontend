import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {selectIsLoggedIn} from '../../redux/auth/authSelectors'

import {
  customers,
  dashboards,
  productsLength,
  suppliersLength,
} from "../../redux/lists/listsSelector";
import { dashboardGet } from "../../redux/lists/operations";
import { IncomeExpences } from "../../components/IncomeExpences/IncomeExpences";
import { RecentCustomers } from "../../components/RecentCustomers/RecentCustomers";
import { Statistics } from "../../components/Statistics/Statistics";
import { WrapDashboards, WrapTable } from "./DashboardPage.styled";

function DashboardPage() {
  const dispatch = useDispatch();
  const loggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (loggedIn) {
      dispatch(dashboardGet({ page: 1 }));
    }
  }, [dispatch, loggedIn]);

  const customersLength = useSelector(customers).length;
  const suppliers = useSelector(suppliersLength);
  const products = useSelector(productsLength);
  const dashboardsList = useSelector(dashboards);

  const customerList = useSelector(customers);

  return (
    <>
      <WrapDashboards>
        <Statistics
          customers={customersLength}
          suppliers={suppliers}
          products={products}
        />
        <WrapTable>
          <RecentCustomers data={customerList} />
          <IncomeExpences data={dashboardsList} />
        </WrapTable>
      </WrapDashboards>
    </>
  );
}

export default DashboardPage;
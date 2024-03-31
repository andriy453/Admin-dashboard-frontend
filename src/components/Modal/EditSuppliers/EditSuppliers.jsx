import { useState } from 'react';
import * as yup from 'yup';
import { ErrorMessage, Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { productsAdd } from '../../../redux/lists/operations';
import {
  FieldModal,
  FormWrap,
  ModalBtn,
  ModalBtnCancel,
  //   SelectStyled,
  // SelectStyled,
  StyledErrorAuth,
  TitleModal,
  WrapBtnModal,
  WrapInputModal,
} from '../AddNewProduct/AddNewProduct.stuled';
import { suppliersIdEdit } from '../../../redux/lists/operations';
import Dropdown from '../../Dropdown/Dropdown';

const schema = yup.object({
  name: yup.string().required('name is required'),
  Company: yup.string().required('Company is required'),
  Ammount: yup.number().required('Ammount is required'),
  Address: yup.string().required('Address is required'),
});

const EditSuppliers = ({ onClose, data }) => {
  const initialValues = {
    name: data ? data.original.name : '',
    Company: data ? data.original.suppliers : '',
    Ammount: data? data.original.amount: '',
    Address: data ? data.original.address : '',
    date: data ? data.original.date : '',
  };
  console.log(data.original);
  const categoriesArr = ['Active', 'Deactive'];

  const dispatch = useDispatch();

  const [selectCategories, setCategories] = useState(data.original.status);

  const onSubmit = (values, { resetForm }) => {
    dispatch(
      suppliersIdEdit({
        id: data.original._id,
        name: values.name,
        suppliers: values.Company,
        amount: values.Ammount,
        address: values.Address,
        status: selectCategories,
        date: values.date,
      })
    );

    resetForm();
    onClose();
  };

  const onCancel = () => {
    onClose();
  };
  return (
    <>
      <TitleModal>Edit supplier</TitleModal>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        <Form>
          <FormWrap>
            <WrapInputModal>
              <label htmlFor="en">
                <FieldModal
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Suppliers Info"
                />
              </label>
              <ErrorMessage name="name">
                {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
              </ErrorMessage>
            </WrapInputModal>
            <WrapInputModal>
              <label htmlFor="Company">
                <FieldModal
                  type="text"
                  id="Company"
                  name="Company"
                  placeholder="Company"
                />
                <ErrorMessage name="Company">
                  {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
                </ErrorMessage>
              </label>
            </WrapInputModal>
            <WrapInputModal>
              <label htmlFor="Ammount">
                <FieldModal
                  type="text"
                  id="Ammount"
                  name="Ammount"
                  placeholder="Ammount"
                />
                <ErrorMessage name="Ammount">
                  {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
                </ErrorMessage>
              </label>
            </WrapInputModal>
            <WrapInputModal>
              <label htmlFor="Address">
                <FieldModal
                  type="text"
                  id="Address"
                  name="Address"
                  placeholder="Suppliers"
                />
                <ErrorMessage name="Address">
                  {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
                </ErrorMessage>
              </label>
            </WrapInputModal>
            <WrapInputModal>
              <label htmlFor="date">
                <FieldModal
                  type="date"
                  id="date"
                  name="date"
                  placeholder="date"
                />
                <ErrorMessage name="date">
                  {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
                </ErrorMessage>
              </label>
            </WrapInputModal>
            <Dropdown
              value={data.original.status}
              set={setCategories}
              selectedOption={selectCategories}
              arr={categoriesArr}
            />
          </FormWrap>
          <WrapBtnModal>
            <ModalBtn type="submit">Save</ModalBtn>
            <ModalBtnCancel type="button" onClick={onCancel}>
              Cancel
            </ModalBtnCancel>
          </WrapBtnModal>
        </Form>
      </Formik>
    </>
  );
};

export default EditSuppliers;

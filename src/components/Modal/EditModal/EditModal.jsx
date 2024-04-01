import { useState } from 'react';
import * as yup from 'yup';
import { ErrorMessage, Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import {productsIdEdit } from '../../../redux/lists/operations'
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
import Dropdown from '../../Dropdown/Dropdown';

const schema = yup.object({
    name: yup
    .string().required('name is required'),
    stock: yup
    .number().required('stock is required'),
    price: yup
    .number().required('price is required'),
    suppliers: yup
    .string().required('suppliers is required'),
});



const EditModal = ({ onClose,data }) => {
  const initialValues = {
    name: data ? data.original.name : '',
    stock:  data ? data.original.stock : '',
    price:  data ? data.original.price  : '',
    category:    data ? data.original.category : '',
    suppliers: data ? data.original.suppliers : '',
  };
  const categoriesArr = [
    'Medicine',
    'Heart',
    'Head',
    'Hand',
    'Leg',
    'Dental Care',
    'Skin Care',
  ];
  const dispatch = useDispatch();

  const [selectCategories, setCategories] = useState(data.original.category);

  const onSubmit = (values, { resetForm }) => {
    dispatch(
        productsIdEdit(
            {
            id: data.original._id,
            name: values.name,
            stock: values.stock,
            price: values.price,
            suppliers: values.suppliers,
            category: selectCategories,
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
      <TitleModal>Edit product</TitleModal>
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
                  placeholder="Product Info"
                />
              </label>
              <ErrorMessage name="name">
                {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
              </ErrorMessage>
            </WrapInputModal>
            <WrapInputModal>
              <label htmlFor="stock">
                <FieldModal
                  type="text"
                  id="stock"
                  name="stock"
                  placeholder="Stock"
                />
                <ErrorMessage name="stock">
                  {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
                </ErrorMessage>
              </label>
            </WrapInputModal>
            <WrapInputModal>
              <label htmlFor="price">
                <FieldModal
                  type="text"
                  id="price"
                  name="price"
                  placeholder="Price"
                />
                <ErrorMessage name="price">
                  {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
                </ErrorMessage>
              </label>
            </WrapInputModal>
            <Dropdown
              value={data.original.category}
              set={setCategories}
              selectedOption={selectCategories}
              arr={categoriesArr}
            />
            <WrapInputModal>
              <label htmlFor="suppliers">
                <FieldModal
                  type="text"
                  id="suppliers"
                  name="suppliers"
                  placeholder="Suppliers"
                />
                <ErrorMessage name="suppliers">
                  {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
                </ErrorMessage>
              </label>
            </WrapInputModal>
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

export default EditModal;

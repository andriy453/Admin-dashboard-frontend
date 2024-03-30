import { useState } from 'react';
import * as yup from 'yup';
import { ErrorMessage, Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import {productsAdd } from '../../../redux/lists/operations'
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
} from './AddNewProduct.stuled';
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

const initialValues = {
  name: '',
  stock: '',
  price: '',
  category: '',
  suppliers: '',
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

const AddNewProduct = ({ onClose }) => {
  const dispatch = useDispatch();

  const [selectCategories, setCategories] = useState('');

  const onSubmit = (values, { resetForm }) => {
    dispatch(
        productsAdd({
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
      <TitleModal>Add a new product</TitleModal>
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
              value="Categories"
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
            <ModalBtn type="submit">Add</ModalBtn>
            <ModalBtnCancel type="button" onClick={onCancel}>
              Cancel
            </ModalBtnCancel>
          </WrapBtnModal>
        </Form>
      </Formik>
    </>
  );
};

export default AddNewProduct;

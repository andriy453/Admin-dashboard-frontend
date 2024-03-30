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
} from '../AddNewProduct/AddNewProduct.stuled';
import Dropdown from '../../Dropdown/Dropdown';

const schema = yup.object({
    name: yup
    .string().required('name is required'),
    Company: yup
    .number().required('Company is required'),
    Ammount: yup
    .number().required('Ammount is required'),
    Address: yup
    .string().required('Address is required'),
});

const initialValues = {
  name: '',
  Company: '',
  Ammount: '',
  category: '',
  Address: '',
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
            Company: values.Company,
            Ammount: values.Ammount,
            Address: values.Address,
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
      <TitleModal>Add a new suppliers</TitleModal>
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
            <Dropdown
              value="Categories"
              set={setCategories}
              selectedOption={selectCategories}
              arr={categoriesArr}
            />
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

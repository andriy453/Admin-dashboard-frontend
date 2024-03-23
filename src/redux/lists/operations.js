import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../auth/operations";
import Notiflix from 'notiflix';

const showToast = (error, errorCode) => {
  let errorMessage = `Error: ${error}`;
  if (errorCode === 400) {
    errorMessage = "Bad request. Please check your input.";
  } else if (errorCode === 401) {
    errorMessage =
      "Unauthorized. You don't have permission to access this resource.";
  } else if (errorCode === 404) {
    errorMessage = "Not found. The requested resource could not be found.";
  } else if (errorCode === 500) {
    errorMessage =
      "Server error. Something went wrong on our end. Please try again later.";
  }

  Notiflix.Notify.warning(errorMessage);
};

export const dashboardGet = createAsyncThunk(
  "dashboards/all",
  async ({ page }, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/api/dashboard?page=${page}`);
      return data;
    } catch (error) {
      showToast(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const customerGet = createAsyncThunk(
  "customers/all",
  async ({ page, name }, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(
        `/api/customers?page=${page}&name=${name}`
      );

      return data;
    } catch (error) {
      showToast(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const customerIdGet = createAsyncThunk(
  "customers/get",
  async (customerId, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/api/customers/:${customerId}`);

      return data;
    } catch (error) {
      showToast(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const ordersGet = createAsyncThunk(
  "orders/all",
  async ({ page, name }, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/api//orders?page=${page}&name=${name}`);

      return data;
    } catch (error) {
      showToast(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const productsGet = createAsyncThunk(
  "products/all",
  async ({ page, name }, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/api/products?page=${page}&name=${name}`);

      return data;
    } catch (error) {
      showToast(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const productsAdd = createAsyncThunk(
  "products/add",
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(`products`, body);

      return data;
    } catch (error) {
      showToast(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const productsIdGet = createAsyncThunk(
  "products/get",
  async (productId, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/api/products/:${productId}`);

      return data;
    } catch (error) {
      showToast(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const productsIdEdit = createAsyncThunk(
  "products/edit",
  async ({ productId, body }, { rejectWithValue }) => {
    try {
      const { data } = await instance.put(`/api/products/:${productId}`, body);

      return data;
    } catch (error) {
      showToast(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const productsIdDelete = createAsyncThunk(
  "products/delete",
  async (productId, { rejectWithValue }) => {
    try {
      const { data } = await instance.delete(`/api/products/:${productId}`);

      return data;
    } catch (error) {
      showToast(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const suppliersGet = createAsyncThunk(
  "suppliers/all",
  async ({ page, name }, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(
        `/api/suppliers?page=${page}&name=${name}`
      );

      return data;
    } catch (error) {
      showToast(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const suppliersAdd = createAsyncThunk(
  "suppliers/add",
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(`/api/suppliers`, body);

      return data;
    } catch (error) {
      showToast(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const suppliersIdGet = createAsyncThunk(
  "suppliers/get",
  async (supplierId, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/api/suppliers/:${supplierId}`);

      return data;
    } catch (error) {
      showToast(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);

export const suppliersIdEdit = createAsyncThunk(
  "suppliers/edit",
  async ({ supplierId, body }, { rejectWithValue }) => {
    try {
      const { data } = await instance.put(`/api/suppliers/:${supplierId}`, body);

      return data;
    } catch (error) {
      showToast(error.message, error.response?.status);
      return rejectWithValue(error.message);
    }
  }
);
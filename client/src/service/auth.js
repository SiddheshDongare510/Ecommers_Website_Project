import React, { useState } from "react";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import CreateCategory from './../pages/Admin/CreateCategory';
const  auth_base = "http://localhost:8080/api/v1/auth";
const get_base ="http://localhost:8080/api/v1/category";
const product_base = "http://localhost:8080/api/v1/product";
const dash_base = "http://localhost:8080/dashboard";
//const update_base = `http://localhost:8080/api/v1/category/${selected._id }`;



export const authEndPoints = {
    register: auth_base + "/register",
    login: auth_base + "/login",
    forgotPassword: auth_base + "/forgot-password",
    userAuth : auth_base + "/user-auth",
    adminAuth : auth_base + "/admin-auth",
    getCategory :get_base + "/get-category",
    createCategory:get_base +"/create-category",

  // updateCategory :update_base +"/update-category/${categoryId}",

    createProduct:product_base +"/create-product",
    navToProduct:dash_base +"/admin/products",
    updateCategory : get_base +`/update-category/`,
    deleteCategory: get_base + `/delete-category/`,


}


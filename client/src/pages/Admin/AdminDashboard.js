import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu.js";
import Layout from "./../../components/Layout/Layout.js";

const AdminDashboard = () => {
  
  return (
    <Layout>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">content
            
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
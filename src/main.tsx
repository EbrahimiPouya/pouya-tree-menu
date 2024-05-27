import React from "react";
import ReactDOM from "react-dom/client";
import NewRolePermissions from "./components/NewRolePermissions";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div style={{direction: 'rtl'}}>
        <p>tree menu</p>
        <NewRolePermissions onChange={()=>{}} permissions={[]}/>
    </div>
  </React.StrictMode>
);

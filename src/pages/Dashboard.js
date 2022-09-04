import { Button } from "primereact/button";
import React, { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { keys } from "../Constant";
import { menu } from "../Constant";
import { Menubar } from "primereact/menubar";
import { classNames } from "primereact/utils";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  const search = location.pathname.split("/").pop();
  let tabVal = menu.findIndex((i) => i.link === search);
  if (tabVal === -1) {
    tabVal = 0;
  }

  const handleClick = () => {
    localStorage.removeItem(keys.loginToken);
    navigate("/", { replace: false });
  };

  const items = [
    {
      label: "first page",
      command: (e) => {
        window.location.href = "/dashboard/firstpage";
        // setActiveIndex(e.item);
        setActiveIndex(0)
        console.log(e.item);
      },
    },
    {
      label: "second page",    
      activeItem: true,
      command: (e) => {
        window.location.href = "/dashboard/secondpage"; 
        setActiveIndex(1)    
      },
    },
    {
      label: "third papge",

      command: (e) => {
        window.location.href = "/dashboard/thirdpage";
        setActiveIndex(2)
      },
    },
  ];

  return (
    <div className="p-1">
      <Menubar
        model={items}
        end={
          <Button label="Logout" icon="pi pi-power-off" onClick={handleClick} />
        }
      />

      <div className="mt-2 p-2">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

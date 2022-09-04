import React from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { useState, useRef } from "react";
import { Toast } from "primereact/toast";
import { Menu } from 'primereact/menu';
 

const FirstC = () => {
  const [activeSidebar, setActiveSidebar] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
    const toastRef = useRef();
    
    
let items = [
    {label: 'New', icon: 'pi pi-fw pi-plus'},
    {label: 'Search', icon: 'pi pi-fw pi-trash'}
];

  const submitForm = () => {
    toastRef.current.show({
      severity: "info",
      summary: "welcome",
      detail: firstname + " " + lastname,
    });
  };

  return (
    <>
      <div className="topbar shadow-2 py-2 px-3">
        <Button
          className="p-button-rounded "
          icon="pi pi-bars"
          onClick={() => {
            setActiveSidebar(true);
          }}
        ></Button>
      </div>
      <Sidebar
        visible={activeSidebar}
        onHide={() => {
          setActiveSidebar(false);
        }}
      >
        <Menu model={items} className="p-fluid"/>
      </Sidebar>
      <div className=" content p-4">
        <Toast ref={toastRef} />

        <div class="card">
          <h5>Vertical</h5>
          <div class="field">
            <label for="firstname">Firstname</label>
            <input
              id="firstname"
              type="text"
              class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div class="field">
            <label for="lastname">Lastname</label>
            <input
              id="lastname"
              type="text"
              class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
        </div>
        <Button label="Submit" icon="pi pi-check" onClick={submitForm}></Button>
      </div>
    </>
  );
};

export default FirstC;

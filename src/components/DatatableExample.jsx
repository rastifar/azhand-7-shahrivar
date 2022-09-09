import React, { useState, useEffect } from "react";
import axios from "axios";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const DatatableExample = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data));
  }, []);
  return (
    <div>
      <DataTable
        value={posts}
        responsiveLayout="scroll"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        dataKey="id"
        paginator
        emptyMessage="No data found."
        className="datatable-responsive"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} posts"
        rows={10}
      >
        <Column field="userId" sortable header="userId"></Column>
        <Column field="id" sortable header="id"></Column>
        <Column field="title" sortable header="title"></Column>
        <Column field="body" sortable header="body"></Column>
      </DataTable>
    </div>
  );
};

export default DatatableExample;

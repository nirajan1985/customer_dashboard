import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import InvoiceList from "./components/InvoiceList";

function App() {
  return (
    <Admin dataProvider={restProvider("http://localhost:3000/")}>
      <Resource name="invoices" list={InvoiceList} />
    </Admin>
  );
}

export default App;

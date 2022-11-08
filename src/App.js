import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import InvoiceList from "./components/InvoiceList";
import EntityList from "./components/EntityList";

function App() {
  return (
    <Admin dataProvider={restProvider("http://localhost:3000/")}>
      <Resource name="invoices" list={InvoiceList} />
      <Resource name="Entities" list={EntityList} />
    </Admin>
  );
}

export default App;

import React from "react";
import { List, Datagrid, TextField, DateField } from "react-admin";

const InvoiceList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="entity_name" />
        <TextField source="total" />
        <DateField source="period_start" />
        <DateField source="period_end" />
      </Datagrid>
    </List>
  );
};

export default InvoiceList;

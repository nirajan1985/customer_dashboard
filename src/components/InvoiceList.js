import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  TextInput,
  DateInput,
} from "react-admin";

const invoiceFilters = [
  <DateInput source="period_start" />,
  <DateInput source="period_end" />,
  <TextInput source="entity_name" />,
];

const InvoiceList = (props) => {
  return (
    <List {...props} filters={invoiceFilters}>
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

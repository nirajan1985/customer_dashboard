import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  Filter,
  SearchInput,
} from "react-admin";

const InvoiceFilter = (props) => (
  <Filter {...props}>
    <SearchInput
      placeholder="search by entity"
      source="entity_name"
      alwaysOn
      resettable
    />
  </Filter>
);

const InvoiceList = (props) => {
  return (
    <List {...props} filters={<InvoiceFilter />}>
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

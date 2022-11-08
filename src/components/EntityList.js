import React from "react";
import { List, Datagrid, TextField } from "react-admin";

const EntityList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="entity_name" />
        <TextField source="address" />
        <TextField source="town" />
        <TextField source="owner" />
      </Datagrid>
    </List>
  );
};

export default EntityList;

import { Datagrid, List, TextField, NumberField } from "react-admin";
import { PosterFilterSidebar } from "./FilterList";
import './CategoryList.css';  

export const CategoryList = () => (
  <List aside={<PosterFilterSidebar />} className="category-list">
    <Datagrid rowClick="edit" className="category-datagrid">
      <NumberField source="id" className="category-id" />
      <TextField source="name" className="category-name" />
      <TextField source="email" className="category-email" />
      <TextField source="status" className="category-status" />
      <TextField source="Permission" className="category-permission" />
    </Datagrid>
  </List>
);

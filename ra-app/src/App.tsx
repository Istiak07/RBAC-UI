import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { CategoryList } from "./components/CategoryList";
import { CategoryEdit } from "./components/CategoryEdit";
import { CategoryCreate } from "./components/CategoryCreate";
import './App.css';  
const dataProvider = jsonServerProvider("http://localhost:3000");

const App = () => (
  
  <Admin dataProvider={dataProvider} > 
    <Resource
      name="Users"
      list={CategoryList}
      edit={CategoryEdit}
      create={CategoryCreate}
    />
  </Admin>
);

export default App;

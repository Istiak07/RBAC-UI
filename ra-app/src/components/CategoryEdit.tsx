import { Edit, SimpleForm, TextInput, SelectInput, NumberInput } from "react-admin";
import './CategoryEdit.css'; 

export const CategoryEdit = () => (
  <Edit>
    <SimpleForm className="formContainer"> 
      <div className="formTitle">Edit User</div>
      
      <div className="inputRow">
        <div className="inputField">
          <NumberInput disabled source="id" />
        </div>
        <div className="inputField">
          <TextInput source="name" />
        </div>
      </div>
      
      <div className="inputRow">
        <div className="inputField halfWidth">
          <TextInput source="email" />
        </div>
        <div className="inputField halfWidth">
          <SelectInput
            source="status"
            choices={[
              { id: 'Active', name: 'Active' },
              { id: 'Inactive', name: 'Inactive' }
            ]}
          />
        </div>
      </div>
      
      <div className="inputRow">
        <div className="inputField halfWidth">
          <SelectInput
            source="Permission"
            choices={[
              { id: 'R', name: 'Read' },
              { id: 'R-W', name: 'Read-Write' },
              { id: 'R-W-D', name: 'Read-Write-Delete' }
            ]}
          />
        </div>
      </div>
    </SimpleForm>
  </Edit>
);

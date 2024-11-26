import { Create, SimpleForm, TextInput, SelectInput, NumberInput, useNotify, useRedirect } from "react-admin";
import './CategoryCreate.css'; // Import your CSS file

export const CategoryCreate = () => {
  const notify = useNotify();
  const redirect = useRedirect();

  const handleSave = (data) => {
    notify('User created successfully!');
    redirect('/Users'); 
  };

  return (
    <Create className="saveButton">
      <div className="formContainer">
        <div className="formTitle">Create New User</div>
        <SimpleForm onSubmit={handleSave}>
       
          <div className="inputRow">
            <div className="inputField">
              <NumberInput disabled source="id" />
            </div>
          </div>


          <div className="inputRow">
            <div className="inputField halfWidth">
              <TextInput label="User Name" source="name" className="inputSelect" />
            </div>
            <div className="inputField halfWidth">
              <TextInput label="Email" source="email" className="inputSelect" />
            </div>
          </div>

          <div className="inputRow">
            <div className="inputField halfWidth">
              <SelectInput 
                label="Status" 
                source="status" 
                choices={[
                  { id: 'Active', name: 'Active' },
                  { id: 'Inactive', name: 'Inactive' }
                ]}
                className="inputSelect"
              />
            </div>
            <div className="inputField halfWidth">
              <SelectInput 
                label="Permission" 
                source="Permission" 
                choices={[
                  { id: 'R', name: 'Read' },
                  { id: 'R-W', name: 'Read-Write' },
                  { id: 'R-W-D', name: 'Read-Write-Delete' }
                ]}
                className="inputSelect"
              />
            </div>
          </div>

        </SimpleForm>
      </div>
    </Create>
  );
};

import {
  Create,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const PosterCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" />
      <ReferenceInput source="category_id" reference="categories" />
      <TextInput source="title" />
      <NumberInput source="width" />
    </SimpleForm>
  </Create>
);

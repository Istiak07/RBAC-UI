import {
  Edit,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const PosterEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="category_id" reference="categories" />
      <TextInput source="title" />
      <NumberInput source="width" />
    </SimpleForm>
  </Edit>
);

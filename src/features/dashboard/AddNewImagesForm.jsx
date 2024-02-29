import { useForm } from "react-hook-form";
import { Form, FormGroup, Input, Label, Select, Option } from "../../ui/Form";
import styled from "styled-components";
import { useState } from "react";
import Button from "../../ui/Button";
import ChosenFiles from "../../ui/ChosenFiles";

function AddNewImagesForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: {},
  });
  const [chosenFiles, setChosenFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setChosenFiles(files);
  };
  return (
    <Form>
      <FormGroup>
        <Label for="category">Kategória</Label>
        <Select>
          <Option value="portrait">Portrét</Option>
          <Option value="wedding">Svadba</Option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label for="files">Vyberte Fotografie</Label>
        <Input type="file" id="files" multiple onChange={handleFileChange}/>
      </FormGroup>
      <FormGroup>
        <Button>Odoslať</Button>
      </FormGroup>
      <ChosenFiles files={chosenFiles} />
    </Form>
  );
}

export default AddNewImagesForm;

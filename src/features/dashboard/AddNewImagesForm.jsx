import { useForm } from "react-hook-form";
import { Form, FormGroup, Input, Label, Select, Option } from "../../ui/Form";
import styled from "styled-components";
import { useState } from "react";
import Button from "../../ui/Button";
import ChosenFiles from "../../ui/ChosenFiles";
import { usePortfolioData } from "../portfolio/usePortfolioData";
import Spinner from "../../ui/Spinner";

function AddNewImagesForm() {
  const { isLoading, portfolio, error } = usePortfolioData();
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: {},
  });
  const [chosenFiles, setChosenFiles] = useState([]);

  function handleFileChange(e) {
    const files = Array.from(e.target.files);
    setChosenFiles(files);
  }

  if (isLoading) return <Spinner />;

  return (
    <Form bg="secondary">
      <FormGroup border="primary">
        <Label for="category">Kategória</Label>
        <Select>
          {portfolio.map((category) => (
            <Option value={category.name} key={category.name}>
              {category.name}
            </Option>
          ))}
          {/* <Option value="portrait">Portrét</Option>
          <Option value="wedding">Svadba</Option> */}
        </Select>
      </FormGroup>
      <FormGroup border="primary">
        <Label for="files">Vyberte Fotografie</Label>
        <Input type="file" id="files" multiple onChange={(e) => handleFileChange(e)} />
      </FormGroup>
      <FormGroup border="primary">
        <Button color="primary">Odoslať</Button>
      </FormGroup>
      <ChosenFiles files={chosenFiles} />
    </Form>
  );
}

export default AddNewImagesForm;

import { useForm } from "react-hook-form";
import { Form, FormGroup, Input, Label, Select, Option, Error } from "../../ui/Form";
import styled from "styled-components";
import { useState } from "react";
import Button from "../../ui/Button";
import ChosenFiles from "../../ui/ChosenFiles";
import { usePortfolioData } from "../portfolio/usePortfolioData";
import Spinner from "../../ui/Spinner";
import toast from "react-hot-toast";
import { addPortfolioImages } from "../../services/apiPortfolioImages";

function AddNewImagesForm() {
  const { isLoading, portfolio, error } = usePortfolioData();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });
  const [chosenFiles, setChosenFiles] = useState([]);

  function handleFileChange(e) {
    const files = Array.from(e.target.files);
    setChosenFiles(files);
  }

  function onSubmit(data) {
    addPortfolioImages(data.category, Array.from(data.files));
    reset();
    toast.success("Fotografie úspešne pridané");
    setChosenFiles([])
    getValues()
  }

  function onError() {
    toast.error("Niečo sa nepodarilo");
  }

  if (isLoading) return <Spinner />;

  return (
    <Form bg="secondary" onSubmit={handleSubmit(onSubmit, onError)}>
      <FormGroup border="primary">
        <Label for="category">Kategória</Label>
        <Select
          {...register("category", {
            required: "Toto pole je povinné",
          })}
        >
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
        <Label for="files">
          Vyberte Fotografie {errors?.files?.message && <Error>{errors.files.message}</Error>}
        </Label>
        <Input
          type="file"
          id="files"
          multiple
          {...register("files", {
            required: "Prosím, vyberte aspoň jednu fotografiu",
            onChange: (e) => handleFileChange(e),
          })}
        />
      </FormGroup>
      <FormGroup border="primary">
        <Button color="primary">Odoslať</Button>
      </FormGroup>
      {chosenFiles.length > 0 && <ChosenFiles files={chosenFiles} />}
    </Form>
  );
}

export default AddNewImagesForm;

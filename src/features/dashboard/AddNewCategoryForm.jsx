import { useState } from "react";
import Button from "../../ui/Button";
import { Form, FormGroup, Input, Label, Error } from "../../ui/Form";
import ChosenFiles from "../../ui/ChosenFiles";
import { addPortfolioCategory } from "../../services/apiPortfolio";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function AddNewCategoryForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm();
  const [chosenFiles, setChosenFiles] = useState([]);
  const [name, setName] = useState("")

  function onSubmit(data) {
    addPortfolioCategory(data.name, data.image[0]);
    reset();
    toast.success("Kategória úspešne pridaná");
  }

  function handleFileChange(e) {
    const files = Array.from(e.target.files);
    setChosenFiles(files);
  }

  function onError() {
    toast.error("Niečo sa nepodarilo");
    console.log(getValues().name)
  }

  return (
    <Form bg="secondary" onSubmit={handleSubmit(onSubmit, onError)}>
      <FormGroup border="primary">
        <Label for="name">
          názov kategórie {errors?.name?.message && <Error>{errors.name.message}</Error>}
        </Label>
        <Input
          type="text"
          value={name}
          {...register("name", {
            required: "Toto pole je povinné",
            onChange: (e) => setName(e.target.value)
          })}
        ></Input>
      </FormGroup>
      <FormGroup border="primary">
        <Label for="image">
          Vyberte Titulnú fotografiu
          {errors?.image?.message && <Error>{errors.image.message}</Error>}
        </Label>
        <Input
          id="image"
          type="file"
          {...register("image", {
            required: "Prosím, vyberte titulnú fotografiu",
            onChange: (e) => handleFileChange(e),
          })}
        ></Input>
      </FormGroup>
      <FormGroup border="primary">
        <Button color="primary">Odoslať</Button>
      </FormGroup>
      {chosenFiles.length > 0 && <ChosenFiles type="category_cover" text={name} files={chosenFiles} />}
    </Form>
  );
}

export default AddNewCategoryForm;

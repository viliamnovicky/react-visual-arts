import { CheckBox, CheckBoxes, Form, FormGroup, Input, Label, Textarea } from "../../ui/Form";
import Button from "../../ui/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function AddNewProductForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm();
  const [chosenFiles, setChosenFiles] = useState([]);
  const [name, setName] = useState("");

  function onSubmit(data) {
    //addPortfolioCategory(data.name, data.image[0]);
    reset();
    toast.success("Produkt úspešne pridaný");
  }

  function handleFileChange(e) {
    const files = Array.from(e.target.files);
    setChosenFiles(files);
  }

  function onError() {
    toast.error("Niečo sa nepodarilo");
    console.log(getValues().name);
  }
  return (
    <Form bg="secondary" onSubmit={handleSubmit(onSubmit, onError)}>
      <FormGroup>
        <Label for="name">Názov produktu</Label>
        <Input type="text" id="name"></Input>
      </FormGroup>
      <FormGroup>
        <Label>Dostupné veľkosti</Label>
        <CheckBoxes>
          <CheckBox label="40x30"/>
          <CheckBox label="60x40"/>
          <CheckBox label="70x50"/>
          <CheckBox label="90x60"/>
        </CheckBoxes>
      </FormGroup>
      <FormGroup>
        <Label>Dostupné Materiály</Label>
        <CheckBoxes>
          <CheckBox label="hliník"/>
          <CheckBox label="plátno"/>
          <CheckBox label="plagát"/>
          <CheckBox label="akrylát"/>
          <CheckBox label="gallery"/>
          <CheckBox label="pvc"/>
          
        </CheckBoxes>
      </FormGroup>
      <FormGroup>
        <Label for="description">Popis produktu</Label>
        <Textarea id="description"></Textarea>
      </FormGroup>
      <FormGroup>
        <Label for="title">Titulná fotografia</Label>
        <Input type="file" id="title"></Input>
      </FormGroup>
      <FormGroup>
        <Label for="title">ďalšie fotografie</Label>
        <Input type="file" multiple id="title"></Input>
      </FormGroup>
      <FormGroup>
        <Button color="primary">Odoslať</Button>
      </FormGroup>
    </Form>
  );
}

export default AddNewProductForm;

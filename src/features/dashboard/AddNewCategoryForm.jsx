import { useState } from "react";
import Button from "../../ui/Button"
import { Form, FormGroup, Input, Label } from "../../ui/Form"
import ChosenFiles from "../../ui/ChosenFiles";

function AddNewCategoryForm() {
    const [chosenFiles, setChosenFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setChosenFiles(files);
  };
    return (
        <Form>
            <FormGroup>
                <Label for="name">názov kategórie</Label>
                <Input type="text"></Input>
            </FormGroup>
            <FormGroup>
                <Label for="image">Vyberte Titulnú fotografiu</Label>
                <Input type="file" onChange={handleFileChange}></Input>
            </FormGroup>
            <FormGroup>
                <Button>Odoslať</Button>
            </FormGroup>
            <ChosenFiles files={chosenFiles}/>
        </Form>
    )
}

export default AddNewCategoryForm

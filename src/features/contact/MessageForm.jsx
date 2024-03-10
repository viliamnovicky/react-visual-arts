import Button from "../../ui/Button";
import { Form, FormGroup, Input, Label, Textarea } from "../../ui/Form";

function MessageForm() {
  return (
    <Form>
      <FormGroup>
        <Label for="name">Meno a Priezvisko</Label>
        <Input type="text" id="name"></Input>
      </FormGroup>
      <FormGroup>
        <Label for="mail">Email</Label>
        <Input type="email" id="mail"></Input>
      </FormGroup>
      <FormGroup>
        <Label for="text">Správa</Label>
        <Textarea type="textarea" rows="10" id="text"></Textarea>
      </FormGroup>
      <FormGroup>
        <Button color="secondary">Odoslať</Button>
      </FormGroup>
    </Form>
  );
}

export default MessageForm;

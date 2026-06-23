import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { Modal } from "./Modal";
import { Button } from "../primitives/Button";
import { Field } from "../primitives/Field";
import { Input } from "../primitives/Input";

const meta: Meta = { title: "Overlays/Modal" };
export default meta;

export const CreateUser: StoryObj = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Create User"
          footer={
            <>
              <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={() => setOpen(false)}>Create</Button>
            </>
          }
        >
          <Field label="Email"><Input placeholder="user@sentra.local" /></Field>
          <Field label="Password"><Input type="password" /></Field>
        </Modal>
      </>
    );
  },
};

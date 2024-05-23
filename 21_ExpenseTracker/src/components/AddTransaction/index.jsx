import React, { useContext } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { GlobalContext } from "../../context/index.jsx";

const TransactionForm = ({ onClose, isOpen }) => {
  const {
    formData,
    setFormData,
    transactionType,
    setTransactionType,
    handleFormSubmit,
  } = useContext(GlobalContext);

  function handleFormChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(formData);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Enter Transaction Description</FormLabel>
              <Input
                placeholder={"Enter transaction description"}
                name={"description"}
                type={"text"}
                onChange={handleFormChange}
              />
              <FormLabel>Enter Amount</FormLabel>
              <Input
                placeholder={"Enter transaction amount "}
                name={"amount"}
                type={"number"}
                onChange={handleFormChange}
              />
            </FormControl>
            <RadioGroup
              mt={"5"}
              value={transactionType}
              onChange={setTransactionType}
            >
              <Radio
                name="type"
                colorScheme="blue"
                value={"income"}
                checked={formData.type === "income"}
                onChange={handleFormChange}
              >
                Income
              </Radio>
              <Radio
                name="type"
                colorScheme="red"
                value={"expense"}
                checked={formData.type === "expense"}
                onChange={handleFormChange}
              >
                Expense
              </Radio>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button mr={"4"} onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" onClick={onClose}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

export default TransactionForm;

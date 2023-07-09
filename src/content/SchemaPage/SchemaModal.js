import React, { useState, useRef } from 'react';
import { Modal, TextInput, TextArea } from '@carbon/react';

const SchemaModal = ({ open, setOpen }) => {
  const [invalidName, setNameInvalid] = useState(false);
  const [invalidDescription, setDescriptionInvalid] = useState(false);
  const [invalidDefinition, setDefinitionInvalid] = useState(false);
  const schemaNameRef = useRef();
  const schemaDescriptionRef = useRef();
  const schemaDefinitionRef = useRef();

  const clearForm = () => {
    schemaNameRef.current.value = '';
    schemaDescriptionRef.current.value = '';
    schemaDefinitionRef.current.value = '';
    setNameInvalid(false);
    setDescriptionInvalid(false);
    setDefinitionInvalid(false);
  };

  const submitHandler = e => {
    e.preventDefault();
    const name = schemaNameRef.current.value;
    if (name === '') {
      setNameInvalid(true);
      return;
    }

    const description = schemaDescriptionRef.current.value;
    if (description === '') {
      setDescriptionInvalid(true);
      return;
    }

    try {
      const definition = JSON.parse(schemaDefinitionRef.current.value);
      const data = { name, description, definition };
      console.log(data);
      clearForm();
      setOpen(false);
    } catch (err) {
      setDefinitionInvalid(true);
      return;
    }
  };

  return (
    <Modal
      open={open}
      modalHeading="Add a custom schema"
      modalLabel="Document Extraction Schemas"
      primaryButtonText="Add"
      secondaryButtonText="Cancel"
      onRequestSubmit={e => submitHandler(e)}
      onRequestClose={() => {
        setOpen(false);
        clearForm();
      }}>
      <p style={{ marginBottom: '1rem' }}>
        Custom schemas are used to extract structured data from free-from text
        or documents using Generative AI models. Use the{' '}
        <b>property description</b> field for the JSON schema to provide
        instructions for extracting the data for each field.
      </p>

      <TextInput
        data-modal-primary-focus
        id="schema-name"
        labelText="Schema name"
        placeholder="pwc-loe-schema"
        style={{ marginBottom: '1rem' }}
        ref={schemaNameRef}
        invalid={invalidName}
        invalidText="A schema name is required"
      />
      <TextInput
        data-modal-primary-focus
        id="schema-description"
        labelText="Schema description"
        placeholder="Extracts information from a letter of employment"
        style={{ marginBottom: '1rem' }}
        ref={schemaDescriptionRef}
        invalid={invalidDescription}
        invalidText="A schema description is required"
      />
      <TextArea
        data-modal-primary-focus
        id="schema-definition"
        invalidText="A valid JSON schema definition is required"
        labelText="Schema definition (type or copy and paste a valid JSON schema definition here)"
        placeholder="{&#10;'title': 'LetterOfEmploymentV1',&#10;'type': 'object',&#10;'properties': {...},&#10;'definitions': {...}&#10;}"
        rows={100}
        className="schema-page__textarea_json"
        ref={schemaDefinitionRef}
        invalid={invalidDefinition}
      />
    </Modal>
  );
};
export default SchemaModal;

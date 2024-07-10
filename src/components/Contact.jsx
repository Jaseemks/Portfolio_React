import React,{ useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Row, Col } from "react-bootstrap";
import './Contact.css';
import { toast } from 'react-toastify';
const Joi = require('joi');

export const Contact = () => {
  const formRef = useRef(null);
  const success = () => toast("Wow so easy!");
  const schema = Joi.object({
    firstName: Joi.string()
      .alphanum()
      .min(2)
      .max(30)
      .required()
      .label('First name'),

    lastName: Joi.string()
      .alphanum()
      .min(2)
      .max(30)
      .required()
      .label('Last name'),

    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .required()
      .label('Email'),

    city: Joi.string()
      .min(2)
      .required()
      .label('City'),

    state: Joi.string()
      .min(2)
      .required()
      .label('State'),

    zip: Joi.string()
      .required()
      .label('Zip'),
  });

  const handleSubmit = (data) => {
    data.preventDefault();
    const form = data.target;
    const formData = {
      firstName: form.validationCustom01.value,
      lastName: form.validationCustom02.value,
      email: form.validationCustomUsername.value,
      city: form.validationCustom03.value,
      state: form.validationCustom04.value,
      zip: form.validationCustom05.value,
    };

    const { error } = schema.validate(formData, { abortEarly: false });

    if (error) {
      error.details.forEach((detail) => {
        const element = form.elements[detail.path[0]];
        element.setCustomValidity(detail.message);
        element.reportValidity();
      });
    } else {
    
      console.log('Form submitted', formData);
      toast("Submitted Successfully")
      formRef.current.reset();
    }
  };

  return (
    <>
      <h2 className='h2'>Contact Me</h2>
      <Form ref={formRef} className='contact' onSubmit={handleSubmit} noValidate>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              name="firstName"
              type="text"
              placeholder="First name"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid first name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              name="lastName"
              type="text"
              placeholder="Last name"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid last name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                name="email"
                type="text"
                placeholder="Email"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control
              name="city"
              type="text"
              placeholder="City"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control
              name="state"
              type="text"
              placeholder="State"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              name="zip"
              type="text"
              placeholder="Zip"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
};
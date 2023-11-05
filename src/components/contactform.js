import { Formik, Field } from 'formik';
import { FormButton, FormContainer } from './styles/contactform.styles';

export const ContactForm = ({ submitButton }) => {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, actions) => {
          submitButton(values);
          actions.resetForm();
        }}
      >
        <FormContainer>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" placeholder="Jane" />

          <label htmlFor="number">Number</label>
          <Field id="number" name="number" placeholder="000-00-00" />

          <FormButton type="submit">Add contact</FormButton>
        </FormContainer>
      </Formik>
    </div>
  );
};

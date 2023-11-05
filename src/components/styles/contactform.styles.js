import styled from 'styled-components';
import { Form } from 'formik';

export const FormContainer = styled(Form)`
  padding: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormButton = styled.button`
  background-color: #33ff33;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.9);
`;

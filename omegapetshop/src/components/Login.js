import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form, Button } from 'react-bootstrap';

const schema = yup.object().shape({
  email: yup.string().email('Correo electrónico inválido').required('El correo electrónico es obligatorio'),
  password: yup.string().required('La contraseña es obligatoria'),
});

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    // Aquí iría la lógica para enviar los datos al backend
    console.log('Inicio de sesión exitoso:', data);
    alert('Inicio de sesión exitoso');
  };

  return (
    <div className="container mt-4">
      <h2>Iniciar Sesión</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formEmail">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control type="email" {...register('email')} isInvalid={!!errors.email} />
          <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" {...register('password')} isInvalid={!!errors.password} />
          <Form.Control.Feedback type="invalid">{errors.password?.message}</Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">Iniciar Sesión</Button>
      </Form>
    </div>
  );
}

export default Login;

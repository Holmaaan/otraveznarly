import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form, Button } from 'react-bootstrap';

const schema = yup.object().shape({
  username: yup.string().required('El nombre de usuario es obligatorio'),
  email: yup.string().email('Correo electrónico inválido').required('El correo electrónico es obligatorio'),
  password: yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es obligatoria'),
});

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    // Aquí iría la lógica para enviar los datos al backend
    console.log('Registro exitoso:', data);
    alert('Registro exitoso');
  };

  return (
    <div className="container mt-4">
      <h2>Registro</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formUsername">
          <Form.Label>Nombre de Usuario</Form.Label>
          <Form.Control type="text" {...register('username')} isInvalid={!!errors.username} />
          <Form.Control.Feedback type="invalid">{errors.username?.message}</Form.Control.Feedback>
        </Form.Group>

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

        <Button variant="primary" type="submit">Registrarse</Button>
      </Form>
    </div>
  );
}

export default Register;

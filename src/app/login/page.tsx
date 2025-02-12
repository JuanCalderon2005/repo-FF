"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import Input from "../../components/UI/Input/Input"
import Button from "../../components/UI/Button/Button"


const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 8px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorList = styled.ul`
  margin: 0;
  padding: 1rem;
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  list-style: none;
`;

const ErrorItem = styled.li`
  margin-bottom: 0.5rem;
`;

const LoginPage = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]);

    const responseNextAuth = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (responseNextAuth?.error) {
      setErrors(responseNextAuth.error.split(","));
      toast.error("Ocurrio un error");
      return;
    }

    toast.success("Login exitoso");
    router.push("/dashboard");

  };

  return (
    <Container>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button type="submit" label="Login" />
      </Form>

      {errors.length > 0 && (
        <ErrorList>
          {errors.map((error) => (
            <ErrorItem key={error}>{error}</ErrorItem>
          ))}
        </ErrorList>
      )}
    </Container>
  );
};

export default LoginPage;

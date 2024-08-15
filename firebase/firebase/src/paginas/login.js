import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_APIKEY);
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // salvando u usuario no local storage como httponly
          localStorage.setItem("user", JSON.stringify(user));
          
          //redirecionando para a pagina home
          window.location.href = "/home";
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Entrar</button>
        <br />
        <a href="/cadastro">Cadastre-se</a>
      </form>
    </div>
  );
};

export default LoginPage;

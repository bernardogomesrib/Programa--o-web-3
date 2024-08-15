import { getAuth, signOut } from "firebase/auth";

export default function Home() {
  //checando se existe o usuario no localstorage
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    window.location.href = "/";
  } else {
    return (
      <div>
        <h2>Home</h2>
        <p>Seja bem-vindo à página inicial!</p>
        {Object.entries(user).map(([key, value]) => (
          <p key={key.toString()}>
            {key.toString()}: {value.toString()}
          </p>
        ))}
        <h1>Informações do usuário</h1>
        {Object.entries(user.providerData).map(([key, value]) => (
          <p key={key.toString()}>
            {key.toString()}: {Object.entries(value).map(([key, value]) => (
              <p key={key}>
                {key}: {value}
              </p>
            ))}
          </p>
        ))}
        <button
          onClick={() => {
            const auth = getAuth();
            signOut(auth)
              .then(() => {
                // Sign-out successful.
                localStorage.removeItem("user");
                window.location.href = "/";
              })
              .catch((error) => {
                // An error happened.
                alert(error.message);
              });
          }}
        >
          Sair
        </button>
      </div>
    );
  }
}

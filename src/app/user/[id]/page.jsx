export default async function user({ params }) {
    const userId = params.id;

    const user = await fetch("http://localhost:3333/users")
        .then((response) => response.json())

    const userExibido = user[userId - 1];
  return (
  <>
    {userExibido.nome}
  </>
  );
}

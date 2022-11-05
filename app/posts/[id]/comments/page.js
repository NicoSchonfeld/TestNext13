const fetchCommentsPost = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  /* throw new Error("Error al cargar los comentarios"); */

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export default async function page({ params }) {
  const { id } = params;
  const comments = await fetchCommentsPost(id);

  return (
    <ul>
      {comments.map((dato, index) => (
        <li key={index}>
          <h2>{dato.name}</h2>
          <h5>{dato.body}</h5>
          <p>Email by {dato.email}</p>
        </li>
      ))}
    </ul>
  );
}

import Link from "next/link";
import LikeButton from "./LikeButton";

const fetchPosts = () => {
  /* el objeto next hace que se actualize cada x tiempo y vuelva a hacer un fetching de datos automaticamente. */

  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60 /* 1 minuto */,
    },
  }).then((res) => res.json());
};

export default async function Posts() {
  const posts = await fetchPosts();

  return (
    <section>
      {posts.slice(0, 5).map((dato, index) => (
        <article key={index}>
          <Link href={`/posts/${dato.id}`}>
            <h2>
              {dato.id} - {dato.title}
            </h2>
          </Link>
          <p>{dato.body}</p>
          <LikeButton id={dato.id} />
        </article>
      ))}
    </section>
  );
}

import Counter from "./Counter";

export default function PostsLayout({ children }) {
  return (
    <>
      <Counter />
      <marquee>Aprendiendo Next 13!!</marquee>
      {children}
    </>
  );
}

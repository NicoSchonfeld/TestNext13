import Image from "next/image";

export default function Page() {
  return (
    <>
      <h1>HOME</h1>
      <Image
        src={
          "https://i.picsum.photos/id/190/200/300.jpg?hmac=KMqZBOcb2v614PnLYdaZ_nsWFhVgoZrNcnRAiytDbVc"
        }
        width={200}
        height={300}
        alt="img lorem"
      />
    </>
  );
}

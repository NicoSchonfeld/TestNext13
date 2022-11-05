"use client"; /* Si agregamos use client, podemos generar un componente del lado del cliente, por defecto los componentes de next 13 son componentes del lado del servidor */

import React, { useState } from "react";

export default function LikeButton({ id }) {
  const [liked, setLiked] = useState(false);
  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? `😁 - ${id}` : `🤮 - ${id}`}
    </button>
  );
}

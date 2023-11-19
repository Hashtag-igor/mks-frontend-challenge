import React from 'react'

export default function Header() {
  return (
    <header style={{ background: "#0F52BA", width: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "90%", margin: "auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0 6px" }} aria-label="Logo e nome da empresa">
          <h1>MKS</h1><span>Sistemas</span>
        </div>
        <div>
          <span aria-label="carrinho">carrinho</span>
        </div>
      </div>
    </header>
  );
}


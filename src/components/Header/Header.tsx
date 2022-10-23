import React from "react";

export default function Header() {
  return (
    <header id="header" className="relative flex min-h-[calc(100vh-3.75rem)] flex-col justify-center bg-header-bg bg-no-repeat bg-cover bg-center-bottom text-center shadow-lg" style={{'zIndex': -1}}>
      <div>
        <div className="mx-auto h-40 w-40 overflow-hidden rounded-full ring-4 ring-primary">
          <img src="/avatar.jpeg" alt="photo-of-renan" width="160" />
        </div>
        <h1 className="mt-4 text-3xl md:text-3xl">Welcome to my page!</h1>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold text-primary">
          {"I'm glad you're here ;)"}
        </h2>
      </div>
    </header>
  );
}

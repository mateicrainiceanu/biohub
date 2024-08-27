import React, { ReactNode } from 'react'

function BigTitle({children}: {children:ReactNode}) {
  return <h1 className="text-3xl font-bold my-5">{children}</h1>;
}

function SectionHead({children}: {children:ReactNode}) {
  return <h2 className="text-2xl font-bold text-center my-5">{children}</h2>;
}

function SmallHead({children}: {children:ReactNode}) {
  return <h5 className="text-lg font-bold my-2">{children}</h5>;
}

function NormalText({children}: {children:ReactNode}) {
  return <p>{children}</p>;
}

export {BigTitle, SectionHead, SmallHead, NormalText}
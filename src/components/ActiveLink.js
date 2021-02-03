import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'

const ActiveLink = ({ href, children }) => {
  const router = useRouter()

  let className = children.props.className || ''
  if (router.pathname === href) {
    className = `${className} w-full flex justify-center border-b-4 border-blue-500 pb-2 transition duration-500`
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}

export default ActiveLink;
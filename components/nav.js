import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  { href: 'https://www.linkedin.com/in/caleb-coffie-b71730167/', label: 'LinkedIn' },
  { href: 'https://github.com/CCoffie', label: 'GitHub' }
].map(link => {
  link.key = `nav-link-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    <style jsx>{`
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: center;
        padding: 0;
      }
      li {
        display: flex;
        padding: 1em;
      }
      a {
        color: #19A123;
        /* text-decoration: none; */
        font-size: 3em;
        font-family: monospace;
      }
    `}</style>
  </nav>
)

export default Nav

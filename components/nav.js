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
        flex-wrap: wrap;
      }
      li {
        display: flex;
        padding: 1em;
      }
      a {
        color: #19A123;
        font-family: monospace;
      }
      @media screen and (min-width: 600px) {
        a {
          font-size: 3vw;
        }
      }
      @media screen and (min-width: 1200px) {
        a {
          font-size: 2em;
        }
      }
    `}</style>
  </nav>
)

export default Nav

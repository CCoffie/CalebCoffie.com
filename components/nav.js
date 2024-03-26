import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
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
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <Link href={href}>{label}</Link>
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
        color: #19A123;
        font-family: monospace;
        font-size: 1.5em;
      }
      @media screen and (min-width: 600px) {
        li {
          font-size: 1em;
        }
      }
      @media screen and (min-width: 1200px) {
        li {
          font-size: 1.5em;
        }
      }
    `}</style>
  </nav>
)

export default Nav

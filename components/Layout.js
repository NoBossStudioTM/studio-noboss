import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();

  const menuItems = [
    { name: 'Úvod', path: '/home' },
    { name: 'Reference', path: '/reference' },
    { name: 'Služby', path: '/sluzby' },
    { name: 'O nás', path: '/onas' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={router.pathname === item.path ? 'active-link' : ''}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className="container">{children}</main>
    </>
  );
}

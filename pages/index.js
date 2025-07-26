import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function IndexPage() {
  const router = useRouter()
  const [fadeOut, setFadeOut] = useState(false)

  const handleSecretClick = () => {
    setFadeOut(true)
    setTimeout(() => router.push('/home'), 800)
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#fff',
      fontFamily: 'Century Gothic, sans-serif',
      transition: 'opacity 0.8s ease',
      opacity: fadeOut ? 0 : 1
    }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
          Naše stránky právě vznikají.<br />Sledujte nás, brzy to spustíme.
        </p>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>
          No Boss Studio
          <span
            onClick={handleSecretClick}
            style={{
              cursor: 'pointer',
              marginLeft: '4px',
              color: '#555', // Jemně odlišená barva TM
              fontSize: '28px'
            }}
          >
            ™
          </span>
        </h1>
      </div>
    </div>
  )
}

import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      {/* Hero sekce */}
      <div className="hero-wrapper">
        <section className="hero-section">
          <div className="hero-content">
            <h2>Animace se načítají...</h2>
          </div>
        </section>
      </div>

      {/* Obsah pod animací */}
      <div className="section-header">
        <h1>Úvod</h1>
        <p>Hlavní stránka s nabídkami.</p>
      </div>
    </Layout>
  );
}
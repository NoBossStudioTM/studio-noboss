import Layout from '../components/Layout';

export default function Onas() {
    return (
        <Layout>
            <div className="section-header">
                <h1>O nás</h1>
                <p>Jsme dva architekti, kteří milují vizualizace a moderní design.</p>
            </div>
            <div className="squares-container">
                <div className="photo-rectangle">
                    <img 
                        src="/images/team/Tom.jpg" 
                        alt="Tom" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} 
                    />
                </div>
                <div className="photo-rectangle">
                    <img 
                        src="/images/team/Misa.jpg" 
                        alt="Míša" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} 
                    />
                </div>
            </div>
        </Layout>
    );
}

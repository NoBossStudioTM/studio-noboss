import Layout from '@/components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function ReferencePage() {
  const references = [
    { src: '/images/references/rd-ptice.jpg', alt: 'RD Ptice' },
    { src: '/images/references/example2.jpg', alt: 'Projekt 2' },
    { src: '/images/references/example3.jpg', alt: 'Projekt 3' },
    { src: '/images/references/example4.jpg', alt: 'Projekt 4' }
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % references.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + references.length) % references.length);
  };

  const handleClose = () => setSelectedIndex(null);

  return (
    <Layout>
      <section className="reference-section">
        <div className="section-header">
          <h1>Reference</h1>
          <p>Zde budou naše vizualizace a projekty.</p>
        </div>
        <div className="reference-gallery">
          {references.map((item, index) => (
            <motion.div
              key={index}
              className="reference-item"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              onClick={() => setSelectedIndex(index)}
              style={{ cursor: 'pointer', position: 'relative' }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="reference-image"
              />
              <div className="overlay">
                <span>{item.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0,0,0,0.8)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1000,
              flexDirection: 'column'
            }}
            onClick={handleClose}
          >
            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClose();
              }}
              style={{
                position: 'absolute',
                top: '20px',
                right: '30px',
                fontSize: '2rem',
                color: '#fff',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              ×
            </button>

            {/* Image */}
            <motion.img
              src={references[selectedIndex].src}
              alt={references[selectedIndex].alt}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={{
                maxWidth: '90%',
                maxHeight: '80%',
                borderRadius: '10px',
                boxShadow: '0 0 20px rgba(0,0,0,0.5)'
              }}
            />

            {/* Navigation arrows */}
            <div style={{ position: 'absolute', width: '100%', top: '50%', display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
              <button
                onClick={handlePrev}
                style={{
                  fontSize: '2.5rem',
                  color: '#fff',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                ‹
              </button>
              <button
                onClick={handleNext}
                style={{
                  fontSize: '2.5rem',
                  color: '#fff',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                ›
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}

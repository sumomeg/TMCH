// pages/index.tsx
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Welcome to TMCH</h1>
        <p>Your trusted partner in [industry/field]</p>
      </header>

      <section style={styles.aboutSection}>
        <h2>About Us</h2>
        <p>
          TMCH is dedicated to providing exceptional services and solutions to meet your needs. We pride ourselves on our expertise and commitment.
        </p>
      </section>

      <section style={styles.servicesSection}>
        <h2>Our Services</h2>
        <ul>
          <li>Service One</li>
          <li>Service Two</li>
          <li>Service Three</li>
        </ul>
      </section>

      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} TMCH. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: 'Arial, sans-serif',
    lineHeight: 1.6,
    margin: 0,
    padding: 0,
    color: '#333',
  },
  header: {
    backgroundColor: '#005A9C',
    color: '#fff',
    padding: '40px 20px',
    textAlign: 'center',
  },
  aboutSection: {
    padding: '20px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  servicesSection: {
    padding: '20px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  footer: {
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
    padding: '10px 20px',
    marginTop: '40px',
  },
};

export default HomePage;

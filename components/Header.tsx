import Link from 'next/link';
import { siteConfig } from '../config';
import styles from '../styles/Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <img 
            src="/images/logo-w@72x.png" 
            alt="Top Medical and Cosmetic Hub" 
            width={283} 
            height={170}
          />
        </Link>
      </div>
      
      <nav className={styles.nav}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/consultation-charges">Consultation Charges</Link></li>
          <li>
            <a 
              href="https://www.hotdoc.com.au/medical-centres/melbourne-VIC-3000/swanston-street-medical-centre/doctors" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Book Appointment
            </a>
          </li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className={styles.contactInfo}>
        <div>{siteConfig.contact.address}</div>
        <div>Phone: {siteConfig.contact.phone}</div>
        <div>Fax: {siteConfig.contact.fax}</div>
        <div>{siteConfig.contact.hours.weekdays}</div>
        <div>{siteConfig.contact.hours.saturday}</div>
      </div>
    </header>
  );
};

export type NavItem = {
  to: string;
  label: string;
  end?: boolean;
};

export const mainNav: NavItem[] = [
  { to: '/', label: 'Home', end: true },
  { to: '/catalog', label: 'Shop' },
  { to: '/orders', label: 'Orders' }
];

export type FooterLink = {
  to: string;
  label: string;
};

export type FooterSection = {
  title: string;
  links: FooterLink[];
};

export type SocialLink = {
  href: string;
  label: string;
};

export const footerSections: FooterSection[] = [
  {
    title: 'Help',
    links: [
      { to: '#', label: 'Contact Us' },
      { to: '#', label: 'Info' },
      { to: '#', label: 'Guide' }
    ]
  },
  {
    title: 'Company',
    links: [
      { to: '#', label: 'About Us' },
      { to: '#', label: 'Sustainability' },
      { to: '#', label: 'Careers' },
      { to: '#', label: 'Press' }
    ]
  }
];

export const footerSocials: SocialLink[] = [
  { href: '#', label: 'Instagram' },
  { href: '#', label: 'Twitter' },
  { href: '#', label: 'Pinterest' }
];
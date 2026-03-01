export type MainNavItem = {
  label: string;
  to: string;
};

export type FooterLink = {
  label: string;
  to: string;
};

export type FooterSection = {
  title: string;
  links: FooterLink[];
};

export type SocialLink = {
  label: string;
  href: string;
};

export const mainNav: MainNavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Company Registration', to: '/register-company' },
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'About', to: '/about' },
];

export const footerSections: FooterSection[] = [
  {
    title: 'Help',
    links: [
      { label: 'Contact Us', to: '#' },
      { label: 'Info', to: '#' },
      { label: 'Guide', to: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Sustainability', to: '#' },
      { label: 'Careers', to: '#' },
      { label: 'Press', to: '#' },
    ],
  },
];

export const footerSocials: SocialLink[] = [
  { label: 'Instagram', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'Pinterest', href: '#' },
];

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
  { label: 'Company Registration', to: '/company' },
  { label: 'Shareholder Registration', to: '/shareholder' },
  { label: 'Admin', to: '/admin' },
];

export const footerSections: FooterSection[] = [
  {
    title: 'Start',
    links: [
      { label: 'Company Registration', to: '/company' },
      { label: 'Shareholder Registration', to: '/shareholder' },
      { label: 'Admin Dashboard', to: '/admin' },
      { label: 'Home', to: '/' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '#' },
      { label: 'Terms of Service', to: '#' },
      { label: 'Cookies', to: '#' },
    ],
  },
];

export const footerSocials: SocialLink[] = [
  { label: 'Instagram', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'Pinterest', href: '#' },
];

export interface navLinkItem {
  text: string;
  link: string;
  newTab?: boolean; // adds target="_blank" rel="noopener noreferrer" to link
}

export interface navDropdownItem {
  text: string;
  dropdown: navLinkItem[];
}

export type navItem = navLinkItem | navDropdownItem;

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
  {
    text: 'Classes',
    dropdown: [
      {
        text: 'Schedule',
        link: '/schedule',
      },
      {
        text: 'Class Descriptions',
        link: '/class-descriptions',
      },
      {
        text: 'Pricing',
        link: '/pricing-packages',
      },
      {
        text: 'FAQ',
        link: '/frequently-asked-questions',
      },
      {
        text: 'Payment Policy',
        link: '/payment-policy',
      },
      {
        text: 'Register Now',
        link: '/register',
      },
    ],
  },
  {
    text: 'Instructors',
    link: '/instructors',
  },
  // {
  //   text: 'Hire Us',
  //   link: '/hire-us',
  // },
  {
    text: 'About Us',
    dropdown: [
      {
        text: 'Contact',
        link: '/contact-us',
      },
      {
        text: 'Dance Team',
        link: '/dance-team',
      },
      {
        text: 'Gift Certificates',
        link: '/gift-certificates',
      },
      {
        text: 'Videos',
        link: '/videos',
      },
    ],
  },
];

export default navConfig;

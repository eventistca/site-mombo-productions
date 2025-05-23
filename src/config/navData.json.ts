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
        link: '/site-mombo-productions/schedule',
      },
      {
        text: 'Class Descriptions',
        link: '/site-mombo-productions/class-descriptions',
      },
      {
        text: 'Pricing',
        link: '/site-mombo-productions/pricing-packages',
      },
      {
        text: 'FAQ',
        link: '/site-mombo-productions/frequently-asked-questions',
      },
      {
        text: 'Payment Policy',
        link: '/site-mombo-productions/payment-policy',
      },
      {
        text: 'Register Now',
        link: '/site-mombo-productions/register',
      },
    ],
  },
  {
    text: 'Instructors',
    link: '/site-mombo-productions/instructors',
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
        link: '/site-mombo-productions/contact-us',
      },
      {
        text: 'Dance Team',
        link: '/site-mombo-productions/dance-team',
      },
      {
        text: 'Gift Certificates',
        link: '/site-mombo-productions/gift-certificates',
      },
      {
        text: 'Videos',
        link: '/site-mombo-productions/videos',
      },
    ],
  },
];

export default navConfig;

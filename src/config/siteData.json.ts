export interface SiteDataProps {
  name: string;
  title: string;
  description: string;
  useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
  author: {
    name: string;
    email: string;
  };
  defaultImage: {
    src: string;
    alt: string;
  };
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
  name: 'Mambo Productions',
  // Your website's title and description (meta fields)
  title: 'Mambo Productions - Teaching Calgary to Dance since 2003',
  description:
    'Mambo Productions is a dance studio in Calgary, Alberta. We offer a variety of dance classes for all ages and skill levels.',
  useViewTransitions: true,
  // Your information!
  author: {
    name: 'Mambo Productions',
    email: 'info@mamboproductions.com',
  },

  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    src: '/site-mombo-productions/images/mamboproductions-logo.png',
    alt: 'Mambo Productions logo',
  },
};

export default siteData;

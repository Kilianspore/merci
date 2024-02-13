import Generator from 'react-router-sitemap-generator';
import Router from './sitemap';

const generator = new Generator(
  'https://caraman-optique.fr/',
  Router(),
  {
    lastmod: new Date().toISOString().slice(0, 10),
    changefreq: 'monthly',
    priority: 0.8,
  }
);
generator.save('public/sitemap.xml');

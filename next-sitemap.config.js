/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://glowfit2025.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  autoLastmod: false,
  exclude: ['/icon.png'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      }
    ]
  }
};
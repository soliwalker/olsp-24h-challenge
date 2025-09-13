import indexHtml from './../index.html';
import privacyHtml from './../privacy.html';
import termsHtml from './../terms.html';
import disclaimerHtml from './../disclaimer.html';
import pdfHtml from './../pdf.html';

const pages = {
  '/': indexHtml,
  '/index': indexHtml,
  '/privacy': privacyHtml,
  '/terms': termsHtml,
  '/disclaimer': disclaimerHtml,
  '/pdf': pdfHtml,
};

export default {
  async fetch(request) {
    const url = new URL(request.url);
    let path = url.pathname;

    // remove .html extension
    if (path.endsWith('.html')) {
      path = path.slice(0, -5);
    }

    const html = pages[path];

    if (html) {
      return new Response(html, {
        headers: { 'Content-Type': 'text/html' },
      });
    }

    return new Response('Not Found', { status: 404 });
  },
};
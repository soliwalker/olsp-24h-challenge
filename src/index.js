import indexHtml from './../index.html';
import privacyHtml from './../privacy.html';
import termsHtml from './../terms.html';
import disclaimerHtml from './../disclaimer.html';
import pdfHtml from './../pdf.html';

export default {
  async fetch(request) {
    const url = new URL(request.url);
    let path = url.pathname;

    if (path === '/' || path === '/index.html') {
      return new Response(indexHtml, {
        headers: { 'Content-Type': 'text/html' },
      });
    }
    if (path === '/privacy' || path === '/privacy.html') {
      return new Response(privacyHtml, {
        headers: { 'Content-Type': 'text/html' },
      });
    }
    if (path === '/terms' || path === '/terms.html') {
      return new Response(termsHtml, {
        headers: { 'Content-Type': 'text/html' },
      });
    }
    if (path === '/disclaimer' || path === '/disclaimer.html') {
      return new Response(disclaimerHtml, {
        headers: { 'Content-Type': 'text/html' },
      });
    }
    if (path === '/pdf' || path === '/pdf.html') {
      return new Response(indexHtml, {
        headers: { 'Content-Type': 'text/html' },
      });

    return new Response('Not Found', { status: 404 });
  },
};

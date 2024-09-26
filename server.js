// server.js
import { serve } from 'bun';
import { marked } from 'marked';

const PORT = 3001;

serve({
  port: PORT,
  fetch(request) {
    const { method, url } = request;
    const { pathname } = new URL(url);

    if (method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    if (method === 'POST' && pathname === '/api/convert') {
      return request.json().then((data) => {
        const markdown = data.markdown || '';
        const html = marked.parse(markdown);
        return new Response(JSON.stringify({ html }), {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      });
    }

    return new Response('Not Found', { status: 404 });
  },
});

console.log(`Backend server is running on http://localhost:${PORT}`);

// src/App.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import { MarkdownEditor } from './components/MarkdownEditor';
import { HTMLPreview } from './components/Preview';

export default function App() {
  const [markdown, setMarkdown] = useState(
    '# Welcome to Markdown Editor\n\nStart typing your markdown here...'
  );
  const [html, setHtml] = useState('');

  useEffect(() => {
    const convertMarkdown = async () => {
      try {
        const response = await axios.post('/api/convert', { markdown });
        setHtml(response.data.html);
      } catch (error) {
        console.error('Error converting markdown:', error);
      }
    };

    const debounce = setTimeout(() => {
      convertMarkdown();
    }, 300);

    return () => clearTimeout(debounce);
  }, [markdown]);

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 max-w-4/5 sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Markdown Editor
          </h1>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} />
            <HTMLPreview html={html} />
          </div>
        </div>
      </div>
    </div>
  );
}

// src/components/HTMLPreview.jsx
import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

export function HTMLPreview({ html }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [html]);

  return (
    <div className="w-full md:w-1/2 flex flex-col mt-4 md:mt-0">
      <h2 className="text-lg font-semibold mb-2 text-gray-700">HTML Preview</h2>
      <div
        className="flex-1 w-full p-4 border border-gray-300 rounded-lg overflow-auto bg-white markdown-body"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

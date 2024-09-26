export function MarkdownEditor({ markdown, setMarkdown }) {
    return (
      <div className="w-full md:w-1/2">
        <h2 className="text-lg font-semibold mb-2 text-gray-700">Markdown Input</h2>
        <textarea
          className="w-full h-96 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Enter your Markdown here..."
        />
      </div>
    );
  }
  
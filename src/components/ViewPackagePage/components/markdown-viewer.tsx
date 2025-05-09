import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"

export default function MarkdownViewer({
  markdownContent,
}: {
  markdownContent: string
}) {
  return (
    <div className="prose dark:prose-invert prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 prose-code:font-mono markdown-content">
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, className, children, ...props }) {
            const isCodeBlock =
              className?.includes("language-") || /\n/.test(String(children))

            // Don't use code tags cause of it's backticks not being removed
            return isCodeBlock ? (
              <div className="bg-gray-100 dark:bg-gray-800 rounded overflow-auto w-full">
                <span className="text-gray-800 dark:text-gray-200 font-mono whitespace-pre">
                  {children}
                </span>
              </div>
            ) : (
              <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 font-semibold font-mono dark:text-gray-200 px-1 py-0.5 rounded">
                {children}
              </span>
            )
          },
        }}
      >
        {markdownContent}
      </Markdown>
    </div>
  )
}

import CodeBlock from "./CodeBlock";


function CommentContent({ content }: { content: string }) {
  // Updated regex: removed required newline before closing ``` to make it more flexible
  const parts = content.split(/(```[\w-]*\n[\s\S]*?```)/g); // <-- CHANGED

  return (
    <div className="max-w-none text-white">
      {parts.map((part, index) => {
        if (part.startsWith("```")) {
          // Updated match regex to not require newline before ending ```
          const match = part.match(/```([\w-]*)\n([\s\S]*?)```/); // <-- CHANGED

          if (match) {
            const [, language, code] = match;
            return <CodeBlock language={language} code={code} key={index} />;
          }
        }

        return part.split("\n").map((line, lineIdx) => (
          <p key={lineIdx} className="mb-4 text-gray-300 last:mb-0">
            {line}
          </p>
        ));
      })}
    </div>
  );
}

export default CommentContent;

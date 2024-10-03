import Prism from "prismjs";

import * as React from "react";

export function CodeBlock({ children, "data-language": language }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current) Prism.highlightElement(ref.current, false);
  }, [children]);
  const [copied, setCopied] = React.useState(false);
  const CopyContent = () => {
    const el = document.createElement('textarea');
    el.value = children;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <div className="code" aria-live="polite">
      <pre ref={ref} className={`language-${language}`}>
        {children}
      </pre>
      <button className="copy" onClick={CopyContent}>
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <style jsx>
        {`
          .code {
            position: relative;
          }
          .copy {
            position: absolute;
            top: 0;
            right: 0;
            background: #cecece;
            border: none;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;
          }
          .copy:hover {
            background: #bcbcbc;
          }
          /* Override Prism styles */
          .code :global(pre[class*="language-"]) {
            text-shadow: none;
            padding: 10px 20px;
            border-radius: 6px;
            background: #cecece !important;
          }
        `}
      </style>
    </div>
  );
}

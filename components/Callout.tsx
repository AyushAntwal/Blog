import * as React from 'react';

export function Callout({ title, children }) {  
  return (
    <div className="callout">
      <strong>{title}</strong>
      <article>{children}</article>
      <style jsx>
        {`
          .callout {
            display: flex;
            flex-direction: column;
            padding: 6px 10px;
            background: #f6f9fc;
            border: 1px solid #dce6e9;
            border-radius: 4px;
          }
          .callout :global(p) {
            margin: 0;
          }
          article {
            max-width: 80%;
            }
        `}
      </style>
    </div>
  );
}

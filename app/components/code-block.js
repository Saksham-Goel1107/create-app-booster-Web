'use client';
import React, { useRef, useState, useEffect } from 'react';
import { useTheme } from '../actions/DarkMode';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';

const CodeBlock = ({ 
  code, 
  language = 'jsx', 
  showLineNumbers = true,
  fileName = null,
  output = null 
}) => {
  const { darkMode } = useTheme();
  const [copied, setCopied] = useState(false);
  const codeRef = useRef(null);
  const preRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const bgColor = darkMode ? 'bg-gray-900' : 'bg-gray-100';
  const textColor = darkMode ? 'text-gray-100' : 'text-gray-800';
  const headerBgColor = darkMode ? 'bg-gray-800' : 'bg-gray-200';
  const headerTextColor = darkMode ? 'text-gray-200' : 'text-gray-700';
  const outputBgColor = darkMode ? 'bg-gray-950' : 'bg-gray-50';
  const outputTextColor = darkMode ? 'text-gray-300' : 'text-gray-800';
  const borderColor = darkMode ? 'border-gray-700' : 'border-gray-300';
  const buttonBgColor = darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-blue-500 hover:bg-blue-600';
  const buttonTextColor = 'text-white';
  const lineNumbersColor = darkMode ? 'text-gray-500' : 'text-gray-400';

  return (
    <div className={`w-full my-6 rounded-lg overflow-hidden border ${borderColor} shadow-lg`}>
      {fileName && (
        <div className={`${headerBgColor} ${headerTextColor} text-sm px-4 py-2 font-mono flex justify-between items-center border-b ${borderColor}`}>
          <span>{fileName}</span>
        </div>
      )}
      <div className="relative">
        <pre 
          className={`${bgColor} ${textColor} p-4 overflow-x-auto font-mono text-sm`}
          style={{ 
            scrollbarWidth: 'thin',
            scrollbarColor: darkMode ? '#4a5568 #2d3748' : '#cbd5e0 #edf2f7',
            overflowX: 'auto',
            maxWidth: '100%'
          }}
          ref={preRef}
        >
          {showLineNumbers && (
            <div className={`absolute left-0 top-0 pl-2 py-4 pr-4 ${lineNumbersColor} select-none border-r ${borderColor} h-full ${bgColor} z-10`}>
              {code.split('\n').map((_, i) => (
                <div key={i} className="text-right leading-relaxed">
                  {i + 1}
                </div>
              ))}
            </div>
          )}
          <code 
            className={`language-${language} syntax-highlighted`} 
            ref={codeRef}
            style={{ 
              marginLeft: showLineNumbers ? '2.5rem' : 0,
              display: 'inline-block',
              minWidth: 'calc(100% - 2.5rem)',
              position: 'relative',
              wordWrap: 'normal',
              whiteSpace: 'pre'
            }}
          >
            {code}
          </code>
        </pre>
        <button 
          onClick={copyToClipboard}
          className={`absolute top-2 right-2 p-2 rounded ${buttonBgColor} ${buttonTextColor} text-xs transition-colors cursor-pointer`}
          aria-label="Copy code to clipboard"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      {output && (
        <div className={`border-t ${borderColor}`}>
          <div className={`${headerBgColor} ${headerTextColor} text-sm px-4 py-2 font-mono border-b ${borderColor}`}>
            <span>Output</span>
          </div>
          <div className={`${outputBgColor} p-4 ${outputTextColor} font-mono text-sm overflow-x-auto whitespace-pre`}>
            {output}
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeBlock;
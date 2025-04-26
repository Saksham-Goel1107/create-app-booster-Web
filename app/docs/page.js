import React from 'react'
import CodeBlock from '../components/code-block'

const DocsPage = () => {
  const installationCode = `# Using npm
npm create app-booster@latest my-app

# Using yarn
yarn create app-booster my-app

# Using pnpm
pnpm create app-booster my-app;

#Or
npm i create-app-booster -g
create-app-booster
`

  const installationOutput = `Creating a new app-booster project in /Users/username/my-app...


  > npx
  > create-app-booster my-app
  
  🚀 Welcome to App Booster! Let's set up your project.
  ? What type of project do you want to create? React with Vite
  ? Which package manager do you want to use? npm
  ? Which language option do you want to use? JavaScript
  ? You selected javascript. Is this correct? Yes
  ? Select additional setup options: ESLint and Prettier, Jest for testing, GitHub Actions for CI/CD, 
  Snyk for security scanning, Husky for Git hooks, Git initialization
  ? Which deployment platform would you like to configure? Vercel
  ? Would you like to proceed with these settings? Yes
  
  🛠️  Creating your project...
  ⠹ Installing dependencies...
  ✔ Project my-app created successfully in 100 seconds!

✅ Everything is set up and ready to go!
🚀 You can start coding right away.

To get started:
  cd my-app
  npm run dev

Available commands:
  npm run dev
  npm run build
  npm test
  npm run lint
  npm run lint:fix

Happy coding! 🎉`;

  const nextjsComponentCode = `// components/Button.js
import React from 'react';

const Button = ({ children, onClick, variant = 'primary' }) => {
  return (
    <button 
      onClick={onClick}
      className={\`px-4 py-2 rounded font-medium 
        \${
          variant === 'primary' 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }\`}
    >
      {children}
    </button>
  );
};

export default Button;`;

  const reactHookExample = `import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures effect runs only on mount and unmount

  return windowSize;
}`;

  const hookUsageExample = `import useWindowSize from './hooks/useWindowSize';

function ResponsiveComponent() {
  const { width, height } = useWindowSize();
  
  return (
    <div>
      <p>Window width: {width}px</p>
      <p>Window height: {height}px</p>
      {width < 768 ? (
        <p>You are on a mobile device</p>
      ) : (
        <p>You are on a desktop</p>
      )}
    </div>
  );
}`;

  const hookUsageOutput = `// Rendered output (will vary based on browser size)
Window width: 1024px
Window height: 768px
You are on a desktop`;

  return (
    <div className="container mx-auto px-4 py-8 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">Documentation</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Getting Started</h2>
        <p className="mb-4 dark:text-gray-300">
          Create a new app using the following commands. Choose the package manager you prefer:
        </p>
        <CodeBlock 
          code={installationCode}
          language="bash"
          fileName="Terminal"
          output={installationOutput}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Component Examples</h2>
        <p className="mb-4 dark:text-gray-300">
          Here is an example of a reusable Button component for your Next.js application:
        </p>
        <CodeBlock 
          code={nextjsComponentCode}
          language="jsx"
          fileName="components/Button.js"
        />
        <p className="mt-6 mb-4 dark:text-gray-300">
          You can use this Button component in your pages or other components:
        </p>
        <CodeBlock 
          code={`import Button from '../components/Button';

export default function HomePage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to My App</h1>
      <div className="flex space-x-4">
        <Button onClick={() => console.log('Primary clicked')}>
          Primary Button
        </Button>
        <Button variant="secondary" onClick={() => console.log('Secondary clicked')}>
          Secondary Button
        </Button>
      </div>
    </div>
  );
}`}
          language="jsx"
          fileName="app/page.js"
          output={`// Renders as:
Welcome to My App
[Primary Button] [Secondary Button]`}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">React Hooks</h2>
        <p className="mb-4 dark:text-gray-300">
          Create custom hooks to reuse stateful logic between components:
        </p>
        <CodeBlock 
          code={reactHookExample}
          language="jsx"
          fileName="hooks/useWindowSize.js"
        />
        <p className="mt-6 mb-4 dark:text-gray-300">
          You can use this custom hook in any component:
        </p>
        <CodeBlock
          code={hookUsageExample}
          language="jsx"
          fileName="components/ResponsiveComponent.js"
          output={hookUsageOutput}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Additional Resources</h2>
        <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
          <li>
            <a 
              href="https://nextjs.org/docs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Next.js Documentation
            </a>
          </li>
          <li>
            <a 
              href="https://react.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              React Documentation
            </a>
          </li>
          <li>
            <a 
              href="https://tailwindcss.com/docs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Tailwind CSS Documentation
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default DocsPage

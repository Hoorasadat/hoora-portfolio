import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout/Layout.jsx';
import Main from './pages/Main/Main.jsx';
import Dotnet from './pages/Dotnet/Dotnet.jsx';
import React from './pages/React/React.jsx';
import HtmlCss from './pages/HtmlCss/HtmlCss.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Main
      },
      {
        path: 'csharp-dotnet',
        Component: Dotnet,
      },
      {
        path: 'react-node',
        Component: React,
      },
      {
        path: 'html-css-js',
        Component: HtmlCss,
      }
    ]
  }
]);

function App() {

  // Scroll to the top when the component mounts
  const [scrollToTop, setScrollToTop] = useState(false);

  useEffect(() => {
    if (scrollToTop) {
      window.scrollTo(0, 0);

      // Reset the state to false to avoid infinite loops
      setScrollToTop(false);
    }
  }, [scrollToTop]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      // Set the state to true when the page is about to unload (before refresh)
      setScrollToTop(true);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <RouterProvider router={router} />
  );
}

export default App;

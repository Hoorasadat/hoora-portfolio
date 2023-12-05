import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './sections/Main';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Main,

    children: [
      {
        index: true,
        Component: Main
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

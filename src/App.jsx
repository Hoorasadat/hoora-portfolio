import { useEffect } from 'react';
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

  useEffect(() => {
    const handleScroll = () => {
      window.scrollTo(0, 0);
    };

    // Add event listener for scrolling
    window.addEventListener('scroll', handleScroll);

    // Check if the page is being reloaded
    if (window.performance && window.performance.navigation.type === 1) {
      // Delay scrolling to the top
      setTimeout(() => {
        window.scrollTo(0, 0);
        // Remove the event listener after scrolling
        window.removeEventListener('scroll', handleScroll);
      }, 1000);
    }

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <RouterProvider router={router} />
  );
}

export default App;

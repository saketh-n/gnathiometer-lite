import { useLocation, Link } from "react-router-dom";
import { routesConfig } from "../routesConfig";

/**
 * NotFound component displayed when a user navigates to a route that does not
 * match any defined paths. It lists links to all public routes defined in the
 * application to help users find their way.
 *
 * @returns {React.JSX.Element} A component displaying a message that the
 * current page does not exist and providing links to other pages.
 */
export const NotFound = () => {
  const location = useLocation();
  const publicRoutes = routesConfig.filter((route) => route.path !== "*");

  return (
    <div className="flex flex-wrap justify-center">
      <h1
        data-testid="not-found-title"
        className="w-full text-3xl font-bold text-center my-6"
      >
        The page {location.pathname} does not exist
      </h1>
      <p className="w-full text-center mb-4">Here are some pages that do:</p>
      {publicRoutes.map((route) => (
        <div
          key={route.path}
          className="w-1/2 lg:w-1/4 p-4 border-gray-300 bg-gray-300 border-4 rounded-md mx-4 my-2"
        >
          <h2 className="text-xl font-semibold text-center">
            <Link to={route.path} className="text-blue-600 hover:text-blue-800">
              {route.title}
            </Link>
          </h2>
          <p className="mt-2 text-gray-600 text-center">{route.about}</p>
        </div>
      ))}
    </div>
  );
};

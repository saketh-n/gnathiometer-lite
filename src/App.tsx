import {
  HashRouter as Router,
  MemoryRouter,
  Routes,
  Route,
} from "react-router-dom";
import { routesConfig } from "./routesConfig";

// Only for testing
type AppProps = {
  useTestRouter?: boolean;
  initialEntries?: string[];
};

/**
 * @param {string[]} [props.intialEntries = ["/"]] Initial navigation entries for
 * MemoryRouter in testing.
 * @param {boolean} [props.useTestRouter=false] Determines whether to use
 * MemoryRouter for testing.
 * @returns {React.JSX.Element} Routed Single Page Gnathiometer
 */
export const App = ({
  useTestRouter = false,
  initialEntries = ["/"],
}: AppProps): React.JSX.Element => {
  const RouterComponent = useTestRouter ? MemoryRouter : Router;
  const routerProps = useTestRouter ? { initialEntries } : {};

  return (
    <RouterComponent {...routerProps}>
      <Routes>
        {routesConfig.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </RouterComponent>
  );
};

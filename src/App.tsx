import {
  HashRouter as Router,
  MemoryRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { UploadGrowth } from "./pages/UploadGrowth";
import { MeasureGrowth } from "./pages/MeasureGrowth";

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
// TODO: Needs to handle exact routes, 404 Page
export const App = ({
  useTestRouter = false,
  initialEntries = ["/"],
}: AppProps): React.JSX.Element => {
  const RouterComponent = useTestRouter ? MemoryRouter : Router;
  const routerProps = useTestRouter ? { initialEntries } : {};

  return (
    <RouterComponent {...routerProps}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload-growth" element={<UploadGrowth />} />
        <Route path="/measure-growth" element={<MeasureGrowth />} />
      </Routes>
    </RouterComponent>
  );
};

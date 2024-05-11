import { Suspense } from "react";
import PrimaryLayout from "./layout/PrimaryLayout";
import GlobalLoader from "./components/Shared/Loader/GlobalLoader";
import { SidebarProvider } from "./hooks/SidebarProvider";

const App = () => {
  return (
    <SidebarProvider>
      <Suspense fallback={<GlobalLoader />}>
        <PrimaryLayout />
      </Suspense>
    </SidebarProvider>

  );
};

export default App;
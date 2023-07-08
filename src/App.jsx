import Navbar from "./components/Navbar";
import EditorsChoice from "./components/EditorsChoice";
import Categories from "./components/Categories";
import TopChart from "./components/TopChart";
import RecentUpdate from "./components/RecentUpdate";
import Footer from "./components/Footer";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <div id={theme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {/* Navbar component */}
        <Navbar />

        <div className="px-4 sm:px-14 ">
          {/* EditorsChoice component */}
          <EditorsChoice />

          {/* Categories component */}
          <Categories />

          {/* TopChart component */}
          <TopChart />

          {/* RecentUpdate component */}
          <RecentUpdate />

          {/* Footer component */}
          <Footer />
        </div>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;

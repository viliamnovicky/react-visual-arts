import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Portfolio from "./pages/Portfolio";
import Pricelist from "./pages/Pricelist";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Admin from "./pages/Admin";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import { getPortfolio } from "./services/apiPortfolio";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PortfolioImages from "./features/portfolio/PortfolioImages";
import AddNewImagesForm from "./features/dashboard/AddNewImagesForm";
import AddNewCategoryForm from "./features/dashboard/AddNewCategoryForm";
import GlobalStyles from "./styles/GlobalStyles";
import AddNewBlogForm from "./features/dashboard/AddNewBlogForm";
import AddNewProductForm from "./features/dashboard/AddNewProductForm";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="domov" element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/:id" element={<PortfolioImages />} />
          <Route path="obchod" element={<Store />} />
          <Route path="cennik" element={<Pricelist />} />
          <Route path="kontakt" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="admin" element={<Admin />}>
            <Route path="new-image" element={<AddNewImagesForm />} />
            <Route path="new-category" element={<AddNewCategoryForm />} />
            <Route path="new-blog" element={<AddNewBlogForm />} />
            <Route path="new-product" element={<AddNewProductForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={
          ({ succes: { duration: 3000 } },
          { error: { duration: 3000 } },
          {
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-light)",
              color: "var(--color-grey)",
            },
          })
        }
      />
    </QueryClientProvider>
  );
}

export default App;

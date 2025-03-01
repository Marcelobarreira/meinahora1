import CheckoutReturnPage from "./payment-confirmation/page";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center py-40">
        <CheckoutReturnPage />

      </main>
      <Footer />
    </div>
  );
}

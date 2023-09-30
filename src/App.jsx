import { Nav, Hero, CustomerReviews, Footer, PopularProducts, Services, SpecialOffers, SuperQuality, Suscribe } from "./components"

const App = () => (
  <main className="relative scroll-smooth">
    <Nav />

    <section className="xl:mx-20 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffers />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Suscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>

  </main>
);

export default App;
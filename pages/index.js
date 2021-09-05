import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard  from "../components/LargeCard";
import Footer from "../components/Footer";

const Home = ({ exploreData, cardsData }) => {
  return (
    <div className="">
      <head>
        <title>Aasish Airbnb</title>
      </head>
      <Header />
      {/* Banner */}
      <Banner />

      <main className="px-8 mx-auto max-w-7xl sm:px-16">
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>
          {/* pull some data from a server- API endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard
                key={item.img}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="py-8 text-4xl font-semibold">Live Anywhere</h2>
          <div className="flex p-3 -ml-3 space-x-3 overflow-scroll scrollbar-hide">
          {cardsData?.map(({img, title}) => (
            <MediumCard key={img} img={img} title={title} />
          ))}
          </div>
        </section>
        <LargeCard img="https://links.papareact.com/4cj"
        title="The Greatest Outdoors"
        description="Wishlists curated by Airbnb"
        buttonText="Get Inspired"
        />
      </main>

      <Footer/>
    </div>
  );
};

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}

export default Home;

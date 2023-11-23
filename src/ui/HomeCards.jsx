import Card from "./Card";

function HomeCards() {
  return (
    <div className="flex justify-center items-start mt-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-6">
        <Card
          title="Who Are We"
          content="CTOs of Tronlabs are Hannan Zubair and Osama Bessissou"
        />
        <Card
          title="Services"
          content="We build web applications integrated with OpenAI"
        />
        <Card
          title="Mission"
          content="Our mission is to build projects that push the boundaries of
          technology and creativity."
        />
      </div>
    </div>
  );
}

export default HomeCards;

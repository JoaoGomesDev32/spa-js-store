import { Navbar } from "../../components/Navbar/Navbar";
import { Card } from "../../components/Card/Card";
import { Products } from "../../Datas";

export default function Home() {
  return (
    <>
      {/* Frogment */}
      <Navbar />
      {Products.map((item, index) => {
        return <Card key={index} props={item} />;
      })}
    </>
  );
}

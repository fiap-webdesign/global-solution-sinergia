import Benefits from "../../components/Benefits";
import Header from "../../components/Header";
import Newsletter from "../../components/Newsletter";
import { ContainerChatBot } from "./styles";

export default function Home() {
  return (
    <>
      <Header />
      <Benefits />

      <ContainerChatBot>
        <div className="container">
          <h2 className="text-center">ChatBot Section</h2>
        </div>
      </ContainerChatBot>

      <Newsletter />
    </>
  );
}
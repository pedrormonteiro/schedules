import Header from "@/components/Header";
import Schedules from "@/components/Schedules";

export default function Home() {
  return (
    <>
      <Header />
      <Schedules />
      <footer className="mx-auto mt-auto pt-8 pb-3">
        <p>
          Made with 💜 by <a href="https://pmonteiro.dev">Pedro Monteiro</a>
        </p>
      </footer>
    </>
  );
}

import Head from "next/head";
import { Header } from "../components/Header";
import { Service } from "../components/Service";
import { TestimonialList } from "../components/TestimonialList";
import { Footer } from "../components/Footer";
import { InfoContact } from "../components/InfoContact";

export default function Home() {
  return (
    <>
      <Head>
        <title>MK Salon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Service />
      <TestimonialList />
      <InfoContact>
        <Footer />
      </InfoContact>
    </>
  );
}

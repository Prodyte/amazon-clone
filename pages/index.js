import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import ProductFeed from '../components/ProductFeed';

export default function Home({ res }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon clone</title>
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/* banner */}
        <Banner />
        {/* Product Feed */}
        <ProductFeed products={res} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products');
  const res = await products.json();
  return {
    props: {
      res,
    },
  };
}

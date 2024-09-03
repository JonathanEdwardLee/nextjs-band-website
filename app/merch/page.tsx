import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TiltLogo from "../components/TiltLogo";

const products = [
  {
    title: "Mystique of Mycelium Unisex Cotton Tee",
    link: "https://leadershipclass.myshopify.com/products/mushroom-logo-unisex-cotton-tee-leadership-class?utm_source=copyToPasteBoard&utm_medium=product-links&utm_content=web",
    imageUrl:
      "https://leadershipclass.myshopify.com/cdn/shop/files/15663542814501552603_2048.jpg?v=1717423008&width=823",
  },
  {
    title: "Mystique of Mycelium Vinyl Sticker",
    link: "https://leadershipclass.myshopify.com/products/mystique-of-mycelium-logo-kiss-cut-vinyl-decals-leadership-class?utm_source=copyToPasteBoard&utm_medium=product-links&utm_content=web",
    imageUrl:
      "https://leadershipclass.myshopify.com/cdn/shop/files/11914330033628650779_2048.jpg?v=1717423810&width=823",
  },
  {
    title: "Leadership Class Wreath Logo - Unisex Cotton Tee",
    link: "https://leadershipclass.myshopify.com/products/leadership-class-wreath-logo-unisex-heavy-cotton-tee?utm_source=copyToPasteBoard&utm_medium=product-links&utm_content=web",
    imageUrl:
      "https://leadershipclass.myshopify.com/cdn/shop/files/7689531186925326727_2048.jpg?v=1717427915&width=823",
  },
  {
    title: "Leadership Class Wreath Logo - Vinyl Sticker",
    link: "https://leadershipclass.myshopify.com/products/leadership-class-wreath-logo-vinyl-sticker?utm_source=copyToPasteBoard&utm_medium=product-links&utm_content=web",
    imageUrl:
      "https://leadershipclass.myshopify.com/cdn/shop/files/14687510677452543933_2048.jpg?v=1717426453&width=823",
  },
];

const MerchPage = () => {
  return (
    <>
      <Head>
        <title>Leadership Class Merch - Official Band Merchandise</title>
        <meta
          name="description"
          content="Shop official Leadership Class merchandise. T-shirts, stickers, buttons, hats, and more from Springfield's premier alt-rock band. Support local music with our Shopify store."
        />
        <meta
          name="keywords"
          content="Leadership Class, merchandise, band merch, t-shirts, stickers, buttons, hats, Shopify, Springfield Missouri, alt-rock"
        />
      </Head>
      <Header />
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-center text-3xl font-bold mb-2">
          Official Merch from{" "}
          <span className="relative group inline-block">
            <span className="relative z-10 leadership-class-text">
              Leadership Class
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 z-0"></span>
          </span>
        </h2>
        <p className="text-center text-lg mb-8 text-gray-300">
          Support your favorite Springfield alt-rock band with our exclusive
          merchandise. Shirts, stickers, and more available on our Shopify
          store!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-muted text-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={400}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-3">{product.title}</h3>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-custom inline-block"
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 mb-8">
          <p className="text-lg mb-4">
            To view our entire catalog of unique merch
          </p>
          <a
            href="https://leadershipclass.myshopify.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-custom inline-block"
          >
            Visit Our Shopify Store
          </a>
        </div>
      </main>
      <TiltLogo />
      <Footer />
    </>
  );
};

export default MerchPage;

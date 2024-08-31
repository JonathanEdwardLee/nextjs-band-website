import Image from "next/image";

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
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-center text-3xl font-bold my-8">Classy Merch!!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
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
                className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 transition-colors duration-300"
              >
                Buy Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MerchPage;

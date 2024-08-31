import { Metadata } from "next";

interface HeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export function generateMetadata({
  title,
  description,
  keywords = "Leadership Class, alt rock, music band, Springfield MO, live shows, original music, alternative rock, band merch",
  image = "/images/LC_band_photo.jpg",
  url = "https://www.leadershipclassmusic.com",
}: HeadProps): Metadata {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      images: [image],
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}

// You can keep this if you need to render anything in the component
const CustomHead: React.FC<HeadProps> = (props) => {
  return null; // or any JSX if needed
};

export default CustomHead;

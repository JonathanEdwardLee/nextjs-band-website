import Head from "next/head";

const FEATURED_VIDEOS = [
  {
    id: "Dh7-_kkNp1k",
    title: 'Leadership Class - "Here We Go" (Official Music Video)',
  },
  {
    id: "4R2wWkddS7s",
    title: 'Leadership Class - "Mushroom Lady" (Official Music Video)',
  },
];

const PLAYLISTS = [
  {
    id: "PLZWzdoJ0kxmBFT85RcJJ8ivxjEzXQl5AV",
    title: "Leadership Class - Music Videos",
  },
];

const VideosPage = () => {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Videos - Leadership Class</title>
        <meta
          name="description"
          content="Watch music videos and live performances by Leadership Class, an alternative rock band from Springfield, MO."
        />
      </Head>

      <h2 className="text-center text-2xl font-bold my-8">Videos</h2>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Featured Videos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FEATURED_VIDEOS.map((video) => (
            <div key={video.id} className="aspect-w-16 aspect-h-9">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
              <p className="mt-2 font-semibold">{video.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Music Video Playlist</h3>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={`https://www.youtube.com/embed/videoseries?list=${PLAYLISTS[0].id}`}
            title={PLAYLISTS[0].title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        <p className="mt-2 font-semibold">{PLAYLISTS[0].title}</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">More Videos</h3>
        <p className="mb-4">
          Check out our YouTube channel for more videos and updates:
        </p>
        <a
          href="https://www.youtube.com/@LeadershipClass"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
        >
          Visit Our YouTube Channel
        </a>
      </section>
    </div>
  );
};

export default VideosPage;

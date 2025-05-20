interface PostGalleryVideosProps {
  title: string;
  videos?: [[string, number]];
}

export const PostGalleryVideos = ({
  title,
  videos,
}: PostGalleryVideosProps) => {
  const firstVideo =
    videos?.length > 0 ? videos.find((video) => video[1] === 1) : null;

  const galleryVideos =
    videos?.length > 0
      ? videos.filter((video) => video[1] !== 1).sort((a, b) => a[1] - b[1])
      : [];

  return (
    <>
      {firstVideo && (
        <iframe
          data-aos="fade-in"
          key={firstVideo[1]}
          width="560"
          height="640"
          src={firstVideo[0]}
          title={title}
          loading="lazy"
          className="border-none w-full aspect-video mb-4"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
      {galleryVideos.length > 0 && (
        <div className="grid grid-cols-[repeat(auto-fit,33%)] gap-1 justify-center mb-12">
          {galleryVideos.map((video, idx) => (
            <iframe
              loading="lazy"
              data-aos="fade-in"
              key={idx}
              width="0"
              height="0"
              src={video[0]}
              title={title}
              className="border-none w-full h-auto"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      )}
    </>
  );
};

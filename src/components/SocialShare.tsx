import { ShareSocial } from "react-share-social";

interface SocialShareProps {
  title?: string
  titleColor?: string
  url?: string
}

export const SocialShare = ({title, titleColor, url}:SocialShareProps) => {
  return (
    <ShareSocial
      title={title}
      style={{
        title: {
          fontFamily: "Open Sans, sans-serif",
          fontSize: 14,
          ...titleColor && { color: titleColor },
        },
        copyContainer: { display: "none" },
        root: {
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          background: "rgba(255,255,255,0)",
          padding: 0,
          margin: 0,
          gap: 10,
        },
      }}
      url={url}
      socialTypes={["facebook", "twitter", "whatsapp", "telegram"]}
    />
  );
};

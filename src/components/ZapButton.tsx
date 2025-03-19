import { WhatsApp } from "@/lib/whatsapp";
import { ReactNode, useEffect, useState } from "react";

interface ZapButtonProps {
  text?: string;
  phone: string;
  className: string;
}

export const ZapButton = (props: ZapButtonProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window?.matchMedia("(max-width:768px)").matches) setIsMobile(true);
  }, []);

  return (
    <a
      href={
        isMobile
          ? `https://api.whatsapp.com/send?phone=${props.phone.trim()}&text=${props.text.trim()}`
          : `https://web.whatsapp.com/send?phone=${props.phone.trim()}&text=${props.text.trim()}`
      }
      target="_blank"
      rel="noopener"
      referrerPolicy="no-referrer"
      className={props.className}
    >
      <WhatsApp className="fill-white inline-block -mt-1" /> WhatsApp
    </a>
  );
};

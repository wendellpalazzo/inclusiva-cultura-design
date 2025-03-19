import { cn } from "@/lib/utils";
import { WhatsApp } from "@/lib/whatsapp";
import { ClassValue } from "clsx";
import { ReactNode, useEffect, useState } from "react";

interface ZapButtonProps {
  text?: string;
  phone: string;
  className?: string;
  showText?: string;
  iconClass?: string
}

export const ZapButton = ({iconClass, text, phone, className, showText = "WhatsApp"}: ZapButtonProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window?.matchMedia("(max-width:768px)").matches) setIsMobile(true);
  }, []);

  return (
    <a
      href={
        isMobile
          ? `https://api.whatsapp.com/send?phone=${phone.trim()}&text=${text.trim()}`
          : `https://web.whatsapp.com/send?phone=${phone.trim()}&text=${text.trim()}`
      }
      target="_blank"
      rel="noopener"
      referrerPolicy="no-referrer"
      className={className}
    >
      <WhatsApp className={cn([
        "fill-white inline-block -mt-1 text-2xl mr-2",
        iconClass        
        ])} /> {showText}
    </a>
  );
};

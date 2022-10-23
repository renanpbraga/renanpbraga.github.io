import { useState, useEffect } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export default function BackToTop() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (scrollPosition > 100) {
    return (
      <div className="animate-bounce hover:animate-none fixed bottom-8 right-8 cursor-pointer rounded-full border-4 border-white bg-white shadow-md shadow-black">
        <a href="#top">
          <BsFillArrowUpCircleFill
            size={50}
            color="rgb(107 33 168)"
            onMouseOver={({ target }: any) =>
              (target.style.color = "rgb(126 34 206)")
            }
            onMouseOut={({ target }: any) =>
              (target.style.color = "rgb(107 33 168)")
            }
          />
        </a>
      </div>
    );
  } else {
    return <div></div>;
  }
}

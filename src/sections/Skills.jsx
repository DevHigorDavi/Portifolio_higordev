import CardBackend from "../components/CardBackend";
import CardFerramentas from "../components/CardFerramentas";
import CardFrontend from "../components/CardFrontend";
import HeaderDark from "../components/HeaderDark";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const linha1Ref = useRef(null);
  const linha2Ref = useRef(null);
  const backendRef = useRef(null);

  useEffect(() => {
    const linha = linha1Ref.current;
    const linha2 = linha2Ref.current;
    const backend = backendRef.current;

    gsap.set(backend, {
      opacity: 0,
      y: 30,
    });

    console.log(linha2.getTotalLength());

    gsap.fromTo(
      linha,
      {
        strokeDasharray: 538.922,
        strokeDashoffset: 538.922,
      },
      {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: linha,
          start: "top 80%",
        },
      },
    );

    gsap.fromTo(
      linha2,
      {
        strokeDasharray: 815.864,
        strokeDashoffset: 815.864,
      },
      {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.inOut",

        onComplete: () => {
          gsap.to(backend, {
            opacity: 1,
            y: 0,
            duration: 0.2,
            delay: 0,
            ease: "power2.out",
          });
        },

        scrollTrigger: {
          trigger: linha2,
          start: "top 70%",
        },
      },
    );
  }, []);

  return (
    <section className="Skills" id="Skills">
      <HeaderDark />

      <div className="skills-title">
        <h1>
          SKI<span>LLS</span>
        </h1>
      </div>
      <div className="cards-skills">
        <CardFerramentas
          IconeFigma="fa-brands fa-figma"
          NomeFerramenta1="Figma"
          NomeFerramenta2="Vite"
        />
        <svg
          className="Linha-1"
          width="546"
          height="231"
          viewBox="0 0 546 231"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={linha1Ref}
            d="M35.0093 35.0098C41.0654 53.1615 49.8351 74.0599 74.0181 100.501C86.0751 113.685 109.569 132.238 125.47 145.368C149.526 165.231 169.484 174.515 196.67 182.49C213.287 187.365 236.302 193.68 264.338 193.535C352.692 193.078 302.192 193.535 358 193.337C460.192 192.973 489.66 197.266 508.192 193.337"
            stroke-width="70"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#002EEF"
          />
        </svg>

        <CardFrontend />

        <svg
          className="Linha-2"
          width="599"
          height="295"
          viewBox="0 0 599 295"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={linha2Ref}
            d="M563.703 35.0039C551.178 53.8136 561.05 90.5508 514.203 125.004C456.611 167.358 345.82 154.017 332.531 155.194C314.646 156.778 284.753 148.602 253.772 135.678C252.147 135 250.654 134.249 249.281 133.436M249.281 133.436C236.548 125.896 234.121 112.999 231.996 103.096C230.984 98.3814 231.493 89.2849 231.996 86.1699C234.203 72.5039 238.485 67.9023 252.203 67.9023C263.203 67.9023 273.633 76.4023 271.589 89.4173C269.439 103.111 262.541 119.905 249.281 133.436ZM249.281 133.436C247.936 134.807 246.527 136.146 245.05 137.444C229.957 150.71 189.904 159.455 140.125 171.202C93.073 182.306 75.9153 198.675 57.447 208.527C42.8864 223.041 35.0471 237.142 35 251.279C36.5537 254.445 39.6612 256.776 42.8628 259.177"
            stroke-width="70"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#002EEF"
          />
        </svg>

        <CardBackend
          ref={backendRef}
          IconePython="fa-brands fa-python"
          NomeFerramenta1="Python"
          IconePHP="fa-brands fa-php"
          NomeFerramenta2="PHP"
          IconeSQL="fa-solid fa-database"
          NomeFerramenta3="MYSQL"
        />
      </div>
    </section>
  );
}

export default Skills;

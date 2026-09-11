"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  BatteryCharging,
  Wrench,
  Zap,
  MapPin,
  Clock,
  ShieldCheck,
  Camera,
  Globe,
  Phone,

} from "lucide-react";
import styles from "../page.module.css";
import Navbar from "./Navbar";
import { useScrollAnimations } from "./useScrollAnimations";
import {
  IMAGES,
  PRODUCTS,
  FEATURES,
  PROCESS,
  STATS,
  MARQUEE,
} from "../data";

const FEATURE_ICONS = {
  battery: BatteryCharging,
  wrench: Wrench,
  zap: Zap,
};

export default function LandingClient() {
  const root = useRef(null);
  useScrollAnimations(root);

  return (
    <div ref={root} id="top">
      <Navbar />

      {/* ============ HERO ============ */}
      <header className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src={IMAGES.hero}
            alt="Scooter elétrica em detalhe na oficina MobiHaus"
            fill
            priority
            sizes="100vw"
            data-parallax="10"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroGlow} />

        <div className={`container ${styles.heroInner}`} data-hero-fade>
          <span className="eyebrow" data-hero-anim>
            Dois Irmãos · Rio Grande do Sul
          </span>
          <h1 className={styles.heroTitle}>
            <span data-hero-anim>Sua mobilidade</span>{" "}
            <span className={styles.accent} data-hero-anim>
              elétrica
            </span>{" "}
            <span data-hero-anim>sempre no ponto.</span>
          </h1>
          <p className={styles.heroSub} data-hero-anim>
            Oficina especializada em scooters, bicicletas, patinetes e
            triciclos elétricos. Diagnóstico preciso, reparo com garantia e
            upgrades que aumentam sua autonomia.
          </p>
          <div className={styles.heroActions} data-hero-anim>
            <a href="#produtos" className="btn btn-primary">
              Ver serviços <ArrowUpRight size={18} />
            </a>
            <a
              href="https://wa.me/5551999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Falar no WhatsApp
            </a>
          </div>

          <div className={styles.heroStats} data-hero-anim>
            <div className={styles.heroStat}>
              <b>+1.200</b>
              <span>Veículos revisados</span>
            </div>
            <div className={styles.heroStat}>
              <b>4</b>
              <span>Categorias atendidas</span>
            </div>
            <div className={styles.heroStat}>
              <b>6 meses</b>
              <span>De garantia</span>
            </div>
          </div>
        </div>

        <div className={styles.scrollHint} aria-hidden="true">
          <span className={styles.scrollDot} />
          Role para explorar
        </div>
      </header>

      {/* ============ MARQUEE ============ */}
      <section className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack} data-marquee="left">
          {[0, 1].map((k) => (
            <div className={styles.marqueeItem} key={k}>
              {MARQUEE.map((m) => (
                <span className={styles.marqueeItem} key={m}>
                  {m} <span className="dot">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ============ PRODUCTS ============ */}
      <section className={styles.section} id="produtos">
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <span className="eyebrow" data-reveal>
                O que fazemos
              </span>
              <h2 className="section-title" data-reveal style={{ marginTop: 16 }}>
                Especialistas em cada tipo de{" "}
                <span className="accent">mobilidade elétrica</span>
              </h2>
            </div>
            <p className="lead" data-reveal>
              Da revisão simples ao reparo mais complexo de motor e bateria —
              cuidamos do seu veículo elétrico com peças de qualidade.
            </p>
          </div>

          <div className={styles.productGrid} data-reveal-group>
            {PRODUCTS.map((p) => (
              <article
                key={p.num}
                className={`${styles.productCard} ${p.big ? styles.big : ""}`}
                data-reveal-item
              >
                <div className={styles.productImg}>
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    sizes="(max-width: 600px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.productShade} />
                <span className={styles.productArrow} aria-hidden="true">
                  <ArrowUpRight size={20} />
                </span>
                <div className={styles.productBody}>
                  <span className={styles.productNum}>{p.num}</span>
                  <h3 className={styles.productName}>{p.name}</h3>
                  <p className={styles.productDesc}>{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SHOWCASE / OFICINA ============ */}
      <section className={styles.showcase} id="oficina">
        <div className={`container ${styles.section}`}>
          <div className={styles.showcaseGrid}>
            <div className={styles.showcaseMedia} data-reveal>
              <Image
                src={IMAGES.workshop}
                alt="Bancada da oficina MobiHaus com ferramentas"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                data-parallax="12"
                style={{ objectFit: "cover" }}
              />
              <div className={styles.showcaseBadge}>
                <div>
                  <b>15+ anos</b>
                  <div>
                    <span>de experiência com eletrônica e mecânica</span>
                  </div>
                </div>
                <ShieldCheck size={30} color="var(--volt)" />
              </div>
            </div>

            <div>
              <span className="eyebrow" data-reveal>
                Dentro da oficina
              </span>
              <h2
                className="section-title"
                data-reveal
                style={{ marginTop: 16 }}
              >
                Tecnologia e cuidado{" "}
                <span className="accent">artesanal</span> no seu elétrico
              </h2>
              <p className="lead" data-reveal style={{ marginTop: 18 }}>
                Combinamos equipamentos de diagnóstico modernos com o cuidado
                de quem entende de cada componente. Nada de trocas
                desnecessárias — resolvemos a raiz do problema.
              </p>

              <div className={styles.featureList} data-reveal-group>
                {FEATURES.map((f) => {
                  const Icon = FEATURE_ICONS[f.icon];
                  return (
                    <div
                      className={styles.featureItem}
                      key={f.title}
                      data-reveal-item
                    >
                      <span className={styles.featureIcon} aria-hidden="true">
                        <Icon size={22} />
                      </span>
                      <div>
                        <h4>{f.title}</h4>
                        <p>{f.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className={styles.section} id="processo">
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <span className="eyebrow" data-reveal>
                Como funciona
              </span>
              <h2
                className="section-title"
                data-reveal
                style={{ marginTop: 16 }}
              >
                Do diagnóstico à <span className="accent">entrega</span>
              </h2>
            </div>
            <p className="lead" data-reveal>
              Um processo simples e transparente para você rodar tranquilo o
              quanto antes.
            </p>
          </div>

          <div className={styles.processGrid} data-reveal-group>
            {PROCESS.map((p) => (
              <div className={styles.processCard} key={p.step} data-reveal-item>
                <div className={styles.processStep}>{p.step}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STATS BAND ============ */}
      <section className={styles.statsBand}>
        <div className="container">
          <div className={styles.statsGrid} data-reveal-group>
            {STATS.map((s) => (
              <div className={styles.statBox} key={s.label} data-reveal-item>
                <b className={styles.statNumber}>
                  <span data-counter={s.value}>0</span>
                  <span className={styles.statSuffix}>{s.suffix}</span>
                </b>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ============ ABOUT / LOCATION ============ */}
      <section className={styles.section} id="sobre">
        <div className="container">
          <div className={styles.aboutGrid}>
            <div>
              <span className="eyebrow" data-reveal>
                Sobre a MobiHaus
              </span>
              <h2
                className="section-title"
                data-reveal
                style={{ marginTop: 16 }}
              >
                Referência em mobilidade elétrica em{" "}
                <span className="accent">Dois Irmãos</span>
              </h2>
              <p className="lead" data-reveal style={{ marginTop: 18 }}>
                Nascemos da paixão por veículos elétricos e pela vontade de
                oferecer, no coração do Vale do Sinos, um serviço de oficina à
                altura de quem escolheu uma mobilidade mais limpa e
                inteligente.
              </p>

              <div className={styles.aboutChips} data-reveal>
                <span className={styles.chip}>
                  <MapPin size={16} /> Dois Irmãos · RS
                </span>
                <span className={styles.chip}>
                  <Clock size={16} /> Seg a Sáb · 08h às 18h
                </span>
                <span className={styles.chip}>
                  <ShieldCheck size={16} /> Garantia por escrito
                </span>
              </div>

              <div style={{ marginTop: 34 }} data-reveal>
                <a
                  href="https://wa.me/5551999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Agendar uma visita <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

            <div className={styles.aboutMedia} data-reveal>
              <Image
                src={IMAGES.about}
                alt="Técnico da MobiHaus trabalhando em bicicleta elétrica"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                data-parallax="10"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.ctaCard} data-reveal>
            <div className={styles.ctaMedia}>
              <Image
                src={IMAGES.cta}
                alt=""
                fill
                sizes="100vw"
                data-parallax="14"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.ctaShade} />
            <h2>
              Seu elétrico merece{" "}
              <span className="accent">cuidado de verdade</span>
            </h2>
            <p>
              Traga sua scooter, bike, patinete ou triciclo para um diagnóstico
              gratuito. Orçamento transparente e sem compromisso.
            </p>
            <div className={styles.ctaActions}>
              <a
                href="https://wa.me/5551999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Phone size={18} /> Chamar no WhatsApp
              </a>
              <a href="#produtos" className="btn btn-ghost">
                Ver serviços
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* ============ FOOTER ============ */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <span className={styles.brand}>
                <span className={styles.brandMark} aria-hidden="true">
                  <Zap size={18} strokeWidth={2.5} />
                </span>
                Mobi<span>Haus</span>
              </span>
              <p>
                Oficina de mobilidade elétrica especializada em scooters,
                bicicletas, patinetes e triciclos em Dois Irmãos - RS.
              </p>
            </div>

            <div className={styles.footerCol}>
              <h5>Serviços</h5>
              <a href="#produtos">Scooters elétricas</a>
              <a href="#produtos">Bicicletas elétricas</a>
              <a href="#produtos">Patinetes</a>
              <a href="#produtos">Triciclos</a>
            </div>

            <div className={styles.footerCol}>
              <h5>Empresa</h5>
              <a href="#oficina">A oficina</a>
              <a href="#processo">Como funciona</a>
              <a href="#sobre">Sobre nós</a>
            </div>

            <div className={styles.footerCol}>
              <h5>Contato</h5>
              <span>Dois Irmãos · RS</span>
              <span>(51) 99999-9999</span>
              <span>contato@mobihaus.com.br</span>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <span>
              © {new Date().getFullYear()} MobiHaus · Mobilidade Elétrica. Todos
              os direitos reservados.
            </span>
            <div className={styles.socials}>
              <a className={styles.socialBtn} href="#" aria-label="Perfil social">
                <Camera size={18} />
              </a>
              <a className={styles.socialBtn} href="#" aria-label="Pagina social">
                <Globe size={18} />
              </a>
              <a
                className={styles.socialBtn}
                href="https://wa.me/5551999999999"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


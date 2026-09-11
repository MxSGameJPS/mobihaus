"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import styles from "../page.module.css";

const LINKS = [
  { href: "#produtos", label: "Serviços" },
  { href: "#oficina", label: "Oficina" },
  { href: "#processo", label: "Como funciona" },
  { href: "#sobre", label: "Sobre" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
        <a href="#top" className={styles.brand} aria-label="MobiHaus - início">
          <span className={styles.brandMark} aria-hidden="true">
            <Zap size={18} strokeWidth={2.5} />
          </span>
          Mobi<span>Haus</span>
        </a>

        <div className={styles.navLinks}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>

        <div className={styles.navCta}>
          <a
            href="https://wa.me/5551999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Agendar reparo
          </a>
          <button
            className={styles.burger}
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 200,
              background: "rgba(7,10,9,0.96)",
              backdropFilter: "blur(14px)",
              display: "flex",
              flexDirection: "column",
              padding: "28px 24px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span className={styles.brand}>
                <span className={styles.brandMark} aria-hidden="true">
                  <Zap size={18} strokeWidth={2.5} />
                </span>
                Mobi<span>Haus</span>
              </span>
              <button
                className={styles.burger}
                style={{ display: "grid" }}
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
              >
                <X size={28} />
              </button>
            </div>

            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
              }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              {LINKS.map((l) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    show: { opacity: 1, x: 0 },
                  }}
                  style={{
                    fontSize: "2.2rem",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    padding: "10px 0",
                  }}
                >
                  {l.label}
                </motion.a>
              ))}
            </motion.div>

            <a
              href="https://wa.me/5551999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              onClick={() => setOpen(false)}
            >
              Agendar reparo
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

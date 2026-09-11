"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Registra todas as animações de scroll da landing page.
 * Usa gsap.context com escopo no elemento root para cleanup automático.
 */
export function useScrollAnimations(rootRef) {
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      // ---- Reveal genérico ----
      gsap.utils.toArray("[data-reveal]").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // ---- Reveal em cascata (stagger) ----
      gsap.utils.toArray("[data-reveal-group]").forEach((group) => {
        const items = group.querySelectorAll("[data-reveal-item]");
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: group,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });

      // ---- Parallax de imagens ----
      gsap.utils.toArray("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.parallax) || 15;
        gsap.fromTo(
          el,
          { yPercent: -speed },
          {
            yPercent: speed,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      // ---- Hero title: entrada + leve fade ao rolar ----
      gsap.from("[data-hero-anim]", {
        opacity: 0,
        y: 60,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.14,
        delay: 0.15,
      });
      gsap.to("[data-hero-fade]", {
        opacity: 0,
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-hero-fade]",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // ---- Marquee infinito guiado pela direção do scroll ----
      gsap.utils.toArray("[data-marquee]").forEach((track) => {
        const dir = track.dataset.marquee === "left" ? -1 : 1;
        const loop = gsap.to(track, {
          xPercent: dir * -50,
          repeat: -1,
          duration: 22,
          ease: "none",
        });
        ScrollTrigger.create({
          trigger: track,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => {
            const v = 1 + Math.abs(self.getVelocity()) / 1200;
            gsap.to(loop, {
              timeScale: gsap.utils.clamp(1, 4, v),
              duration: 0.3,
              overwrite: true,
            });
          },
        });
      });

      // ---- Contadores numéricos ----
      gsap.utils.toArray("[data-counter]").forEach((el) => {
        const end = parseFloat(el.dataset.counter);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: end,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          onUpdate: () => {
            el.textContent = Math.round(obj.val).toLocaleString("pt-BR");
          },
        });
      });

      ScrollTrigger.refresh();
    }, rootRef);

    return () => ctx.revert();
  }, [rootRef]);
}

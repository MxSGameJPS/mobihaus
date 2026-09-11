// Imagens de bibliotecas públicas (Unsplash) — mobilidade elétrica
export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1920&q=80",
  scooter:
    "https://images.unsplash.com/photo-1604868189265-219ba7bf7ea3?auto=format&fit=crop&w=1200&q=80",
  ebike:
    "https://images.unsplash.com/photo-1571333250630-f0230c320b6d?auto=format&fit=crop&w=1200&q=80",
  patinete:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
  triciclo:
    "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80",
  workshop:
    "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=80",
  about:
    "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1200&q=80",
  cta: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80",
};

export const PRODUCTS = [
  {
    num: "01",
    name: "Scooters Elétricas",
    desc: "Vendas, manutenção preventiva e reparo completo de motores, controladores e baterias de scooters elétricas.",
    img: IMAGES.scooter,
    big: true,
  },
  {
    num: "02",
    name: "Bicicletas Elétricas",
    desc: "Ajuste de motor central e traseiro, troca de células e diagnóstico eletrônico de e-bikes.",
    img: IMAGES.ebike,
  },
  {
    num: "03",
    name: "Patinetes Elétricos",
    desc: "Substituição de pneus, freios, displays e recuperação de baterias de patinetes.",
    img: IMAGES.patinete,
  },
  {
    num: "04",
    name: "Triciclos Elétricos",
    desc: "Suporte especializado para triciclos de carga e mobilidade assistida, com peças e upgrades.",
    img: IMAGES.triciclo,
    big: true,
  },
];

export const FEATURES = [
  {
    icon: "battery",
    title: "Recuperação de Baterias",
    desc: "Reparo e regeneração de packs de lítio com balanceamento de células e novo BMS.",
  },
  {
    icon: "wrench",
    title: "Diagnóstico Eletrônico",
    desc: "Leitura de controladores, motores e displays para identificar falhas com precisão.",
  },
  {
    icon: "zap",
    title: "Upgrades de Performance",
    desc: "Aumento de autonomia, torque e velocidade dentro dos limites de segurança.",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Diagnóstico",
    desc: "Avaliação completa do veículo e orçamento transparente sem compromisso.",
  },
  {
    step: "02",
    title: "Aprovação",
    desc: "Você aprova o serviço e o prazo antes de qualquer intervenção.",
  },
  {
    step: "03",
    title: "Execução",
    desc: "Reparo com peças de qualidade e técnicos especializados em elétrica.",
  },
  {
    step: "04",
    title: "Entrega",
    desc: "Testes finais, garantia por escrito e seu veículo pronto para rodar.",
  },
];

export const STATS = [
  { value: 1200, suffix: "+", label: "Veículos revisados" },
  { value: 98, suffix: "%", label: "Clientes satisfeitos" },
  { value: 7, suffix: " dias", label: "Prazo médio de reparo" },
  { value: 6, suffix: " meses", label: "Garantia nos serviços" },
];

export const MARQUEE = [
  "Scooters Elétricas",
  "Bicicletas Elétricas",
  "Patinetes",
  "Triciclos",
  "Baterias de Lítio",
  "Upgrades",
  "Diagnóstico",
];

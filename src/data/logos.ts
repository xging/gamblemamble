import { getFilteredImages } from "../utils/loadImages";

export const Logos = {
    payments: import.meta.glob("/src/assets/logos/payments/*.{jpg,png,webp}", {
      eager: true,
      import: "default",
    }) as Record<string, string>,

    paymentsTop: import.meta.glob("/src/assets/logos/payments/*.{jpg,png,webp}", {
      eager: true,
      import: "default",
    }) as Record<string, string>,
  
    providers: import.meta.glob("/src/assets/logos/providers/*.{jpg,png,webp}", {
      eager: true,
      import: "default",
    }) as Record<string, string>,
  };
  
  export const LOGO_CONFIG = {
    payments: [
      { logo: "bitcoin", desc:"Bitcoin"},
      { logo: "jeton", desc:"Jeton"},
      { logo: "paypal", desc:"PayPal"},
      { logo: "perfectmoney", desc:"PerfectMoney"},
      { logo: "safetypay", desc:"SafetyPay"},
      { logo: "skrill", desc:"Skrill"},
    ],
    providers: [
      { logo: "endorphina", desc:"Endorphina"},
      { logo: "evolutiongaming", desc:"EvolutionGaming"},
      { logo: "gamingbet", desc:"GamingBet"},
      { logo: "microgaming", desc:"MicroGaming"},
    ],
    paymentsTop: [
      { logo: "skrill", desc:"Skrill"},
      { logo: "bitcoin", desc:"Bitcoin"},
      { logo: "paypal", desc:"PayPal"},
    ]
    
  };
  
  export function generateLogoList(
    type: "payments" | "providers" | "paymentsTop"
  ) {
    const actualType = type === "paymentsTop" ? "payments" : type;
  
    return LOGO_CONFIG[type].map((item) => {
      const baseCard = {
        type: actualType as "payments" | "providers", // приводим к ожидаемому типу
        desc: item.desc,
        logo: getFilteredImages(Logos[type], [item.logo]),
      };
      return baseCard;
    });
  }
  
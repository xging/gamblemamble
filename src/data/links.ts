  export const LINKS_CONFIG = {
    links: [
      { linkName: "RESPONSIBLE GAMING", linkHref:"#"},
      { linkName: "TERMS AND CONDITIONS", linkHref:"#"},
      { linkName: "PRIVACY POLICY", linkHref:"#"},
      { linkName: "BONUSES - GENERAL TERMS", linkHref:"#"},
      { linkName: "FAQ", linkHref:"#"},
      { linkName: "ABOUT US", linkHref:"#"},
      { linkName: "CONTACT US", linkHref:"#"},
    ]
    
  };
  
  export function generateLinksList(
    type: "links"
  ) {
    return LINKS_CONFIG[type].map((item) => {
      const baseCard = {
        type,
        linkName: item.linkName,
        linkHref: item.linkHref
      };
      return baseCard;
    });
  }
  
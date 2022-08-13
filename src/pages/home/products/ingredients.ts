import { ImgHTMLAttributes } from "react";

export interface Ingredient {
  label: string;
  header: string;
  description: string;
  buttonLink: string;
  imageURL: string;
}

export const allIngredients = [
  { label: "Visibility and Asset Inventory", 
    header: 'Automated Real-Time Asset Intelligence', 
    description: "Eliminate blind spots and remove manual processes to collect asset intelligence and maintain inventories for all types of devices – IT, OT, IoT, IoMT – connected to your network.",
    buttonLink: 'https://www.google.com/',
    imageURL: 'https://www.forescout.com/wp-content/uploads/2022/04/Visibility-and-Asset-Inventory.png'
  },
  
  { label: "Risk and Assessment Compliance", 
    header: 'Manage Risk and Achieve Compliance', 
    description: "Manage the risk of your cyber assets and ensure they adhere to security frameworks, industry standards and regulations, continuously.",
    buttonLink: 'https://www.google.com/',
    imageURL: 'https://www.forescout.com/wp-content/uploads/2022/04/Risk-and-Assessment-Compliance.png'
  },

  { label: "Automated Governance", 
    header: 'Automate Policy Enforcement and Accelerate Response', 
    description: "We shares real-time device context, automates policy enforcement and executes response actions across your security ecosystem, continuously.",
    buttonLink: 'https://www.google.com/',
    imageURL: 'https://www.forescout.com/wp-content/uploads/2022/04/Automated-Governance.png'
  },
];

export const initialTabs = allIngredients;

export function getNextIngredient(
  ingredients: Ingredient[]
): Ingredient | undefined {
  const existing = new Set(ingredients);
  return allIngredients.find((ingredient) => !existing.has(ingredient));
}

import {
  ads,
  digimkt,
  marketing,
  creative,
  product,
  ads2,
  brandmgt,
  marketrs,
  mediabuy,
  pr,
  influ,
  field,
  marketexp,
  mkst,
  csr,
} from "@/assets";

export const headerLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "Our Services",
    link: "/services",
  },
  {
    title: "Technology",
    link: "/tech",
  },
  {
    title: "Growth in a box",
    link: "/growth",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Contact Us",
    link: "/contact",
  },
];

// export const services = [
//   {
//     title: "Marketing Strategy",
// image: marketing,
//   },
//   {
//     title: "Digital Marketing",
//     image: digimkt,
//   },
//   {
//     title: "Outdoor Advertising",
//     image: ads,
//   },
//   {
//     title: "Creatives and Content Development",
//     image: creative,
//   },
//   {
//     title: "Product Development",
//     image: product,
//   },
//   {
//     title: "Advertising",
//     image: ads2,
//   },
//   {
//     title: "Brand Experience Management",
//     image: brandmgt,
//   },
//   {
//     title: "Market Research and Consumer Rights",
//     image: marketrs,
//   },
//   {
//     title: "Media Planning and Buying",
//     image: mediabuy,
//   },
//   {
//     title: "Public Relations",
//     image: pr,
//   },
//   {
//     title: "Influencer MArketing",
//     image: influ,
//   },
//   {
//     title: "Field MArketing and Activations",
//     image: field,
//   },
//   {
//     title: "Marketing Expansion and Growth Marketing",
//     image: marketexp,
//   },
//   {
//     title: "Marketing Technology Stack Management",
//     image: mkst,
//   },
//   {
//     title: "CSR and Sustainability Consulting",
//     image: csr,
//   },
// ];

import {
  Target,
  Smartphone,
  Signpost,
  PenTool,
  Package,
  Megaphone,
  Sparkles,
  Search,
  Tv,
  Users,
  UserCheck,
  MapPin,
  TrendingUp,
  Layers,
  Leaf,
} from "lucide-react";

// keep your existing image imports (marketing, digimkt, ads, creative,
// product, ads2, brandmgt, marketrs, mediabuy, pr, influ, field,
// marketexp, mkst, csr) above this — only the `icon` field is new.

export const services = [
  {
    title: "Marketing Strategy",
    // image: marketing,
    icon: Target,
  },
  {
    title: "Digital Marketing",
    // image: digimkt,
    icon: Smartphone,
  },
  {
    title: "Outdoor Advertising",
    // image: ads,
    icon: Signpost,
  },
  {
    title: "Creatives and Content Development",
    // image: creative,
    icon: PenTool,
  },
  {
    title: "Product Development",
    // image: product,
    icon: Package,
  },
  {
    title: "Advertising",
    // image: ads2,
    icon: Megaphone,
  },
  {
    title: "Brand Experience Management",
    // image: brandmgt,
    icon: Sparkles,
  },
  {
    title: "Market Research and Consumer Rights",
    // image: marketrs,
    icon: Search,
  },
  {
    title: "Media Planning and Buying",
    // image: mediabuy,
    icon: Tv,
  },
  {
    title: "Public Relations",
    // image: pr,
    icon: Users,
  },
  {
    title: "Influencer Marketing",
    // image: influ,
    icon: UserCheck,
  },
  {
    title: "Field Marketing and Activations",
    // image: field,
    icon: MapPin,
  },
  {
    title: "Marketing Expansion and Growth Marketing",
    // image: marketexp,
    icon: TrendingUp,
  },
  {
    title: "Marketing Technology Stack Management",
    // image: mkst,
    icon: Layers,
  },
  {
    title: "CSR and Sustainability Consulting",
    // image: csr,
    icon: Leaf,
  },
];

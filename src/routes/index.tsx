import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeIndianRupee,
  BedDouble,
  Building2,
  CheckCircle2,
  ChevronDown,
  Headphones,
  Heart,
  Home,
  House,
  LockKeyhole,
  MapPin,
  Menu,
  Play,
  Search,
  ShieldCheck,
  Users,
  UserRound,
  WalletCards,
  Zap,
} from "lucide-react";

import heroAsset from "@/assets/roomy-hero.jpg.asset.json";
import pgAsset from "@/assets/offer-pg.jpg.asset.json";
import hostelAsset from "@/assets/offer-hostel.jpg.asset.json";
import colivingAsset from "@/assets/offer-coliving.jpg.asset.json";
import apartmentAsset from "@/assets/offer-apartment.jpg.asset.json";
import { Button } from "@/components/ui/button";

const heroImage = heroAsset.url;
const pgImage = pgAsset.url;
const hostelImage = hostelAsset.url;
const colivingImage = colivingAsset.url;
const apartmentImage = apartmentAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ROOMHY — Student Housing in India" },
      { name: "description", content: "Find verified PGs, hostels, co-living spaces and apartments in India's top cities." },
      { property: "og:title", content: "ROOMHY — Student Housing in India" },
      { property: "og:description", content: "Find verified PGs, hostels, co-living spaces and apartments in India's top cities." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const propertyTypes = [
  { label: "PG", icon: BedDouble },
  { label: "Hostels", icon: Building2 },
  { label: "Co-living", icon: Users },
  { label: "Apartments", icon: House },
];

const assurances = [
  { title: "Smart Bidding", subtitle: "Best price deals", icon: ShieldCheck },
  { title: "Verified Properties", subtitle: "100% verified listings", icon: ShieldCheck },
  { title: "Lowest Price Guarantee", subtitle: "Best price, always", icon: BadgeIndianRupee },
  { title: "24/7 Support", subtitle: "Always here to help", icon: Headphones },
  { title: "Safe & Secure", subtitle: "Your safety, our priority", icon: LockKeyhole },
];

const offers = [
  { title: "PG", text: "Comfortable and affordable stays near your college or workplace.", image: pgImage, icon: BedDouble },
  { title: "Hostels", text: "Vibrant communities with essential amenities.", image: hostelImage, icon: Building2 },
  { title: "Co-living", text: "Modern living with like-minded people.", image: colivingImage, icon: Users },
  { title: "Apartments", text: "Spacious and independent living options.", image: apartmentImage, icon: House },
];

const steps = [
  { number: "1", title: "Search & Filter", text: "Verified PGs, Hostels & Flats with real photos.", icon: Search, tone: "sage" },
  { number: "2", title: "Smart Bidding", text: "Bid directly to lock lower prices with owners.", icon: WalletCards, tone: "peach" },
  { number: "3", title: "Instant Move-in", text: "Token booking & 100% broker-free transparency.", icon: ShieldCheck, tone: "mint" },
];

const trending = [
  { name: "ROOMHYPROP ESSENCE Harsh Plaza", location: "Chandigarh", price: "₹6,000", image: pgImage },
  { name: "ROOMHYPROP CREST Harsh Plaza", location: "Chandigarh", price: "₹7,500", image: apartmentImage },
  { name: "PARADISE RESIDENCY", location: "Kota", price: "₹7,500", image: hostelImage },
  { name: "ROOMHYPROP CREST HL Residency", location: "Kota", price: "₹2,500", image: colivingImage },
];

function Brand() {
  return <a className="brand" href="#top" aria-label="ROOMHY home">ROOMHY<span>.com</span></a>;
}

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <nav aria-label="Main navigation">
          <a className="active" href="#top">Home</a><a href="#offers">Properties</a><a href="#trending">Cities</a>
          <a href="#works">FAQ</a><a href="#works">About</a><a href="#works">Contact</a>
        </nav>
        <div className="header-actions">
          <Button variant="outline" className="list-button"><Home /> List Your Property</Button>
          <Button className="bid-button"><Zap fill="currentColor" /> Bid Now</Button>
          <span className="profile-divider" aria-hidden="true" />
          <Button variant="ghost" className="profile-button" aria-label="Open Harsh's account menu"><UserRound /><span>Harsh</span><ChevronDown /></Button>
          <Button variant="ghost" size="icon" className="menu-button" aria-label="Open menu"><Menu /></Button>
        </div>
      </div>
    </header>
  );
}

function SearchPanel() {
  const [selectedType, setSelectedType] = useState("PG");
  return (
    <form className="search-panel" onSubmit={(event) => event.preventDefault()}>
      <div className="property-tabs" role="tablist" aria-label="Property type">
        {propertyTypes.map(({ label, icon: Icon }) => (
          <Button key={label} type="button" variant="ghost" onClick={() => setSelectedType(label)} className={selectedType === label ? "property-tab selected" : "property-tab"} aria-selected={selectedType === label} role="tab"><Icon /><span>{label}</span></Button>
        ))}
      </div>
      <div className="search-controls">
        <label className="location-field"><MapPin /><input aria-label="Location" placeholder="Search city, locality or landmark (e.g. Koramangala, Mumbai)" /></label>
        <Button type="button" variant="ghost" className="filter-button"><UserRound /> Any Gender <ChevronDown /></Button>
        <Button type="button" variant="ghost" className="filter-button"><WalletCards /> Any Budget <ChevronDown /></Button>
        <Button type="submit" className="search-button"><Search /> Search</Button>
      </div>
    </form>
  );
}

function AssuranceRow({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "works-assurance" : "assurance-row"}>
      {assurances.map(({ title, subtitle, icon: Icon }) => (
        <div className="assurance" key={title}><span className="assurance-icon"><Icon /></span><span><strong>{title}</strong><small>{subtitle}</small></span></div>
      ))}
    </div>
  );
}

function StudentProof() {
  return (
    <div className="student-proof"><span className="avatars" aria-hidden="true"><i>H</i><i>A</i><i>R</i></span><span><strong>50,000+ students</strong><small>already found their home</small></span><ArrowRight /></div>
  );
}

function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <img className="hero-image" src={heroImage} alt="A warm modern student room overlooking a city" width={1920} height={768} />
      <div className="hero-wash" /><p className="left-note">Better<br />Students<br />Brighter<br />Tomorrows</p><p className="right-note">Same<br />City<br />New<br />Stories ♡</p>
      <div className="hero-copy"><p>India's #1 broker-free student housing platform</p><h1 id="hero-title">Find a place<br />that feels like home</h1><span>Verified PGs, Hostels, Co-living spaces and Apartments in top cities.</span></div>
      <SearchPanel />
      <div className="trust-curve"><AssuranceRow /><StudentProof /></div>
    </section>
  );
}

function LeafSpray({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 200 400" aria-hidden="true">
      <path className="leaf-stem" d="M20 380C55 295 67 187 118 28" />
      <path className="leaf-blade" d="M67 274C12 269 0 223 10 183C51 194 76 226 67 274Z" />
      <path className="leaf-blade" d="M76 225C118 212 139 174 130 139C94 150 72 183 76 225Z" />
      <path className="leaf-blade" d="M95 152C58 139 46 105 57 75C88 87 104 116 95 152Z" />
      <path className="leaf-blade" d="M113 91C143 76 151 48 140 24C116 38 105 63 113 91Z" />
    </svg>
  );
}

function Offers() {
  return (
    <section id="offers" className="offers" aria-labelledby="offers-title">
      <LeafSpray className="offer-leaves offer-leaves-left" /><LeafSpray className="offer-leaves offer-leaves-right" />
      <p className="offers-left-note">Live<br />Learn<br />Belong</p><p className="offers-right-note">A Better<br />Place<br />To Be ♡</p>
      <div className="offer-heading"><p>Explore your living options</p><h2 id="offers-title">What We Offer</h2><span>Choose from a variety of accommodation types tailored for students and professionals.</span></div>
      <Button variant="outline" className="view-all">View all options <ArrowRight /></Button>
      <div className="offer-grid">
        {offers.map(({ title, text, image, icon: Icon }) => (
          <article className="offer-card" key={title}><div className="offer-image-wrap"><img src={image} alt={`${title} student accommodation`} width={900} height={560} loading="lazy" /><span className="offer-chip"><Icon /> {title}</span></div><div className="offer-body"><p>{text}</p><a href="#trending" aria-label={`Explore ${title}`}><ArrowRight /></a></div></article>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="works" className="works" aria-labelledby="works-title">
      <LeafSpray className="works-leaves works-leaves-left" /><LeafSpray className="works-leaves works-leaves-right" />
      <p className="works-side-note">Simple<br />Steps<br />Brighter<br />Futures</p>
      <div className="works-inner">
        <div className="works-copy">
          <p className="section-eyebrow">How Roomhy Works</p>
          <h2 id="works-title">Find, Compare &amp; Book<br />in <em>Just a Few Steps</em></h2>
          <p className="works-subtitle">A smarter, simpler and safer way to find your next home.</p>
          <div className="step-grid">
            {steps.map(({ number, title, text, icon: Icon, tone }) => <article className="step-card" key={title}><span className={`step-icon ${tone}`}><Icon /></span><div><strong>{title}</strong><p>{text}</p></div><span className="step-number">{number}</span></article>)}
          </div>
          <div className="works-actions"><Button className="watch-button"><Play fill="currentColor" /> Watch 1-Min Video Guide</Button><a href="#trending">Learn how it works <ArrowRight /></a></div>
        </div>
        <div className="video-column">
          <div className="video-card"><img src={apartmentImage} alt="Warm furnished Roomhy bedroom video preview" loading="lazy" /><span className="video-badge"><i /> Official Video Guide</span><Button size="icon" className="play-button" aria-label="Play the official Roomhy video guide"><Play fill="currentColor" /></Button><span className="duration">0:60</span></div>
          <p className="video-note">Step into<br />a Better Tomorrow</p>
        </div>
      </div>
      <div className="works-trust"><AssuranceRow compact /><StudentProof /></div>
    </section>
  );
}

function Trending() {
  const [offset, setOffset] = useState(0);
  const [saved, setSaved] = useState<string[]>([]);
  const ordered = [...trending.slice(offset), ...trending.slice(0, offset)];
  const rotate = (direction: number) => setOffset((offset + direction + trending.length) % trending.length);
  const toggleSaved = (name: string) => setSaved((current) => current.includes(name) ? current.filter((item) => item !== name) : [...current, name]);
  return (
    <section id="trending" className="trending" aria-labelledby="trending-title">
      <LeafSpray className="trend-leaves trend-leaves-left" /><LeafSpray className="trend-leaves trend-leaves-right" />
      <p className="trend-note-left">Good<br />Spaces<br />Greater<br />Stories</p><p className="trend-note-right">Live<br />Learn<br />Grow</p>
      <div className="trending-heading"><p className="section-eyebrow">Trending Stays</p><h2 id="trending-title">Trending Stays This Week</h2><span>Most popular properties among students</span></div>
      <Button variant="outline" className="trending-view-all">View all properties <ArrowRight /></Button>
      <Button variant="outline" size="icon" className="carousel-arrow carousel-left" onClick={() => rotate(-1)} aria-label="Previous properties"><ArrowLeft /></Button>
      <div className="trending-grid">
        {ordered.map(({ name, location, price, image }) => (
          <article className="trending-card" key={name}><div className="trending-image-wrap"><img src={image} alt={`${name} in ${location}`} loading="lazy" /><span className="trending-verified"><CheckCircle2 /> Verified</span><Button variant="outline" size="icon" className={saved.includes(name) ? "trend-heart saved" : "trend-heart"} onClick={() => toggleSaved(name)} aria-label={`${saved.includes(name) ? "Remove" : "Save"} ${name}`}><Heart fill={saved.includes(name) ? "currentColor" : "none"} /></Button></div><div className="trending-body"><h3>{name}</h3><p><MapPin /> {location}</p><strong>{price} <small>/mo</small></strong></div></article>
        ))}
      </div>
      <Button variant="outline" size="icon" className="carousel-arrow carousel-right" onClick={() => rotate(1)} aria-label="Next properties"><ArrowRight /></Button>
      <div className="carousel-dots" aria-hidden="true"><i className="active" /><i /><i /></div>
    </section>
  );
}

function Index() {
  return <main><Header /><Hero /><Offers /><HowItWorks /><Trending /></main>;
}

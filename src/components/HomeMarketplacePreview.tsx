import React from 'react';
import { ArrowRight, MapPin, ShieldCheck, PawPrint, Tag } from 'lucide-react';
import { INITIAL_ANIMAL_LISTINGS } from '../data/mockData';

export const HomeMarketplacePreview: React.FC<{ onOpenMarketplace: () => void }> = ({ onOpenMarketplace }) => {
  const items = INITIAL_ANIMAL_LISTINGS.slice(0, 5);
  return <section className="home-market-preview">
    <div className="home-section-head">
      <div><span className="eyebrow"><Tag className="w-4 h-4" /> ОБЪЯВЛЕНИЯ</span><h2>Питомцы, которых сейчас ищут нового хозяина</h2><p>Популярные предложения из каталога ЗооМаяка и подключаемых источников.</p></div>
      <button className="ghost-link" onClick={onOpenMarketplace}>Все объявления <ArrowRight /></button>
    </div>
    <div className="home-listing-grid">{items.map(item => <article key={item.id} className="home-listing-card">
      <div className="home-listing-image"><img src={item.imageUrl} alt={item.title} /><span>{item.source}</span></div>
      <div className="home-listing-body"><div className="home-listing-title"><h3>{item.title}</h3><strong>{item.price.toLocaleString('ru-RU')} ₽</strong></div>
      <p>{item.breed} · {item.age}</p><div className="home-listing-meta"><span><MapPin /> {item.city}</span>{item.verified && <span className="verified-inline"><ShieldCheck /> Проверено</span>}</div></div>
    </article>)}</div>
    <div className="home-market-note"><PawPrint /> <span>Каталог развивается: объявления можно размещать прямо в ЗооМаяке, а внешние площадки подключать через серверные парсеры и адаптеры.</span><button onClick={onOpenMarketplace}>Разместить объявление <ArrowRight /></button></div>
  </section>;
};

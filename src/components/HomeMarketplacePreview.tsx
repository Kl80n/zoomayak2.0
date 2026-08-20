import React, { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, MapPin, ShieldCheck, PawPrint, Tag, Eye } from 'lucide-react';
import { INITIAL_ANIMAL_LISTINGS } from '../data/mockData';
import { AnimalListing } from '../types';
import { ListingDetailModal } from './ListingDetailModal';

export const HomeMarketplacePreview: React.FC<{ onOpenMarketplace: () => void }> = ({ onOpenMarketplace }) => {
  const items = INITIAL_ANIMAL_LISTINGS.slice(0, 5);
  const trackRef = useRef<HTMLDivElement>(null);
  const [selectedListing, setSelectedListing] = useState<AnimalListing | null>(null);

  const scroll = (direction: 'prev' | 'next') => {
    trackRef.current?.scrollBy({
      left: direction === 'next' ? trackRef.current.clientWidth * 0.78 : -trackRef.current.clientWidth * 0.78,
      behavior: 'smooth',
    });
  };

  return (
    <section className="home-market-preview">
      <div className="home-section-head">
        <div>
          <span className="eyebrow"><Tag className="w-4 h-4" /> ОБЪЯВЛЕНИЯ</span>
          <h2>Питомцы, которых сейчас ищут нового хозяина</h2>
          <p>Нажмите на карточку, чтобы посмотреть подробности, документы и связаться с продавцом.</p>
        </div>
        <div className="home-carousel-actions">
          <button className="carousel-arrow" onClick={() => scroll('prev')} aria-label="Предыдущие объявления"><ArrowLeft /></button>
          <button className="carousel-arrow" onClick={() => scroll('next')} aria-label="Следующие объявления"><ArrowRight /></button>
          <button className="ghost-link" onClick={onOpenMarketplace}>Все объявления <ArrowRight /></button>
        </div>
      </div>

      <div className="home-carousel">
        <div ref={trackRef} className="home-listing-grid home-listing-carousel">
          {items.map(item => (
            <article 
              key={item.id} 
              onClick={() => setSelectedListing(item)}
              className="home-listing-card cursor-pointer group"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedListing(item); }}
            >
              <div className="home-listing-image relative overflow-hidden">
                <img src={item.imageUrl} alt={item.title} className="group-hover:scale-105 transition duration-300" />
                <span>{item.source}</span>
                <div className="absolute inset-0 bg-teal-950/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center pointer-events-none">
                  <span className="px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-sm text-white font-extrabold text-xs flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" /> Открыть
                  </span>
                </div>
              </div>
              <div className="home-listing-body">
                <div className="home-listing-title">
                  <h3 className="group-hover:text-teal-600 dark:group-hover:text-teal-400 transition">{item.title}</h3>
                  <strong>{item.price.toLocaleString('ru-RU')} ₽</strong>
                </div>
                <p>{item.breed} · {item.age}</p>
                <div className="home-listing-meta">
                  <span><MapPin /> {item.city}</span>
                  {item.verified && <span className="verified-inline"><ShieldCheck /> Проверено</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="home-market-note">
        <PawPrint />
        <span>Объявления можно размещать прямо в ЗооМаяке, а внешние площадки подключать через серверные парсеры и адаптеры.</span>
        <button onClick={onOpenMarketplace}>Разместить объявление <ArrowRight /></button>
      </div>

      {selectedListing && (
        <ListingDetailModal 
          isOpen={Boolean(selectedListing)}
          onClose={() => setSelectedListing(null)}
          listing={selectedListing}
        />
      )}
    </section>
  );
};

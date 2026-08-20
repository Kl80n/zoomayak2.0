import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Share2, 
  Heart, 
  ExternalLink, 
  Check, 
  AlertTriangle, 
  Clock, 
  Star, 
  Send,
  MessageCircle,
  FileCheck2,
  Sparkles,
  Info,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { AnimalListing, ServiceListing } from '../types';
import { SalesContractModal } from './SalesContractModal';

interface ListingDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  listing?: AnimalListing | null;
  service?: ServiceListing | null;
}

export const ListingDetailModal: React.FC<ListingDetailModalProps> = ({
  isOpen,
  onClose,
  listing,
  service,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [copied, setCopied] = useState(false);
  const [contacted, setContacted] = useState(false);
  const [isContractOpen, setIsContractOpen] = useState(false);

  if (!isOpen || (!listing && !service)) return null;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleToggleFavorite = () => {
    setIsFavorite(prev => !prev);
    if (!isFavorite) {
      confetti({ particleCount: 25, spread: 50, origin: { y: 0.7 } });
    }
  };

  const isAnimal = Boolean(listing);

  return (
    <>
      <div 
        className="fixed inset-0 z-[75] flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-xl overflow-y-auto"
        onMouseDown={onClose}
      >
        <div 
          className="relative w-full max-w-2xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-4 text-left animate-in fade-in zoom-in-95 duration-200"
          onMouseDown={e => e.stopPropagation()}
        >
          {/* Top Header Bar */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-950">
            <img 
              src={isAnimal ? listing?.imageUrl : service?.imageUrl} 
              alt={isAnimal ? listing?.title : service?.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-black/40" />

            {/* Floating actions at top */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md text-white font-extrabold text-xs border border-white/20">
                  {isAnimal ? listing?.source : 'Услуга ЗооМаяк'}
                </span>
                {(listing?.verified || service?.rating) && (
                  <span className="px-3 py-1.5 rounded-xl bg-emerald-500/90 backdrop-blur-md text-white font-extrabold text-xs flex items-center gap-1.5 shadow-md">
                    <ShieldCheck className="w-4 h-4" /> Проверено
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button 
                  onClick={handleToggleFavorite}
                  className={`p-2.5 rounded-xl backdrop-blur-md border transition cursor-pointer ${
                    isFavorite 
                      ? 'bg-rose-500 text-white border-rose-400' 
                      : 'bg-black/50 text-white border-white/20 hover:bg-black/70'
                  }`}
                  aria-label="В избранное"
                >
                  <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
                </button>
                <button 
                  onClick={handleShare}
                  className="p-2.5 rounded-xl bg-black/50 backdrop-blur-md text-white border border-white/20 hover:bg-black/70 transition cursor-pointer"
                  aria-label="Поделиться"
                  title="Скопировать ссылку"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                </button>
                <button 
                  onClick={onClose}
                  className="p-2.5 rounded-xl bg-black/50 backdrop-blur-md text-white border border-white/20 hover:bg-rose-600 transition cursor-pointer"
                  aria-label="Закрыть"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Title & price overlay at bottom of image */}
            <div className="absolute bottom-4 left-5 right-5 z-10 text-white">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black drop-shadow-md">
                    {isAnimal ? listing?.title : service?.title}
                  </h2>
                  <div className="flex items-center gap-2 mt-1 text-slate-200 text-xs font-semibold">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-teal-400" /> 
                      {isAnimal ? listing?.city : `${service?.address} · ${service?.district}`}
                    </span>
                    <span>•</span>
                    <span>{isAnimal ? listing?.publishedAt : service?.openHours}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs text-slate-300 block font-medium">Стоимость</span>
                  <span className="text-2xl sm:text-3xl font-black text-emerald-400 drop-shadow-md">
                    {isAnimal 
                      ? (listing?.price ? `${listing.price.toLocaleString('ru-RU')} ₽` : 'Бесплатно')
                      : `от ${service?.priceFrom.toLocaleString('ru-RU')} ₽`}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Body Content */}
          <div className="p-5 sm:p-7 space-y-6 max-h-[calc(85vh-260px)] overflow-y-auto">
            {/* Key Parameters Chips */}
            {isAnimal && listing && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 block">Порода</span>
                  <strong className="text-xs text-slate-900 dark:text-white font-bold block mt-0.5 truncate">{listing.breed}</strong>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 block">Возраст</span>
                  <strong className="text-xs text-slate-900 dark:text-white font-bold block mt-0.5">{listing.age}</strong>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 block">Пол</span>
                  <strong className="text-xs text-slate-900 dark:text-white font-bold block mt-0.5">
                    {listing.sex === 'female' ? 'Девочка ♀' : 'Мальчик ♂'}
                  </strong>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 block">Источник</span>
                  <strong className="text-xs text-teal-700 dark:text-teal-400 font-bold block mt-0.5 truncate">{listing.source}</strong>
                </div>
              </div>
            )}

            {/* Service Rating & Specs */}
            {!isAnimal && service && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-black">
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-slate-900 dark:text-white">{service.rating} из 5.0</div>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400">{service.reviewsCount} отзывов клиентов</span>
                  </div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0" />
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-900 dark:text-white">Часы работы</div>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 truncate block">{service.openHours}</span>
                  </div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-900 dark:text-white">Лицензия</div>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 truncate block">Сертифицировано ZM</span>
                  </div>
                </div>
              </div>
            )}

            {/* Description Section */}
            <div>
              <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Описание и подробности
              </h4>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-2">
                <p>{isAnimal ? listing?.description : service?.description}</p>
                {isAnimal && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800/80">
                    Питомец социально адаптирован, приучен к порядку и готов к переезду в заботливую семью.
                  </p>
                )}
              </div>
            </div>

            {/* Health & Documents Checklist (for animals) */}
            {isAnimal && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-500 dark:text-slate-400">
                    Документы и ветеринарный статус
                  </h4>
                  <button
                    onClick={() => setIsContractOpen(true)}
                    className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" /> Бланк договора купли-продажи →
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2.5 text-xs text-emerald-900 dark:text-emerald-300 font-bold">
                    <FileCheck2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Ветеринарный паспорт с отметками</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2.5 text-xs text-emerald-900 dark:text-emerald-300 font-bold">
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Прививки и дегельминтизация по возрасту</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center gap-2.5 text-xs text-teal-900 dark:text-teal-300 font-bold">
                    <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                    <span>Поддержка регистрации в ЗооМаяк</span>
                  </div>
                  <button 
                    onClick={() => setIsContractOpen(true)}
                    className="p-3 rounded-2xl bg-teal-500/15 hover:bg-teal-500/25 border border-teal-500/30 flex items-center justify-between gap-2.5 text-xs text-teal-900 dark:text-teal-200 font-bold transition text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                      <span>Типовой договор купли-продажи</span>
                    </div>
                    <span className="text-[10px] bg-teal-500 text-white px-2 py-0.5 rounded-full">Открыть</span>
                  </button>
                </div>
              </div>
            )}

            {/* Safety Warning */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
                <strong>Правило безопасности ЗооМаяка:</strong> Никогда не переводите предоплату до личной встречи с продавцом и осмотра питомца. Обязательно подписывайте договор купли-продажи и оформляйте цифровой QR-паспорт в ЗооМаяке.
              </div>
            </div>
          </div>

          {/* Modal Foot Actions */}
          <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {isAnimal && (
                <button
                  onClick={() => setIsContractOpen(true)}
                  className="px-4 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span>Договор</span>
                </button>
              )}
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {contacted ? 'Контакт сохранен в журнале' : 'Прямая связь с продавцом'}
              </span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={isAnimal ? 'tel:+79991234567' : `tel:${service?.phone}`}
                onClick={() => setContacted(true)}
                className="flex-1 sm:flex-initial px-6 py-3 rounded-2xl bg-teal-500 hover:bg-teal-600 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md shadow-teal-500/20 transition cursor-pointer"
              >
                <Phone className="w-4 h-4" /> Позвонить
              </a>

              <button
                onClick={() => {
                  alert('Чат с продавцом открыт в защищенном канале ЗооМаяка.');
                  setContacted(true);
                }}
                className="flex-1 sm:flex-initial px-5 py-3 rounded-2xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-extrabold text-xs flex items-center justify-center gap-2 transition cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-teal-600 dark:text-teal-400" /> Написать
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Sales Contract Modal */}
      {isContractOpen && (
        <SalesContractModal
          isOpen={isContractOpen}
          onClose={() => setIsContractOpen(false)}
          listing={listing}
        />
      )}
    </>
  );
};

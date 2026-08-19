import React from 'react';
import { ArrowRight, CalendarDays, CheckCircle2, FileText, Heart, Plus, QrCode, Radio, ShieldCheck, Tag } from 'lucide-react';
import { Pet } from '../types';

interface HeroSectionProps {
  selectedPet: Pet;
  onOpenPassport: () => void;
  onOpenCollarStudio: () => void;
  onOpenAddPet: () => void;
  onOpenSOS: () => void;
  onSelectPet: (pet: Pet) => void;
  allPets: Pet[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  selectedPet,
  onOpenPassport,
  onOpenCollarStudio,
  onOpenAddPet,
  onOpenSOS,
  onSelectPet,
  allPets,
}) => {
  const nextReminder = '12.09';

  return (
    <section className="home-shell max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8 py-5 lg:py-6">
      <div className="home-hero-grid">
        <div className="hero-main-card">
          <div className="hero-copy">
            <span className="eyebrow"><ShieldCheck className="w-4 h-4" /> ЦИФРОВОЙ ПРОФИЛЬ ПИТОМЦА</span>
            <h1>Вся жизнь <span>питомца</span><br />в одном месте.</h1>
            <p>Здоровье, документы, забота и безопасность — в одном понятном сервисе с персональным QR-маяком.</p>
            <div className="hero-actions">
              <button onClick={onOpenPassport} className="primary-cta"><FileText className="w-4 h-4" /> Открыть профиль <ArrowRight className="w-4 h-4" /></button>
              <button onClick={onOpenCollarStudio} className="secondary-cta"><QrCode className="w-4 h-4" /> Создать QR-адресник</button>
            </div>
            <div className="hero-benefits">
              <span><CheckCircle2 /> Один профиль для всего</span>
              <span><CheckCircle2 /> Постоянный ZM-ID</span>
              <span><CheckCircle2 /> QR-код питомца</span>
            </div>
          </div>
        </div>

        <aside className="hero-profile-card">
          <div className="hero-profile-top">
            <div>
              <span className="mini-label">БЫСТРЫЙ ПРОСМОТР</span>
              <div className="hero-health-badge"><strong>{selectedPet.healthScore}%</strong><span>Состояние<br /><b>в норме</b></span></div>
            </div>
            <span className="zm-pill">ZM-ID · {selectedPet.zmId}</span>
          </div>

          <div className="hero-profile-person">
            <div className="hero-profile-photo-wrap">
              <img src={selectedPet.photoUrl} alt={selectedPet.name} className="hero-profile-photo" />
              <span className="pet-ok large">✓</span>
            </div>
            <div className="min-w-0">
              <div className="hero-profile-name-row"><h2>{selectedPet.name}</h2><CheckCircle2 className="w-5 h-5" /></div>
              <p>{selectedPet.breed}</p>
              <small>{selectedPet.ageText} · {selectedPet.species === 'dog' ? 'Собака' : 'Кошка'}</small>
            </div>
          </div>

          <div className="hero-profile-stats">
            <div><span><Heart className="w-3.5 h-3.5" /> Здоровье</span><strong>Все прививки актуальны</strong><small>Индекс: {selectedPet.healthScore}%</small></div>
            <div><span><FileText className="w-3.5 h-3.5" /> Документы</span><strong>Всё под рукой</strong><small>Чип и ветпаспорт</small></div>
          </div>

          <button onClick={onOpenPassport} className="hero-profile-button">Перейти в профиль <ArrowRight className="w-4 h-4" /></button>
          <div className="hero-profile-footer"><span><Radio className="w-3.5 h-3.5" /> QR-маяк включён</span><span>Ближайшее: {nextReminder}</span></div>
        </aside>
      </div>

      <div className="pet-strip-head">
        <div>
          <span className="eyebrow compact"><Heart className="w-3.5 h-3.5" /> ВАШИ ПИТОМЦЫ</span>
          <h2>Выберите питомца</h2>
        </div>
        <button onClick={onOpenAddPet} className="ghost-action"><Plus className="w-4 h-4" /> Добавить питомца</button>
      </div>

      <div className="pet-strip">
        {allPets.map((pet) => {
          const active = pet.id === selectedPet.id;
          return (
            <button key={pet.id} onClick={() => onSelectPet(pet)} className={`pet-strip-card ${active ? 'is-active' : ''}`}>
              <div className="pet-avatar-wrap"><img src={pet.photoUrl} alt={pet.name} className="pet-avatar" /><span className="pet-ok">✓</span></div>
              <div className="min-w-0 flex-1 text-left"><h3>{pet.name}</h3><p>{pet.breed}</p><small>{pet.ageText}</small></div>
              <div className="pet-strip-score"><span>{pet.healthScore}%</span><small>индекс</small></div>
              <ArrowRight className="pet-strip-arrow" />
            </button>
          );
        })}
      </div>

      <div className="home-lower-grid">
        <div className="panel-card reminders-preview">
          <div className="panel-heading"><div><span className="eyebrow compact"><CalendarDays className="w-3.5 h-3.5" /> БЛИЖАЙШИЕ СОБЫТИЯ</span><h3>Напоминания</h3></div><span className="panel-link">Все напоминания →</span></div>
          <div className="reminder-row"><div className="reminder-icon"><CalendarDays className="w-4 h-4" /></div><div className="flex-1"><strong>Вакцинация</strong><span>{selectedPet.name} · {nextReminder}.09</span></div><span className="positive">запланировано</span></div>
          <div className="reminder-row"><div className="reminder-icon"><ShieldCheck className="w-4 h-4" /></div><div className="flex-1"><strong>Проверка документов</strong><span>Ветпаспорт и данные чипа</span></div><span className="positive">готово</span></div>
        </div>

        <div className="sos-preview panel-card">
          <div className="sos-preview-top"><div className="sos-illustration"><Radio className="w-6 h-6" /></div><span className="status-pill">SOS-маяк</span></div>
          <span className="eyebrow compact">БЕЗОПАСНОСТЬ</span>
          <h3>Питомец потерялся?</h3>
          <p>Запустите поиск и быстро покажите проверенные данные владельца.</p>
          <button onClick={onOpenSOS} className="secondary-cta small"><Radio className="w-4 h-4" /> Открыть SOS</button>
        </div>
      </div>

      <div className="selected-pet-compact">
        <div className="selected-pet-compact-main">
          <img src={selectedPet.photoUrl} alt={selectedPet.name} className="selected-pet-compact-photo" />
          <div><span className="eyebrow compact"><Tag className="w-3.5 h-3.5" /> ДАННЫЕ ПИТОМЦА</span><h3>{selectedPet.name} <span>{selectedPet.species === 'dog' ? 'Собака' : 'Кошка'}</span></h3><p>Чип {selectedPet.microchipId} · Паспорт {selectedPet.passportNumber}</p></div>
        </div>
        <div className="selected-pet-compact-actions"><button onClick={onOpenPassport} className="primary-cta small"><FileText className="w-4 h-4" /> Паспорт</button><button onClick={onOpenCollarStudio} className="secondary-cta small"><QrCode className="w-4 h-4" /> QR</button></div>
      </div>
    </section>
  );
};

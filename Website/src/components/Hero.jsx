import { useLang } from '../i18n'
import { cleanupField } from '../images'

export default function Hero() {
  const { t } = useLang()

  return (
    <header className="hero" id="top">
      <div className="hero-media">
        <img
          src={cleanupField}
          width="2000"
          height="1334"
          alt={t(
            'ອາສາສະໝັກ Local Low Waste ຮ່ວມກັນເກັບກຳຂີ້ເຫຍື້ອຢູ່ນະຄອນຫຼວງວຽງຈັນ',
            'Local Low Waste volunteers collecting waste together in Vientiane Capital',
          )}
        />
      </div>
      <div className="hero-overlay">
        <h1 className="hero-title">
          {t('ວຽງຈັນທີ່ສະອາດ ເລີ່ມຈາກຕົວເຮົາເອງ', 'A cleaner Vientiane starts with us')}
        </h1>
        <div className="hero-actions">
          <a className="hero-btn" href="#whatwedo">
            {t('ວຽກຂອງເຮົາ', 'What we do')}
          </a>
          <a className="hero-btn hero-btn-alt" href="#involved">
            {t('ເຂົ້າຮ່ວມກັບພວກເຮົາ', 'Get involved')}
          </a>
        </div>
      </div>
    </header>
  )
}

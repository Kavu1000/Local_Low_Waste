import { useLang } from '../i18n'

const PARTNERS = [
  {
    mark: 'ZWL',
    name: 'Zero Waste Laos',
    descLo: 'ຄູ່ຮ່ວມງານດ້ານນະໂຍບາຍ ແລະ ການຈັດການຂີ້ເຫຍື້ອ',
    descEn: 'Partner on waste policy and waste management',
  },
  {
    mark: 'N101',
    name: 'Nova 101 Club',
    descLo: 'ຄູ່ຮ່ວມງານດ້ານອາສາສະໝັກຊາວໜຸ່ມ',
    descEn: 'Youth volunteer partner club',
  },
  {
    mark: 'JS26',
    name: 'Jaopeek & Seek 2026',
    descLo: 'ຄູ່ຮ່ວມງານດ້ານກິດຈະກຳ ແລະ ການສື່ສານ',
    descEn: 'Events and communications partner',
  },
]

export default function Partners() {
  const { t } = useLang()

  return (
    <section className="section" id="partners">
      <div className="wrap">
        <div className="section-head">
          <h2>{t('ຄູ່ຮ່ວມງານ', 'Partners')}</h2>
        </div>
        <div className="partners-grid">
          {PARTNERS.map((partner) => (
            <div className="partner" key={partner.name}>
              <div className="mark">{partner.mark}</div>
              <div>
                <strong>{partner.name}</strong>
                <span>{t(partner.descLo, partner.descEn)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

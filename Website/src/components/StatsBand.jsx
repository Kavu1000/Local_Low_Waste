import { useLang } from '../i18n'

const STATS = [
  { num: '1,200+', labelLo: 'ກິໂລ ຂີ້ເຫຍື້ອທີ່ເກັບກຳໄດ້', labelEn: 'Kg of waste collected' },
  { num: '30', labelLo: 'ກິດຈະກຳທຳຄວາມສະອາດ', labelEn: 'Clean-up events' },
  { num: '450+', labelLo: 'ອາສາສະໝັກຊາວໜຸ່ມ', labelEn: 'Youth volunteers' },
  { num: '12', labelLo: 'ໂຮງຮຽນທີ່ເຂົ້າຮ່ວມ', labelEn: 'Partner schools' },
]

export default function StatsBand() {
  const { t } = useLang()

  return (
    <section className="stats" aria-label={t('ຜົນງານເປັນຕົວເລກ', 'Our work in numbers')}>
      <div className="wrap">
        {STATS.map((stat) => (
          <div className="stat" key={stat.labelEn}>
            <span className="num tnum">{stat.num}</span>
            <span className="label">{t(stat.labelLo, stat.labelEn)}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

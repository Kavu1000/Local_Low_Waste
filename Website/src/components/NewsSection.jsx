import { useLang } from '../i18n'
import { boothBanner, cleanupBottles, cleanupInterview, cleanupTruck } from '../images'

const NEWS_ITEMS = [
  {
    id: 'cleanup',
    img: cleanupTruck,
    w: 1100,
    h: 733,
    kindLo: 'ກິດຈະກຳ',
    kindEn: 'Clean-up',
    titleLo: 'ເກັບກຳຂີ້ເຫຍື້ອແຄມທາງ ຮ່ວມກັບໜ່ວຍງານຈະລາຈອນ',
    titleEn: 'Roadside clean-up with the Vientiane Traffic team',
    bodyLo: 'ຂີ້ເຫຍື້ອທີ່ເກັບໄດ້ຖືກບັນທຸກຂຶ້ນລົດເປັນຖົງໃຫຍ່ຫຼາຍສິບຖົງ ເພື່ອນຳໄປຄັດແຍກຕໍ່.',
    bodyEn: 'Dozens of full bags were loaded onto the truck to be sorted afterwards.',
    altLo: 'ລົດກະບະບັນທຸກຖົງຂີ້ເຫຍື້ອສີດຳເຕັມຄັນ ຢູ່ແຄມທາງ',
    altEn: 'A pickup truck loaded with black waste bags at the roadside',
  },
  {
    id: 'field',
    img: cleanupBottles,
    w: 1100,
    h: 733,
    kindLo: 'ຄັດແຍກ',
    kindEn: 'Sorting',
    titleLo: 'ຂວດພລາສະຕິກຖືກແຍກອອກເພື່ອນຳໄປໝູນວຽນ',
    titleEn: 'Plastic bottles separated out for recycling',
    bodyLo: 'ອາສາສະໝັກແຍກຂວດພລາສະຕິກອອກຈາກຂີ້ເຫຍື້ອທົ່ວໄປ ຕັ້ງແຕ່ຢູ່ໜ້າງານ.',
    bodyEn: 'Volunteers separate plastic bottles from general waste right at the site.',
    altLo: 'ອາສາສະໝັກຖືຖົງໃສ່ຂວດພລາສະຕິກເຕັມຖົງ',
    altEn: 'A volunteer holding a clear bag full of plastic bottles',
  },
  {
    id: 'media',
    img: cleanupInterview,
    w: 1100,
    h: 733,
    kindLo: 'ສື່ສານ',
    kindEn: 'Outreach',
    titleLo: 'ບອກເລົ່າເລື່ອງຂີ້ເຫຍື້ອ ຜ່ານສາຍຕາຊາວໜຸ່ມ',
    titleEn: 'Telling the waste story through young voices',
    bodyLo: 'ສະມາຊິກທີມໃຫ້ສຳພາດໜ້າງານ ເພື່ອເຜີຍແຜ່ເລື່ອງການຄັດແຍກໃຫ້ຄົນທົ່ວໄປ.',
    bodyEn: 'Team members give on-site interviews to spread the word about sorting waste.',
    altLo: 'ສະມາຊິກທີມກຳລັງໃຫ້ສຳພາດຢູ່ໜ້າງານທຳຄວາມສະອາດ',
    altEn: 'A team member being interviewed on camera at a clean-up site',
  },
  {
    id: 'booth',
    img: boothBanner,
    w: 1100,
    h: 825,
    kindLo: 'ວາງສະແດງ',
    kindEn: 'Exhibition',
    titleLo: 'ຕັ້ງບູດ Local Low Waste Laos ພົບປະນັກຮຽນ',
    titleEn: 'Local Low Waste Laos booth meets students',
    bodyLo: 'ແນະນຳວິໄສທັດ, ກິດຈະກຳ ແລະ ຜະລິດຕະພັນ upcycle ໃຫ້ນັກຮຽນ ແລະ ຜູ້ສົນໃຈ.',
    bodyEn: 'Sharing our vision, activities and upcycled products with students and visitors.',
    altLo: 'ບູດ Local Low Waste Laos ພ້ອມປ້າຍ roll-up ແລະ ນັກຮຽນທີ່ມາຢ້ຽມຢາມ',
    altEn: 'The Local Low Waste Laos booth with its roll-up banner and visiting students',
  },
]

export default function NewsSection({ query = '' }) {
  const { t } = useLang()

  const q = query.trim().toLowerCase()
  const items = q
    ? NEWS_ITEMS.filter((item) =>
        [item.titleLo, item.titleEn, item.bodyLo, item.bodyEn, item.kindLo, item.kindEn]
          .join(' ')
          .toLowerCase()
          .includes(q),
      )
    : NEWS_ITEMS

  return (
    <section className="section" id="news">
      <div className="wrap">
        <div className="section-head">
          <h2>{t('ຜົນງານ ແລະ ກິດຈະກຳ', 'Our work and activities')}</h2>
          <a className="viewall" href="#gallery">
            {t('ທັງໝົດ →', 'All →')}
          </a>
        </div>

        {items.length === 0 ? (
          <p className="empty-state">
            {t(`ບໍ່ພົບຜົນການຄົ້ນຫາ “${query}”`, `Nothing matches “${query}”`)}
          </p>
        ) : (
          <div className="news-grid">
            {items.map((item) => (
              <article className="news-card" key={item.id}>
                <div className="news-thumb">
                  <img
                    src={item.img}
                    width={item.w}
                    height={item.h}
                    loading="lazy"
                    alt={t(item.altLo, item.altEn)}
                  />
                </div>
                <div className="news-body">
                  <p className="news-meta">{t(item.kindLo, item.kindEn)}</p>
                  <h3>{t(item.titleLo, item.titleEn)}</h3>
                  <p className="news-excerpt">{t(item.bodyLo, item.bodyEn)}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

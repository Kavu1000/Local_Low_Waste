import { useLang } from '../i18n'
import {
  CommunityIcon,
  EducationIcon,
  LeadershipIcon,
  LowWasteIcon,
  UpcycleIcon,
} from './Icons'

/* These five are the organisation's own "#WHAT WE DO" list,
   taken from the Local Low Waste Laos roll-up banner. */
const TILES = [
  {
    Icon: CommunityIcon,
    titleLo: 'ກິດຈະກຳທຳຄວາມສະອາດ',
    titleEn: 'Clean-up campaigns',
    bodyLo: 'ຈັດກິດຈະກຳທຳຄວາມສະອາດ ແລະ ກິດຈະກຳສິ່ງແວດລ້ອມ ທີ່ນຳພາໂດຍຊາວໜຸ່ມ.',
    bodyEn: 'Organize youth-led clean-up campaigns and environmental activities.',
  },
  {
    Icon: LowWasteIcon,
    titleLo: 'ວິຖີຊີວິດ Low Waste',
    titleEn: 'Low-waste living',
    bodyLo: 'ສົ່ງເສີມວິຖີຊີວິດແບບ low-waste ແລະ ຍືນຍົງ ພາຍໃນຊຸມຊົນ.',
    bodyEn: 'Promote low-waste and sustainable lifestyles in communities.',
  },
  {
    Icon: EducationIcon,
    titleLo: 'ການສຶກສາສິ່ງແວດລ້ອມ',
    titleEn: 'Environmental education',
    bodyLo: 'ຈັດກອງປະຊຸມສຳມະນາ ແລະ ໂຄງການສ້າງຈິດສຳນຶກດ້ານສິ່ງແວດລ້ອມ.',
    bodyEn: 'Conduct environmental education workshops and awareness programs.',
  },
  {
    Icon: UpcycleIcon,
    titleLo: 'Upcycle ແບບມີສ່ວນຮ່ວມ',
    titleEn: 'Inclusive upcycling',
    bodyLo: 'ສ້າງກິດຈະກຳ upcycle ທີ່ມີສ່ວນຮ່ວມ ຮ່ວມກັບຄົນພິການ.',
    bodyEn: 'Create inclusive upcycling activities with people with disabilities.',
  },
  {
    Icon: LeadershipIcon,
    titleLo: 'ສ້າງຜູ້ນຳຊາວໜຸ່ມ',
    titleEn: 'Youth leadership',
    bodyLo: 'ເສີມສ້າງຄວາມເຂັ້ມແຂງໃຫ້ຊາວໜຸ່ມ ຜ່ານການເປັນຜູ້ນຳ, ອາສາສະໝັກ ແລະ ກິດຈະກຳຊຸມຊົນ.',
    bodyEn: 'Empower youth through leadership, volunteering, and community action.',
  },
]

export default function WhatWeDo() {
  const { t } = useLang()

  return (
    <section className="section alt" id="whatwedo">
      <div className="wrap">
        <div className="section-head">
          <h2>{t('ວຽກຂອງເຮົາ', 'What we do')}</h2>
        </div>
        <p className="section-lede">
          <strong>{t('ວິໄສທັດຂອງພວກເຮົາ — ', 'Our vision — ')}</strong>
          {t(
            'ເສີມສ້າງພະລັງໃຫ້ຊາວໜຸ່ມ ແລະ ຜູ້ຄົນ ເພື່ອສ້າງອະນາຄົດທີ່ສະອາດ ແລະ ຍືນຍົງກວ່າເກົ່າ ຜ່ານການເສີມສ້າງພະລັງທາງສັງຄົມ, ການລົງມືເພື່ອສິ່ງແວດລ້ອມ, ວິຖີຊີວິດແບບ low-waste ແລະ ການ upcycle ຢ່າງສ້າງສັນ.',
            'To empower youth and people to create a cleaner and more sustainable future through social empowerment, environmental action, low-waste lifestyles, and creative upcycling initiatives.',
          )}
        </p>
        <div className="tiles">
          {TILES.map(({ Icon, titleLo, titleEn, bodyLo, bodyEn }) => (
            <div className="tile" key={titleEn}>
              <span className="tile-icon">
                <Icon />
              </span>
              <h3>{t(titleLo, titleEn)}</h3>
              <p>{t(bodyLo, bodyEn)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

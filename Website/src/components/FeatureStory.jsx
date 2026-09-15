import { useLang } from '../i18n'
import { WasteFlowDiagram } from './Icons'

export default function FeatureStory() {
  const { t } = useLang()

  return (
    <section className="section alt" id="story">
      <div className="wrap">
        <div className="section-head">
          <h2>{t('ບົດຄວາມເດັ່ນ', 'Feature story')}</h2>
        </div>
        <div className="feature">
          <div className="feature-art">
            <WasteFlowDiagram t={t} />
          </div>
          <div className="feature-copy">
            <span className="eyebrow">{t('ການຈັດການຂີ້ເຫຍື້ອ', 'Waste management')}</span>
            <h3>{t('ຂີ້ເຫຍື້ອຂອງວຽງຈັນໄປໃສ?', "Where does Vientiane's waste go?")}</h3>
            <p>
              {t(
                'ຂີ້ເຫຍື້ອສ່ວນຫຼາຍຈາກຄົວເຮືອນໃນນະຄອນຫຼວງວຽງຈັນ ຖືກເກັບກຳແບບບໍ່ໄດ້ຄັດແຍກ ແລ້ວສົ່ງໄປຝັງກາຍທີ່ບ່ອນຖິ້ມຂີ້ເຫຍື້ອ KM32 ເຊິ່ງຫ່າງຈາກໃຈກາງເມືອງປະມານ 32 ກິໂລແມັດ.',
                'Most household waste in Vientiane Capital is collected unsorted and sent to the KM32 landfill, about 32 kilometres from the city centre.',
              )}
            </p>
            <p>
              {t(
                'ເນື່ອງຈາກການຄັດແຍກຕັ້ງແຕ່ຕົ້ນທາງຍັງມີໜ້ອຍ, ວັດຖຸທີ່ນຳໄປໝູນວຽນໄດ້ ເຊັ່ນ: ພລາສະຕິກ, ແກ້ວ ແລະ ໂລຫະ ຈຶ່ງຖືກຝັງກາຍໄປພ້ອມກັບຂີ້ເຫຍື້ອອື່ນໆ.',
                'Because sorting at the source is still limited, recyclable materials — plastic, glass and metal — end up buried alongside the rest.',
              )}
            </p>
            <blockquote>
              {t('“ການປ່ຽນແປງ ສາມາດເລີ່ມຈາກຕົວເຮົາເອງ.”', '“Chan(c)ge can begin with ourselves.”')}
            </blockquote>
            <a className="btn btn-outline-dark" href="#involved">
              {t('ຮ່ວມແກ້ໄຂບັນຫານີ້', 'Help solve this')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

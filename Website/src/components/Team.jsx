import { useLang } from '../i18n'
import { boothSigns, boothTable, teamMembers } from '../images'

export default function Team() {
  const { t } = useLang()

  return (
    <section className="section" id="team">
      <div className="wrap">
        <div className="section-head">
          <h2>{t('ທີມງານຂອງພວກເຮົາ', 'Our team')}</h2>
        </div>

        <figure className="team-photo">
          <img
            src={teamMembers}
            width="1600"
            height="800"
            loading="lazy"
            alt={t(
              'ສະມາຊິກທີມ Local Low Waste Laos 7 ຄົນ: Film, San, Mix, Paula, Bus, Poppy, Eing',
              'The 7 members of Local Low Waste Laos: Film, San, Mix, Paula, Bus, Poppy, Eing',
            )}
          />
        </figure>
        </div>
    </section>
  )
}

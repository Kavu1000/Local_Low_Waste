import { useLang } from '../i18n'

export default function GetInvolved() {
  const { t } = useLang()

  return (
    <section className="cta" id="involved">
      <div className="wrap">
        <span className="eyebrow">{t('ເຂົ້າຮ່ວມກັບພວກເຮົາ', 'Get involved')}</span>
        <h2>{t('ຢາກຮ່ວມເຮັດໃຫ້ວຽງຈັນສະອາດຂຶ້ນບໍ?', 'Want to help make Vientiane cleaner?')}</h2>
        <p>
          {t(
            'ສະໝັກເປັນອາສາສະໝັກ, ຮ່ວມກິດຈະກຳທຳຄວາມສະອາດ, ຫຼື ຕິດຕໍ່ພວກເຮົາເພື່ອຮ່ວມມືກັບໂຮງຮຽນ ແລະ ອົງກອນຂອງທ່ານ.',
            'Sign up as a volunteer, join a clean-up, or contact us to work together with your school or organisation.',
          )}
        </p>
        <div className="cta-actions">
          <a className="btn btn-lime" href="mailto:locallowwaste.project@gmail.com">
            {t('ຕິດຕໍ່ພວກເຮົາ', 'Contact us')}
          </a>
          <a
            className="btn btn-outline"
            href="https://instagram.com/local_low_waste_laos"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('ຕິດຕາມ Instagram', 'Follow on Instagram')}
          </a>
        </div>
      </div>
    </section>
  )
}

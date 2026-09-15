import { useLang } from '../i18n'
import { FacebookIcon, GmailIcon, InstagramIcon, LogoMarkMono, TikTokIcon } from './Icons'

const EMAIL = 'locallowwaste.project@gmail.com'
const INSTAGRAM = 'https://instagram.com/local_low_waste_laos'

/* Fill `href` in for Facebook and TikTok once those accounts exist —
   an entry with an empty href renders dimmed instead of as a dead link. */
const SOCIAL = [
  { name: 'Gmail', label: EMAIL, href: `mailto:${EMAIL}`, Icon: GmailIcon },
  { name: 'Facebook', label: 'Facebook', href: '', Icon: FacebookIcon },
  { name: 'Instagram', label: '@local_low_waste_laos', href: INSTAGRAM, Icon: InstagramIcon },
  { name: 'TikTok', label: 'TikTok', href: '', Icon: TikTokIcon },
]

export default function Footer() {
  const { t } = useLang()

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-col">
            <h4>{t('ກ່ຽວກັບ', 'About us')}</h4>
            <ul>
              <li>
                <a href="#story">{t('ເລື່ອງຂອງພວກເຮົາ', 'Our story')}</a>
              </li>
              <li>
                <a href="#team">{t('ທີມງານ', 'Team')}</a>
              </li>
              <li>
                <a href="#partners">{t('ຄູ່ຮ່ວມງານ', 'Partners')}</a>
              </li>
              <li>
                <a href="#news">{t('ລາຍງານປະຈຳປີ', 'Annual report')}</a>
              </li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>{t('ໂຄງການ', 'Programmes')}</h4>
            <ul>
              <li>
                <a href="#whatwedo">{t('ການສຶກສາ', 'Education')}</a>
              </li>
              <li>
                <a href="#whatwedo">{t('ການ Upcycle', 'Upcycling')}</a>
              </li>
              <li>
                <a href="#whatwedo">{t('ຊຸມຊົນ', 'Community')}</a>
              </li>
              <li>
                <a href="#whatwedo">{t('ນະໂຍບາຍ ແລະ ຂໍ້ມູນ', 'Policy & data')}</a>
              </li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>{t('ຊັບພະຍາກອນ', 'Resources')}</h4>
            <ul>
              <li>
                <a href="#news">{t('ຂ່າວ ແລະ ກິດຈະກຳ', 'News & events')}</a>
              </li>
              <li>
                <a href="#story">{t('ບົດຄວາມ', 'Stories')}</a>
              </li>
              <li>
                <a href="#story">{t('ຂໍ້ມູນຂີ້ເຫຍື້ອ', 'Waste data')}</a>
              </li>
              <li>
                <a href="#involved">{t('ສຳລັບໂຮງຮຽນ', 'For schools')}</a>
              </li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>{t('ຕິດຕໍ່ພວກເຮົາ', 'Contact us')}</h4>
            <a className="foot-email" href={`mailto:${EMAIL}`}>
              <GmailIcon />
              {EMAIL}
            </a>
            <div className="foot-buttons">
              <a className="foot-btn" href={`mailto:${EMAIL}`}>
                {t('ສົ່ງອີເມວ', 'Email us')}
              </a>
              <a className="foot-btn" href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
                {t('ຕິດຕາມ Instagram', 'Follow on Instagram')}
              </a>
            </div>
            <p className="foot-address">{t('ນະຄອນຫຼວງວຽງຈັນ, ສປປ ລາວ', 'Vientiane Capital, Lao PDR')}</p>
          </div>
        </div>

        <div className="foot-logo">
          <LogoMarkMono />
          <span>
            <strong>{t('Local Low Waste', 'Local Low Waste')}</strong>
            <strong>{t('Laos', 'Laos')}</strong>
          </span>
        </div>
      </div>

      <div className="foot-bottom">
        <div className="wrap">
          <a href="#top">{t('ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວ', 'Privacy policy')}</a>
          <div className="foot-social">
            {SOCIAL.map(({ name, label, href, Icon }) =>
              href ? (
                <a
                  key={name}
                  href={href}
                  aria-label={`${name} — ${label}`}
                  {...(href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  <Icon />
                </a>
              ) : (
                <span
                  key={name}
                  className="foot-social-pending"
                  title={t(`${name}: ຍັງບໍ່ທັນມີລິ້ງ`, `${name}: link not set yet`)}
                >
                  <Icon />
                </span>
              ),
            )}
          </div>
          <span className="tnum">© 2026 Local Low Waste Laos</span>
        </div>
      </div>
    </footer>
  )
}

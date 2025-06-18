import FooterBottomLinks from "../molecules/FooterBottomLinks";
import FooterContactInfo from "../molecules/FooterContactInfo";
import FooterForm from "../molecules/FooterForm";
import FooterQuickLinks from "../molecules/FooterQuickLinks";
import FooterSocialIcons from "../molecules/FooterSocialIcons";

export default function Footer() {
  return (
    <footer className="bg-[#1A191A] py-5 ]">
      <div className="container">
        <div className="footer-logo flex justify-end my-7">
          <img
            src="../../../public/assets/logos/white-logo.svg"
            alt="Haris-Logo"
          />
        </div>
        <div className="footer-contents flex  flex-wrap justify-between gap-10 text-end">
          <FooterQuickLinks />
          <FooterContactInfo />
          <FooterForm />
        </div>

        <FooterSocialIcons />
      </div>
      <hr className="mt-5 mb-10 border-gray-500" />
      <FooterBottomLinks />
    </footer>
  );
}

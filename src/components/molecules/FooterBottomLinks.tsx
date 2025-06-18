export default function FooterBottomLinks() {
  return (
    <div className="container flex flex-col lg:flex-row items-center justify-between flex-wrap gap-5">
      <a href="#" className="hover:text-[var(--main-color)] transition">
        البنود والأحكام
      </a>
      <p>جميع الحقوق محفوظة، منصة حارس &copy;</p>
      <a href="#" className="hover:text-[var(--main-color)] transition">
        سياسة الخصوصية
      </a>
    </div>
  );
}

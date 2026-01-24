export const metadata = {
  title: "Privacy Policy | Mayra Unisex Salon",
  description: "Privacy policy of Mayra Unisex Salon, Amravati",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

        <p className="text-gray-700 mb-4">
          Mayra Unisex Salon respects your privacy and is committed to
          protecting any personal information you share with us.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Information We Collect
        </h2>
        <p className="text-gray-700 mb-4">
          We may collect personal details such as your name, phone number, email
          address, and service preferences when you contact us, book an
          appointment, or communicate via WhatsApp or phone.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>To provide salon and training services</li>
          <li>To respond to enquiries and appointment requests</li>
          <li>To improve our services and customer experience</li>
          <li>For internal record keeping</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Data Protection</h2>
        <p className="text-gray-700 mb-4">
          We do not sell, rent, or share your personal information with third
          parties. Your data is used only for service-related communication.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Contact Information
        </h2>
        <p className="text-gray-700">
          If you have any questions regarding this privacy policy, please
          contact us at <strong>info@mayraunisexsalon.com</strong>.
        </p>
      </div>
    </section>
  );
}

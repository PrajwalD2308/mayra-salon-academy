export const metadata = {
  title: "Privacy Policy | Mayra Unisex Salon",
  description: "Privacy policy of Mayra Unisex Salon, Amravati",
};

export default function TermsAndConditionsPage() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>

        <p className="text-gray-700 mb-4">
          By accessing or using the services of Mayra Unisex Salon, you agree to
          the following terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Appointments & Services
        </h2>
        <p className="text-gray-700 mb-4">
          All services are provided based on availability. Prices mentioned are
          indicative and may vary depending on hair length, skin condition, or
          service requirements.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Cancellations</h2>
        <p className="text-gray-700 mb-4">
          Appointment cancellations or rescheduling should be informed in
          advance. Late cancellations may result in inconvenience to other
          customers.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Training Programs</h2>
        <p className="text-gray-700 mb-4">
          Fees for training courses are non-refundable once the course has
          started. Course content and schedules may change based on professional
          requirements.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Liability</h2>
        <p className="text-gray-700 mb-4">
          Mayra Unisex Salon is not responsible for any allergic reactions or
          outcomes if prior medical or skin conditions are not disclosed.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Changes to Terms</h2>
        <p className="text-gray-700">
          We reserve the right to update these terms at any time without prior
          notice.
        </p>
      </div>
    </section>
  );
}

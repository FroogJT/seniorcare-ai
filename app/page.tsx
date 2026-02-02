import { motion } from "framer-motion";

export default function SeniorCareAIWebsite(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">SeniorCare AI</h1>
        <p className="text-lg text-gray-600">
          A voice-first AI companion that helps seniors stay independent, safe, and connected.
        </p>
      </motion.header>

      {/* Features */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Feature icon="🔔" title="Medication & Routine Reminders" text="Gentle, adaptive reminders for medications, meals, hydration, and daily routines." />
        <Feature icon="💓" title="Health Support" text="Ask questions about medications, log symptoms, and prepare for doctor visits." />
        <Feature icon="📞" title="One-Touch Medical Contacts" text="Instantly reach doctors, pharmacies, caregivers, or emergency contacts by voice." />
        <Feature icon="👥" title="Social Connection" text="Reminders to call family and friends and easy voice-initiated calls." />
        <Feature icon="🛡️" title="Safety & Wellness Check-Ins" text="Daily wellness prompts with optional caregiver alerts if something seems wrong." />
        <Feature icon="👨‍⚕️" title="Caregiver Dashboard" text="View adherence trends and wellness insights—without invading privacy." />
      </section>

      {/* Built for simplicity */}
      <section className="max-w-4xl mx-auto mt-16 text-center">
        <div className="border rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">Built for Simplicity</h2>
          <p className="text-gray-600 mb-6">
            No complex apps. No confusing menus. Just calm, reliable help—by voice or touch.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Request Early Access
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-center text-sm text-gray-500">
        © 2026 SeniorCare AI · Designed for dignity, independence, and peace of mind
      </footer>
    </div>
  );
}

// Feature component
function Feature({ icon, title, text }: { icon: string; title: string; text: string }): JSX.Element {
  return (
    <div className="border rounded-lg p-6 shadow hover:-translate-y-1 transition-transform duration-200">
      <div className="mb-4 text-2xl">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}

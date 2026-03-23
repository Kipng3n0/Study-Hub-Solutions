export function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground">
                Study Hub Solutions ("we," "us," "our," or "Company") is
                committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                2. Information We Collect
              </h2>
              <p className="text-muted-foreground mb-4">
                We may collect information about you in a variety of ways. The
                information we may collect on the Site includes:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  <strong>Personal Data:</strong> Name, email address, phone
                  number, address, and educational information you voluntarily
                  provide
                </li>
                <li>
                  <strong>Payment Information:</strong> Billing address, payment
                  method details (processed securely by third-party providers)
                </li>
                <li>
                  <strong>Usage Data:</strong> IP address, browser type, pages
                  visited, time spent, and referring URL
                </li>
                <li>
                  <strong>Communication Data:</strong> Messages, inquiries, and
                  support tickets you submit
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your bookings and payments</li>
                <li>Send you service-related announcements and updates</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures
                to protect your personal data against unauthorized access,
                alteration, disclosure, or destruction. However, no method of
                transmission over the Internet or electronic storage is 100%
                secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                5. Third-Party Services
              </h2>
              <p className="text-muted-foreground">
                We may share your information with third-party service providers
                who assist us in operating our website and conducting our
                business, including payment processors, email services, and
                analytics providers. These third parties are bound by
                confidentiality agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
              <p className="text-muted-foreground">
                Our website uses cookies to enhance your experience. You may
                refuse cookies, but this may limit your ability to use certain
                features of the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
              <p className="text-muted-foreground">
                You have the right to access, update, or delete your personal
                information at any time. To exercise these rights, please
                contact us at contact@studyhubsolutions25.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                8. Changes to This Policy
              </h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy periodically. Your continued
                use of our services following the posting of revised Privacy
                Policy means that you accept and agree to the changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <p className="text-muted-foreground mt-4">
                <strong>Study Hub Solutions</strong>
                <br />
                Email: contact@studyhubsolutions25.com
                <br />
                Phone: +1 (909) 962-7940
              </p>
            </section>

            <p className="text-sm text-muted-foreground mt-12">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

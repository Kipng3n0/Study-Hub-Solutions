export function Refund() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Overview</h2>
              <p className="text-muted-foreground">
                At Study Hub Solutions, we stand behind the quality of our
                services. This Refund Policy outlines how we handle refunds for
                our tutoring, project help, and assignment support services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                2. Refund Eligibility
              </h2>
              <p className="text-muted-foreground mb-4">
                You may be eligible for a refund under the following
                circumstances:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Service was not delivered as described</li>
                <li>
                  Cancellation request made 48 hours or more before the
                  scheduled session
                </li>
                <li>Technical issues prevented service delivery on our end</li>
                <li>Payment was duplicated or processed in error</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3. Non-Refundable Services
              </h2>
              <p className="text-muted-foreground mb-4">
                The following are non-refundable:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Services fully completed and delivered</li>
                <li>
                  Cancellations made less than 48 hours before scheduled session
                </li>
                <li>No-shows (client fails to appear for scheduled session)</li>
                <li>
                  Sessions rescheduled by client due to their unavailability
                </li>
                <li>
                  Partially completed services where client requests are
                  satisfied
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Refund Process</h2>
              <p className="text-muted-foreground mb-4">
                To request a refund, follow these steps:
              </p>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                <li>
                  Contact us within 7 days of the transaction at
                  contact@studyhubsolutions25.com
                </li>
                <li>
                  Provide your order number and reason for the refund request
                </li>
                <li>
                  Our team will review your request within 3-5 business days
                </li>
                <li>
                  If approved, the refund will be processed to your original
                  payment method
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                5. Refund Timeline
              </h2>
              <p className="text-muted-foreground mb-4">
                Approved refunds will be processed as follows:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Credit card refunds: 5-10 business days</li>
                <li>Debit card refunds: 7-14 business days</li>
                <li>Digital payment services: 3-5 business days</li>
                <li>Bank transfers: 5-10 business days</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Please note that processing times depend on your financial
                institution and may vary.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                6. Cancellation and Rescheduling
              </h2>
              <p className="text-muted-foreground">
                <strong>48+ Hours Notice:</strong> Full refund or free
                rescheduling option
                <br />
                <strong>24-48 Hours Notice:</strong> 50% refund or rescheduling
                available
                <br />
                <strong>Less than 24 Hours:</strong> No refund, but you may
                reschedule without additional charge
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                7. Package Deals and Discounts
              </h2>
              <p className="text-muted-foreground">
                Refunds for package deals are prorated based on the number of
                sessions completed. Promotional discount codes are
                non-refundable. If a refund is issued, the discounted pricing
                will be adjusted accordingly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                8. Disputes and Complaints
              </h2>
              <p className="text-muted-foreground">
                If you are dissatisfied with the quality of our service, please
                contact us immediately before requesting a refund. We'll do our
                best to resolve any issues to your satisfaction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                9. Exceptions and Special Cases
              </h2>
              <p className="text-muted-foreground">
                Each refund request is reviewed individually. Study Hub
                Solutions reserves the right to grant exceptions to this policy
                at its discretion, especially in cases of exceptional
                circumstances or long-term client relationships.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                10. No Refund for Consultation Services
              </h2>
              <p className="text-muted-foreground">
                Free or discounted consultations and initial assessments are
                non-refundable, as they have already been delivered.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                11. Contact for Refund Requests
              </h2>
              <p className="text-muted-foreground">
                For refund inquiries or to initiate a refund request, please
                contact:
              </p>
              <p className="text-muted-foreground mt-4">
                <strong>Study Hub Solutions</strong>
                <br />
                Email: contact@studyhubsolutions25.com
                <br />
                Phone: +1 (909) 962-7940
                <br />
                Response time: 3-5 business days
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                12. Policy Changes
              </h2>
              <p className="text-muted-foreground">
                We reserve the right to modify this Refund Policy at any time.
                Changes will be effective immediately upon posting to our
                website. Your continued use of our services after changes
                implies acceptance of the updated policy.
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

export function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-muted-foreground">
                By accessing and using Study Hub Solutions website and services,
                you accept and agree to be bound by and comply with these Terms
                of Service. If you do not agree to abide by the above, please do
                not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
              <p className="text-muted-foreground mb-4">
                Permission is granted to temporarily use the materials
                (information or content) on Study Hub Solutions website for
                personal, non-commercial educational viewing only. This is the
                grant of a license, not a transfer of title, and under this
                license you may not:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Modify or copy the materials</li>
                <li>
                  Use the materials for any commercial purpose or for any public
                  display
                </li>
                <li>
                  Attempt to reverse engineer any software contained on the
                  website
                </li>
                <li>
                  Remove any copyright or other proprietary notations from the
                  materials
                </li>
                <li>
                  Transfer the materials to another person or "mirror" the
                  materials on any other server
                </li>
                <li>
                  Attempt to gain unauthorized access to any portion of the
                  website
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3. Service Description
              </h2>
              <p className="text-muted-foreground">
                Study Hub Solutions provides project help, assignment support,
                tutoring services, and live demos. Our services are designed to
                supplement your education and help you understand academic
                concepts better.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                4. Academic Integrity
              </h2>
              <p className="text-muted-foreground mb-4">
                While we provide support and guidance, you are responsible for
                ensuring that your use of our services complies with your
                institution's academic integrity policies. We encourage learning
                and understanding rather than copying. Our services are meant
                to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Help you understand concepts and methodologies</li>
                <li>Provide guidance on problem-solving approaches</li>
                <li>Support your learning journey</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Payment Terms</h2>
              <p className="text-muted-foreground mb-4">
                Payment for services must be made in full before or at the time
                of service delivery, unless otherwise agreed. We accept various
                payment methods including credit cards and online payment
                processors.
              </p>
              <p className="text-muted-foreground">
                All prices are subject to change without notice. Tax, if
                applicable, is additional to all prices will be specified at
                checkout.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                6. Cancellation and Rescheduling
              </h2>
              <p className="text-muted-foreground">
                Cancellations or rescheduling requests must be made at least 24
                hours before your scheduled service. Requests made less than 24
                hours before your service may result in forfeiture of payment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                7. Limitation of Liability
              </h2>
              <p className="text-muted-foreground">
                In no event shall Study Hub Solutions be liable for any damages
                (including, without limitation, damages for loss of data or
                profit, or due to business interruption) arising out of the use
                or inability to use the materials on Study Hub Solutions
                website, even if authorized representatives have been notified.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                8. Accuracy of Materials
              </h2>
              <p className="text-muted-foreground">
                The materials appearing on Study Hub Solutions website could
                include technical, typographical, or photographic errors. Study
                Hub Solutions does not warrant that any of the materials on its
                website are accurate, complete, or current. We may make changes
                to the materials contained on our website at any time without
                notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Links</h2>
              <p className="text-muted-foreground">
                Study Hub Solutions has not reviewed all of the sites linked to
                its website and is not responsible for the contents of any such
                linked site. The inclusion of any link does not imply
                endorsement by Study Hub Solutions of the site. Use of any such
                linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Modifications</h2>
              <p className="text-muted-foreground">
                Study Hub Solutions may revise these terms of service for its
                website at any time without notice. By using this website, you
                are agreeing to be bound by the then current version of these
                terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
              <p className="text-muted-foreground">
                These terms and conditions are governed by and construed in
                accordance with the laws of the jurisdiction where Study Hub
                Solutions operates, and you irrevocably submit to the exclusive
                jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                12. Contact Information
              </h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service, please
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

// src/app/contact/page.tsx
import ContactDetails from '@/components/sections/ContactDetails';
import ContactForm from '@/components/common/ContactForm'; // Will be modified for flexibility

export const metadata = {
  title: 'Austic Contact Details',
  description: 'Contact Austic Scrap for any inquiries or to sell your scrap. We value your privacy and are committed to protecting your personal information.',
};

export default function ContactPage() {
  const contactPageFormFields: Array<{
    name: string;
    type: 'text' | 'email' | 'tel' | 'number' | 'textarea';
    placeholder: string;
    required: boolean;
  }> = [
    { name: 'firstName', type: 'text', placeholder: 'Name or Company', required: true },
    { name: 'Mo', type: 'tel', placeholder: 'MOB No.', required: true },
    { name: 'email', type: 'email', placeholder: 'Email', required: true },
    { name: 'address', type: 'text', placeholder: 'Address', required: true },
    { name: 'massage', type: 'textarea', placeholder: 'Scrap Details', required: false },
  ];

  return (
    <main className="pt-20"> {/* Add padding top to account for fixed navbar */}
      <section id="contact-page" className="contact py-12">
        <div className="container mx-auto px-4">
          <h6 className="text-grad-green-end-1 text-4xl text-center font-josefin-sans mb-4">Contact Us</h6>
          <p className="text-text-black-dark text-lg text-center mb-10 max-w-3xl mx-auto">
            We value your privacy and are committed to protecting your personal information. When you fill out our contact form, your information will remain confidential and will not be shared with third parties.
          </p>

          <div className="row mt-10 flex flex-col lg:flex-row justify-center">
            <div className="col-lg-6 w-full lg:w-1/2 p-4">
              <ContactDetails />
            </div>
            <div className="col-lg-6 w-full lg:w-1/2 p-4">
              <div className="form-container bg-white p-6 rounded-lg shadow-md">
                <h6 className="text-xl font-semibold mb-2 text-text-black-dark">ENQUIRY NOW</h6>
                <p className="text-text-gray mb-6">Our Team will Contact you</p>
                <ContactForm
                  fields={contactPageFormFields}
                  submissionEndpoint="https://formspree.io/f/your-unique-endpoint" // Replace with actual endpoint
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
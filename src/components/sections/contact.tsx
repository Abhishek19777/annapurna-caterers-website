
import React from 'react';
import { PHONE_NUMBER, ADDRESS, GOOGLE_MAPS_LINK, INSTAGRAM_LINK, WHATSAPP_BOOK_NOW_LINK } from '@/lib/constants';
import { Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title section-eyebrow-line">Get In Touch</h2>
          <p className="section-subtitle">
            We'd love to hear about your event. Contact us for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-xl border bg-card p-4 shadow-sm">
              <MapPin className="h-6 w-6 text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-body text-base font-semibold">Address</h3>
                <p className="text-muted-foreground">{ADDRESS}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border bg-card p-4 shadow-sm">
              <Phone className="h-6 w-6 text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-body text-base font-semibold">Phone</h3>
                <a href={`tel:${PHONE_NUMBER}`} className="text-muted-foreground hover:text-accent transition-colors">
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>
             <div className="flex items-start gap-4 rounded-xl border bg-card p-4 shadow-sm">
              <MessageCircle className="h-6 w-6 text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-body text-base font-semibold">WhatsApp</h3>
                <a href={WHATSAPP_BOOK_NOW_LINK} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                  Chat with us
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl border bg-card p-4 shadow-sm">
                <div className="shrink-0">
                    <h3 className="font-body text-base font-semibold">Follow Us</h3>
                </div>
                <div className="flex space-x-4">
                    <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors"><Instagram className="h-6 w-6" /></a>
                </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden border shadow-xl aspect-video h-80 md:h-96 w-full">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d397.3107472310595!2d73.73696598303616!3d18.6694635795924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b1cb9f862f5b%3A0x36daca8aa3e8f4c6!2sShree%20Om%20Annapurna%20Caterers!5e0!3m2!1sen!2sin!4v1759243080133!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location of Shree Om Annapurna Caterers in Ravet, Pune"
                ></iframe>
            </div>
            <Button asChild>
                <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer">
                    Show in Google Maps
                </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

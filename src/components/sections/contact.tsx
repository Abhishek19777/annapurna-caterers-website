
import React from 'react';
import { PHONE_NUMBER, ADDRESS, GOOGLE_MAPS_LINK, INSTAGRAM_LINK, WHATSAPP_BOOK_NOW_LINK } from '@/lib/constants';
import { Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-4xl font-headline mb-4">Get In Touch</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear about your event. Contact us for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-lg">Address</h3>
                <p className="text-muted-foreground">{ADDRESS}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-lg">Phone</h3>
                <a href={`tel:${PHONE_NUMBER}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <MessageCircle className="h-6 w-6 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-lg">WhatsApp</h3>
                <a href={WHATSAPP_BOOK_NOW_LINK} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Chat with us
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0">
                    <h3 className="font-bold text-lg">Follow Us</h3>
                </div>
                <div className="flex space-x-4 pt-1">
                    <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-6 w-6" /></a>
                </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-lg overflow-hidden shadow-lg aspect-video h-80 md:h-96 w-full">
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

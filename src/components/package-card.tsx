
'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/lib/constants';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

type PackageItem = string;

type PackageData = {
  name: string;
  items: PackageItem[];
  whatsappLink: string;
};

interface PackageCardProps {
  packageData: PackageData;
}

const FormSchema = z.object({
  guests: z.coerce.number().min(1, 'Please enter a valid number of guests.'),
  eventType: z.string().min(3, 'Event type is required.'),
});

type FormValues = z.infer<typeof FormSchema>;

const PackageCard: React.FC<PackageCardProps> = ({ packageData }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const message = `Hello! I'm interested in the ${packageData.name}. Event Type: ${data.eventType}, Number of Guests: ${data.guests}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsDialogOpen(false);
  };

  return (
    <>
      <Card className="group flex flex-col overflow-hidden rounded-2xl border-0 bg-card shadow-[0_10px_40px_-12px_hsl(350_60%_20%/0.25)] ring-1 ring-border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-12px_hsl(350_60%_20%/0.35)] hover:ring-primary/60">
        <CardHeader className="border-b border-dashed border-primary/40 pb-4 mx-6 px-0 mb-4">
          <CardTitle className="font-headline text-3xl font-bold leading-tight text-accent">{packageData.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="space-y-3 text-[15px] text-foreground/80">
            {packageData.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <Check className="mr-3 mt-0.5 h-5 w-5 shrink-0 rounded-full bg-primary/20 p-1 text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="p-6">
          <Button size="lg" className="w-full rounded-full bg-accent text-accent-foreground shadow-md hover:bg-accent/90" onClick={() => setIsDialogOpen(true)}>
            Book This Package
          </Button>
        </CardFooter>
      </Card>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-headline text-2xl">Book {packageData.name}</DialogTitle>
            <DialogDescription>
              Please provide a few more details for your booking.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="guests" className="text-left sm:text-right">
                  Number of guests
                </Label>
                <div className="col-span-3">
                  <Input id="guests" type="number" {...register('guests')} />
                  {errors.guests && <p className="text-red-500 text-sm mt-1">{errors.guests.message}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="eventType" className="text-left sm:text-right">
                  Event Type
                </Label>
                <div className="col-span-3">
                  <Input id="eventType" {...register('eventType')} />
                  {errors.eventType && <p className="text-red-500 text-sm mt-1">{errors.eventType.message}</p>}
                </div>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">Confirm & Book</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PackageCard;

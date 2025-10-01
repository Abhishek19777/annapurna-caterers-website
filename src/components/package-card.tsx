
'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
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
    const whatsappUrl = `https://wa.me/919881337170?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsDialogOpen(false);
  };

  return (
    <>
      <Card className="flex flex-col bg-card hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="font-headline text-2xl text-accent">{packageData.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="space-y-3 text-muted-foreground">
            {packageData.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" onClick={() => setIsDialogOpen(true)}>
            Book This Package
          </Button>
        </CardFooter>
      </Card>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Book {packageData.name}</DialogTitle>
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

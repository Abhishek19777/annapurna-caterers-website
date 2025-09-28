import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

type PackageItem = string;

type PackageData = {
  name: string;
  items: PackageItem[];
  whatsappLink: string;
};

interface PackageCardProps {
  packageData: PackageData;
}

const PackageCard: React.FC<PackageCardProps> = ({ packageData }) => {
  return (
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
        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
          <a href={packageData.whatsappLink} target="_blank" rel="noopener noreferrer">
            Book This Package
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PackageCard;

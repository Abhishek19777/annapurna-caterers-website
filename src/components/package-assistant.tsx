"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { getPackageRecommendation } from "@/app/actions";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { PackageSelectionAssistantOutput } from "@/ai/flows/package-selection-assistant";
import { Sparkles } from "lucide-react";

const formSchema = z.object({
  eventType: z.string().min(2, {
    message: "Event type must be at least 2 characters.",
  }),
  numberOfGuests: z.coerce.number().min(1, {
    message: "Please enter at least 1 guest.",
  }),
  budget: z.coerce.number().min(1000, {
    message: "Budget must be at least 1000.",
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function PackageAssistant() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PackageSelectionAssistantOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventType: "",
      numberOfGuests: 50,
      budget: 50000,
    },
  });

  async function onSubmit(values: FormData) {
    setLoading(true);
    setError(null);
    setResult(null);
    
    const response = await getPackageRecommendation(values);
    
    if (response.success && response.data) {
        setResult(response.data);
    } else {
        setError(response.error || "Failed to get recommendation.");
    }

    setLoading(false);
  }

  return (
    <div id="ai-assistant" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto bg-secondary border-primary/50 border-2">
          <CardHeader className="text-center">
            <div className="flex justify-center items-center gap-2 mb-2">
                <Sparkles className="h-8 w-8 text-primary" />
                <CardTitle className="text-3xl font-headline">AI Package Advisor</CardTitle>
            </div>
            <CardDescription className="text-lg">
              Not sure which package to choose? Let our AI assistant help you decide!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <FormField
                    control={form.control}
                    name="eventType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Event Type</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Wedding, Birthday" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="numberOfGuests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Guests</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="e.g., 100" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Budget (INR)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="e.g., 75000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Thinking..." : "Get Recommendation"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      <AlertDialog open={!!result || !!error} onOpenChange={() => { setResult(null); setError(null); }}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
                {result ? "Our Recommendation For You" : "Oops!"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {result && (
                <div className="space-y-4 pt-4">
                  <div className="font-bold text-lg text-primary">{result.recommendedPackage}</div>
                  <div>{result.justification}</div>
                </div>
              )}
              {error && (
                <div className="text-destructive">{error}</div>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => { setResult(null); setError(null); }}>Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

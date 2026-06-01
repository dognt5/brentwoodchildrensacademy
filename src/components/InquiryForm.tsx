import * as React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const phoneTypeOptions = ["Mobile", "Home", "Work"] as const;
const hearAboutOptions = [
  "Advertising",
  "Drove by Location",
  "Event",
  "Facebook",
  "Google",
  "Phone Call",
  "Referral",
] as const;

const tourTimeOptions = [
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
] as const;

const baseSchema = {
  firstName: z.string().trim().min(1, "First name is required").max(50),
  lastName: z.string().trim().min(1, "Last name is required").max(50),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .regex(/^[\d\s()+-]+$/, "Enter a valid phone number"),
  phoneType: z.string().min(1, "Phone type is required"),
  email: z.string().trim().email("Enter a valid email address"),
  hearAbout: z.string().min(1, "Please tell us how you heard about us"),
  comments: z.string().max(1000).optional(),

  child1FirstName: z.string().trim().min(1, "Child's first name is required").max(50),
  child1LastName: z.string().trim().min(1, "Child's last name is required").max(50),
  child1Dob: z.date({ error: "Date of birth is required" }),
  child1StartDate: z.date({ error: "Desired start date is required" }),

  child2FirstName: z.string().trim().max(50).optional().or(z.literal("")),
  child2LastName: z.string().trim().max(50).optional().or(z.literal("")),
  child2Dob: z.date().optional(),
  child2StartDate: z.date().optional(),
};

const inquirySchema = z.object({
  ...baseSchema,
  tourDate: z.date().optional(),
  tourTime: z.string().optional(),
});

const tourInquirySchema = z.object({
  ...baseSchema,
  tourDate: z.date({ error: "Preferred date is required" }),
  tourTime: z.string().min(1, "Preferred time is required"),
});

type InquiryFormValues = z.infer<typeof inquirySchema>;

const DatePickerField = ({
  value,
  onChange,
  placeholder,
  disablePast = false,
  enableYearNav = false,
}: {
  value?: Date;
  onChange: (date: Date | undefined) => void;
  placeholder: string;
  disablePast?: boolean;
  enableYearNav?: boolean;
}) => {
  const today = new Date();
  const [month, setMonth] = React.useState<Date>(value ?? today);

  React.useEffect(() => {
    if (value) setMonth(value);
  }, [value]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-body font-normal px-4 py-3 h-auto rounded-xl border-border bg-card",
            !value && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? format(value, "MMM d, yyyy") : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={value}
          onSelect={onChange}
          month={month}
          onMonthChange={setMonth}
          captionLayout={enableYearNav ? "dropdown-buttons" : undefined}
          fromYear={enableYearNav ? today.getFullYear() - 12 : undefined}
          toYear={enableYearNav ? today.getFullYear() + 1 : undefined}
          disabled={
            disablePast
              ? (date) => {
                  const day = date.getDay();
                  return (
                    date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                    day === 0 ||
                    day === 6
                  );
                }
              : undefined
          }
          initialFocus
          className="p-3 pointer-events-auto"
        />
      </PopoverContent>
    </Popover>
  );
};

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <div className="pt-4 pb-1">
    <h3 className="font-display font-bold text-lg text-foreground">{children}</h3>
    <div className="h-0.5 w-12 bg-primary/40 rounded-full mt-1" />
  </div>
);

interface InquiryFormProps {
  tourMode?: boolean;
}

const InquiryForm = ({ tourMode = false }: InquiryFormProps) => {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<InquiryFormValues>({
    resolver: zodResolver(tourMode ? tourInquirySchema : inquirySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      phoneType: "",
      email: "",
      hearAbout: "",
      comments: "",
      child1FirstName: "",
      child1LastName: "",
      child2FirstName: "",
      child2LastName: "",
    },
  });

  const onSubmit = (data: InquiryFormValues) => {
    // Structure data for review
    const structured = {
      parent: {
        name: `${data.firstName} ${data.lastName}`,
        phone: `${data.phone} (${data.phoneType})`,
        email: data.email,
        hearAbout: data.hearAbout,
        comments: data.comments || "None",
      },
      ...(tourMode && data.tourDate
        ? {
            tour: {
              date: format(data.tourDate, "MMM d, yyyy"),
              time: data.tourTime || "No preference",
            },
          }
        : {}),
      child1: {
        name: `${data.child1FirstName} ${data.child1LastName}`,
        dob: format(data.child1Dob, "MMM d, yyyy"),
        startDate: format(data.child1StartDate, "MMM d, yyyy"),
      },
      child2:
        data.child2FirstName || data.child2LastName
          ? {
              name: `${data.child2FirstName || ""} ${data.child2LastName || ""}`.trim(),
              dob: data.child2Dob ? format(data.child2Dob, "MMM d, yyyy") : "Not provided",
              startDate: data.child2StartDate ? format(data.child2StartDate, "MMM d, yyyy") : "Not provided",
            }
          : null,
    };
    console.log("Inquiry submitted:", structured);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16 px-6"
      >
        <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-3">
          Thanks for Inquiring at Brentwood!
        </h2>
        <p className="text-muted-foreground font-body text-lg max-w-md mx-auto">
          We've received your information and a member of our team will reach out within one business day. See you soon! 🌟
        </p>
      </motion.div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* ── Parent Information ── */}
        <SectionHeading>Parent / Guardian Information</SectionHeading>

        <div className="grid sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-body font-semibold">First Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Jane" className="rounded-xl px-4 py-3 h-auto border-border bg-card font-body" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-body font-semibold">Last Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" className="rounded-xl px-4 py-3 h-auto border-border bg-card font-body" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-body font-semibold">Phone Number *</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="(713) 000-0000" className="rounded-xl px-4 py-3 h-auto border-border bg-card font-body" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-body font-semibold">Phone Type *</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="rounded-xl px-4 py-3 h-auto border-border bg-card font-body">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {phoneTypeOptions.map((opt) => (
                      <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-body font-semibold">Email Address *</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your@email.com" className="rounded-xl px-4 py-3 h-auto border-border bg-card font-body" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="hearAbout"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-body font-semibold">How did you hear about us? *</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="rounded-xl px-4 py-3 h-auto border-border bg-card font-body">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {hearAboutOptions.map((opt) => (
                    <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="comments"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-body font-semibold">Comments</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Any questions or additional information you'd like to share?"
                  rows={4}
                  className="rounded-xl px-4 py-3 border-border bg-card font-body"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ── Preferred Tour Date & Time (tour mode only) ── */}
        {tourMode && (
          <>
            <SectionHeading>Preferred Tour Date & Time</SectionHeading>
            <div className="grid sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="tourDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="font-body font-semibold">Preferred Date *</FormLabel>
                    <FormControl>
                      <DatePickerField value={field.value} onChange={field.onChange} placeholder="Select a date" disablePast />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tourTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-body font-semibold">Preferred Time *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value || ""}>
                      <FormControl>
                        <SelectTrigger className="rounded-xl px-4 py-3 h-auto border-border bg-card font-body">
                          <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {tourTimeOptions.map((t) => (
                          <SelectItem key={t} value={t}>{t}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <p className="text-muted-foreground font-body text-xs -mt-2">
              Tours available Mon–Fri, after 9:00 AM. We'll confirm your time within one business day.
            </p>
          </>
        )}

        {/* ── Child 1 Information ── */}
        <SectionHeading>Child 1 Information</SectionHeading>

        <div className="grid sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="child1FirstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-body font-semibold">First Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Child's first name" className="rounded-xl px-4 py-3 h-auto border-border bg-card font-body" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="child1LastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-body font-semibold">Last Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Child's last name" className="rounded-xl px-4 py-3 h-auto border-border bg-card font-body" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="child1Dob"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="font-body font-semibold">Date of Birth *</FormLabel>
                <FormControl>
                  <DatePickerField value={field.value} onChange={field.onChange} placeholder="Select date of birth" enableYearNav />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="child1StartDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="font-body font-semibold">Desired Start Date *</FormLabel>
                <FormControl>
                  <DatePickerField value={field.value} onChange={field.onChange} placeholder="Select start date" disablePast />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* ── Child 2 Information ── */}
        <SectionHeading>Child 2 Information (Optional)</SectionHeading>
        <p className="text-muted-foreground font-body text-sm -mt-2">
          If you have a second child to enroll, fill in their details below.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="child2FirstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-body font-semibold">First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Child's first name" className="rounded-xl px-4 py-3 h-auto border-border bg-card font-body" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="child2LastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-body font-semibold">Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Child's last name" className="rounded-xl px-4 py-3 h-auto border-border bg-card font-body" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="child2Dob"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="font-body font-semibold">Date of Birth</FormLabel>
                <FormControl>
                  <DatePickerField value={field.value} onChange={field.onChange} placeholder="Select date of birth" enableYearNav />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="child2StartDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="font-body font-semibold">Desired Start Date</FormLabel>
                <FormControl>
                  <DatePickerField value={field.value} onChange={field.onChange} placeholder="Select start date" disablePast />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Submit */}
        <div className="pt-4">
          <Button
            type="submit"
            className="bg-secondary text-secondary-foreground px-8 py-4 h-auto rounded-full text-base font-bold font-body hover:opacity-90 transition-all shadow-lg w-full sm:w-auto"
          >
            Request Information →
          </Button>
          <p className="text-muted-foreground font-body text-xs mt-3">
            We respect your privacy. Your information will only be used to respond to your inquiry.
          </p>
        </div>
      </form>
    </Form>
  );
};

export default InquiryForm;

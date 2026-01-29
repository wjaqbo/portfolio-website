"use client";

import { useEffect, useActionState, startTransition, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { createMessage } from "@/actions/contact";
import {
  ContactActionResponse,
  ContactDataType,
  contactSchema,
  formInitialState,
} from "@/lib/schemas/contact";

export function ContactForm() {
  const [formState, formAction, isPending] = useActionState<
    ContactActionResponse,
    FormData
  >(createMessage, formInitialState);

  const [uiSuccess, setUiSuccess] = useState(false);

  const form = useForm<ContactDataType>({
    resolver: zodResolver(contactSchema),
    defaultValues: formInitialState.data,
  });

  async function onSubmit(
    data: ContactDataType,
    event?: React.BaseSyntheticEvent,
  ) {
    const formData = new FormData(event?.target);
    startTransition(() => {
      formAction(formData);
    });
  }

  useEffect(() => {
    startTransition(() => {
      if (formState.success) {
        setUiSuccess(true);
      }
    });
  }, [formState]);

  useEffect(() => {
    if (uiSuccess) {
      toast("Thank you! You submitted the following values:", {
        description: (
          <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
            <code>{JSON.stringify(form.getValues(), null, 2)}</code>
          </pre>
        ),
        position: "bottom-right",
        classNames: {
          content: "flex flex-col gap-2",
        },
        style: {
          "--border-radius": "calc(var(--radius)  + 4px)",
        } as React.CSSProperties,
      });
      form.reset();
      startTransition(() => {
        setUiSuccess(false);
      });
    }
  }, [form, uiSuccess]);

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Make an appointment</CardTitle>
        <CardDescription>
          AI Agent will help you with your reservation
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="contact-form"
          // action={formAction}
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="contact-form-name">Your name</FieldLabel>
                  <Input
                    {...field}
                    id="contact-form-name"
                    aria-invalid={fieldState.invalid}
                    placeholder="John Doe"
                    autoComplete="off"
                  />
                  {formState.errors && (
                    <FieldError
                      errors={[{ message: formState.errors?.name }]}
                    />
                  )}
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="contact-form-email">Email</FieldLabel>
                  <Input
                    {...field}
                    id="contact-form-email"
                    aria-invalid={fieldState.invalid}
                    placeholder="example@gmail.com"
                    autoComplete="off"
                  />
                  {formState.errors && (
                    <FieldError
                      errors={[{ message: formState.errors?.email }]}
                    />
                  )}
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="contact-form-message">
                    Message
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id="contact-form-message"
                      placeholder="Tire change / Tire repair, date and hour"
                      rows={6}
                      className="min-h-24 resize-none"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText className="tabular-nums">
                        {field.value.length}/200 characters
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  <FieldDescription>
                    Include service type (eg. Tire change, Tire repair), date
                    and time of your service.
                  </FieldDescription>
                  {formState.errors && (
                    <FieldError
                      errors={[{ message: formState.errors?.message }]}
                    />
                  )}
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="contact-form" disabled={isPending}>
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}

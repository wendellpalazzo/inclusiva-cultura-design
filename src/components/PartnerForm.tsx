import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import {
  partnerSchema,
  PartnerSchema,
  partnerships,
} from "@/lib/types/partner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useToast } from "@/hooks/use-toast";
import { Input } from "./ui/input";
import { formatters } from "@/lib/strings";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

export const PartnerForm = () => {
  const { toast } = useToast();

  const form = useForm<PartnerSchema>({
    resolver: zodResolver(partnerSchema),
    defaultValues: {
      email: "",
      message: "",
      name: "",
      // partnership_type: "",
      phone: "",
      responsible: "",
      role: "",
    },
  });

  const onSubmit = async (data: PartnerSchema) => {

    const res = await fetch("/api/sendmail/partner", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      toast({
        title: "Erro ao enviar formulário",
        description:
          "Houve um erro ao enviar seu formulário. Tente novamente mais tarde.",
      });
      return;
    }

    toast({
      title: "Formulário enviado com sucesso!",
      description:
        "Agradecemos seu interesse em ser nosso parceiro. Entraremos em contato em breve.",
    });
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-normal block text-dark/80 mb-2">
                  Nome da Empresa *
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="w-full px-4 py-6 rounded-lg border border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-primary"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="responsible"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-normal block text-dark/80 mb-2">
                    Nome do Responsável *
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="w-full px-4 py-6 rounded-lg border border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-normal block text-dark/80 mb-2">
                    Cargo *
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="w-full px-4 py-6 rounded-lg border border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-normal block text-dark/80 mb-2">
                    Email *
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="w-full px-4 py-6 rounded-lg border border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-normal block text-dark/80 mb-2">
                    Telefone *
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      onChange={(e) => {
                        e.target.value = formatters.phoneNumber(e.target.value);
                        field.onChange(e);
                      }}
                      className="w-full px-4 py-6 rounded-lg border border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="partnership_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-normal block text-dark/80 mb-2">Tipo de Parceria de Interesse *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um tipo de parceria" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {partnerships.map((partner_type) => (
                      <SelectItem key={partner_type} value={partner_type}>
                        {partner_type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-normal block text-dark/80 mb-2">Mensagem *</FormLabel>
                <FormControl>
                  <Textarea className="min-h-32" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          disabled={form.formState.isSubmitting}
          type="submit"
          className="w-full bg-primary hover:bg-primary-600"
        >
          {form.formState.isSubmitting && <Loader2 className="animate-spin" />}
          Enviar Solicitação
        </Button>
      </form>
    </Form>
  );
};
